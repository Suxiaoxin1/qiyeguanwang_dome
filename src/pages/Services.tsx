import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useAnimations";
import { services } from "@/data/content";

export function Services() {
  const [open, setOpen] = useState<string | null>(services[0].id);
  useScrollReveal();

  return (
    <main className="bg-ink pt-32 md:pt-40 pb-24 md:pb-36">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20" data-reveal>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Services</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-6">
            从策略到落地，全链路品牌服务
          </h2>
          <p className="text-ivory/70 text-lg leading-relaxed">
            我们提供覆盖品牌生命周期的核心服务，从顶层策略到视觉系统，再到数字与空间体验，确保品牌在每个触点都保持一致而有力的表达。
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => {
            const isOpen = open === service.id;
            return (
              <div
                key={service.id}
                className="border border-ivory/10 bg-muted/30 overflow-hidden"
                data-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <button
                  className="w-full flex items-center justify-between p-8 md:p-10 text-left"
                  onClick={() => setOpen(isOpen ? null : service.id)}
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-gold/40 font-display text-3xl md:text-4xl">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl text-ivory">{service.title}</h3>
                      <p className="text-warm text-sm tracking-widest uppercase mt-1">{service.titleEn}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96" : "max-h-0"}`}
                >
                  <div className="px-8 md:px-10 pb-10 md:pb-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <p className="text-ivory/70 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-ivory/80 flex items-center gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
