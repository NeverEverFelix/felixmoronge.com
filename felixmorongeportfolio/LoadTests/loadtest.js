import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

// Define thresholds and controlled ramp-up to reduce timeout risk
export let options = {
  thresholds: {
    http_req_duration: ['p(95)<800'], // 95% of requests should be <800ms
    http_req_failed: ['rate<0.01'],   // <1% of requests can fail
  },
  stages: [
    { duration: '1m', target: 100 },   // warm-up
    { duration: '2m', target: 250 },   // moderate load
    { duration: '3m', target: 500 },   // heavier load
    { duration: '2m', target: 100000 },  // stress test
    { duration: '1m', target: 0 },   // ramp down
  ],
};

// Custom metrics
let customDuration = new Trend('custom_duration');
let failureRate = new Rate('check_failure_rate');

export default function () {
  const BASE_URL = 'https://www.felixmoronge.com';

  const pages = [
    '/',
     '/Enterprise-Grade%20CI%2FCD%20Case%20Study',
     '/Fabrics%20Web%20with%20Production-Grade%20DevOps%20Case%20Study',
    '/StoryBuilder%20My%20entry%20point%20to%20DevOps%20Case%20Study',
     '/Tutorial',
     '/Tutorial2',
  ];

  for (let page of pages) {
    const url = `${BASE_URL}${page}`;
    const res = http.get(url, {
      headers: {
        'User-Agent': 'k6LoadTester/1.0',
        'Cache-Control': 'no-cache',
      },
    });

    customDuration.add(res.timings.duration);

    const statusPassed = check(res, {
      '✅ status is 200': (r) => r.status === 200,
    });

    const bodyPassed = check(res, {
      '✅ body length > 100': (r) =>
        typeof r.body === 'string' && r.body.length > 100,
    });

    // Log details for debugging
    console.log(`🔍 ${url} | Status: ${res.status || 'N/A'} | Body length: ${typeof res.body === 'string' ? res.body.length : 'undefined'}`);

    // Warn about redirect or empty content
    if (res.status >= 300 && res.status < 400) {
      console.warn(`⚠️ Redirect detected: ${res.status} → ${res.headers['Location']}`);
    }
    if (typeof res.body !== 'string') {
      console.warn(`⚠️ Empty or failed response for ${url}`);
    }

    // Count as failed ONLY if status is not 200
    failureRate.add(!statusPassed);

    sleep(Math.random() * 2); // simulate user think time
  }
}
