import React from "react";
import { useCountUp } from "@/hooks/useAnimations";

interface StatProps {
  end: number;
  suffix: string;
  label: string;
}

function StatItem({ end, suffix, label }: StatProps) {
  const { ref, display } = useCountUp({ end, suffix });

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-display text-5xl md:text-7xl text-ivory mb-3">{display}</div>
      <div className="text-warm text-sm tracking-widest uppercase">{label}</div>
    </div>
  );
}

export function StatsSection() {
  const stats = [
    { end: 120, suffix: "+", label: "完成项目" },
    { end: 45, suffix: "", label: "合作客户" },
    { end: 18, suffix: "", label: "行业奖项" },
    { end: 6, suffix: "年", label: "行业沉淀" },
  ];

  return (
    <section className="py-24 md:py-36 border-y border-ivory/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
