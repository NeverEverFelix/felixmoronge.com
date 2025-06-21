import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidChartProps {
  chart: string;
}

export default function MermaidChart({ chart }: MermaidChartProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'loose', // Allow <br/> and HTML inside labels
    });

    const renderChart = async () => {
      try {
        // Clear previous content
        ref.current!.innerHTML = '';

        const { svg } = await mermaid.render(
          `mermaid-${Math.floor(Math.random() * 100000)}`,
          chart
        );

        ref.current!.innerHTML = svg;
      } catch (err) {
        console.error('Mermaid render error:', err);
      }
    };

    renderChart();
  }, [chart]);

  return <div ref={ref} className="mermaid" />;
}
