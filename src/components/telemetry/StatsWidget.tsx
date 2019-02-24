import React from 'react';

export interface MetricItem {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

export const StatsWidget: React.FC = () => {
  const metrics: MetricItem[] = [
    { label: "Throughput (RPS)", value: "14,250", change: "+12.4%", positive: true },
    { label: "P99 Latency", value: "4.8 ms", change: "-8.1%", positive: true },
    { label: "Cache Hit Rate", value: "99.4%", change: "+0.3%", positive: true },
    { label: "Memory Usage", value: "142 MB", change: "-2.5%", positive: true }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {metrics.map((m, idx) => (
        <div key={idx} className="p-5 rounded-xl border border-[#22222a] bg-[#121218] shadow-sm">
          <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">{m.label}</div>
          <div className="text-2xl font-bold text-white tracking-tight">{m.value}</div>
          <div className={`text-xs mt-2 font-semibold ${m.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {m.change} vs last week
          </div>
        </div>
      ))}
    </div>
  );
};
