import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';

export let options = {
  thresholds: {
    http_req_duration: ['p(95)<800'], // 95% of requests should be <800ms
    http_req_failed: ['rate<0.01'],   // <1% errors
  },
  stages: [
    { duration: '1m', target: 50 },   // ramp-up to 50 users
    { duration: '2m', target: 200 },  // load phase
    { duration: '2m', target: 500 },  // high load
    { duration: '1m', target: 0 },    // ramp-down
  ],
};

let customDuration = new Trend('custom_duration');
let failureRate = new Rate('check_failure_rate');

export default function () {
  const BASE_URL = 'https://felixmoronge.com';

  const pages = [
    '/',
    '/tutorials',
    '/project3',
    '/project2',
    '/resume',
    '/#skills',
  ];

  for (let page of pages) {
    const res = http.get(`${BASE_URL}${page}`, {
      headers: {
        'User-Agent': 'k6LoadTester/1.0',
        'Cache-Control': 'no-cache',  // Optional: bust CDN if testing backend
      },
    });

    // Track response time
    customDuration.add(res.timings.duration);

    // Basic checks
    const passed = check(res, {
      'status is 200': (r) => r.status === 200,
      'body is not empty': (r) => r.body && r.body.length > 0,
    });

    failureRate.add(!passed);
    sleep(Math.random() * 2); // Add realism
  }
}
