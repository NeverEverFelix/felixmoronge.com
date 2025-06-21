import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

// Define thresholds and stages
export let options = {
  thresholds: {
    http_req_duration: ['p(95)<800'], // 95% of requests should be <800ms
    http_req_failed: ['rate<0.01'],   // <1% of requests can fail
  },
  stages: [
    { duration: '1m', target: 50 },   // ramp up
    { duration: '2m', target: 200 },  // sustain
    { duration: '2m', target: 500 },  // high traffic
    { duration: '1m', target: 0 },    // ramp down
  ],
};

// Custom metrics
let customDuration = new Trend('custom_duration');
let failureRate = new Rate('check_failure_rate');

export default function () {
  const BASE_URL = 'https://felixmoronge.com';

  // Match actual routes from App.tsx
  const pages = [
    '/'
  // '/Enterprise-Grade%20CI%2FCD%20Case%20Study',
  // '/Fabrics%20Web%20with%20Production-Grade%20DevOps%20Case%20Study',
  // '/StoryBuilder%20My%20entry%20point%20to%20DevOps%20Case%20Study',
  // '/Tutorial',
  // '/Tutorial2',
  ];

  for (let page of pages) {
    const res = http.get(`${BASE_URL}${page}`, {
      headers: {
        'User-Agent': 'k6LoadTester/1.0',
        'Cache-Control': 'no-cache',
      },
    });

    customDuration.add(res.timings.duration);

    const passed = check(res, {
      'status is 200': (r) => r.status === 200,
      'body is not empty': (r) => r.body && r.body.length > 0,
    });

    failureRate.add(!passed);
    sleep(Math.random() * 2); // Simulate user pause
  }
}
