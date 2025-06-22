// components/K6LoadTestChart.tsx
// components/K6LoadTestChart.tsx
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import FadeInOnScroll from './FadeInOnScroll';

type MetricData = {
  name: string;
  value: number;
};

export default function K6LoadTestChart() {
  const [data, setData] = useState<MetricData[]>([]);

  useEffect(() => {
    fetch('/public/LoadTests/k6-summary.json')
      .then((res) => res.json())
      .then((json) => {
        const metrics = json.metrics;
        const parsed: MetricData[] = [
          { name: 'Avg Duration (ms)', value: metrics.http_req_duration?.avg || 0 },
          { name: 'P95 Duration (ms)', value: metrics.http_req_duration?.['p(95)'] || 0 },
          { name: 'Max VUs', value: metrics.vus_max?.value || 0 },
          { name: 'Failure Rate (%)', value: (metrics.http_req_failed?.rate || 0) * 100 },
        ];
        setData(parsed);
      });
  }, []);

  return (
    <FadeInOnScroll>
      <div className="loadtest-chart-section">
        <h2 className="section-title">Synthetic Load Test Results</h2>
        <p className="section-subtext">Live metrics from K6 test against production infrastructure</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="vertical" margin={{ left: 40, right: 40 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis type="number" stroke="#fff" />
            <YAxis dataKey="name" type="category" stroke="#fff" />
            <Tooltip />
            <Bar dataKey="value" fill="#4A4BA8" radius={[6, 6, 6, 6]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </FadeInOnScroll>
  );
}
