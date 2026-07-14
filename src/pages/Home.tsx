import React from "react";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseGrid } from "@/components/CaseGrid";
import { StatsSection } from "@/components/StatsSection";
import { NewsSection } from "@/components/NewsSection";
import { services } from "@/data/content";
import { useScrollReveal } from "@/hooks/useAnimations";

export function Home() {
  useScrollReveal();

  return (
    <main className="bg-ink">
      <Hero />

      <section className="py-24 md:py-36">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div data-reveal>
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Services</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
                用策略与创意
                <br />
                构建品牌系统
              </h2>
            </div>
            <p className="text-ivory/70 leading-relaxed self-end text-lg" data-reveal>
              我们相信，卓越的品牌不是偶然产生，而是由清晰的策略、独特的视觉语言与一致的体验共同塑造。Aurora Studio 为企业提供从品牌策略到视觉落地的一站式解决方案。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                compact={true}
              />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <CaseGrid />

      <NewsSection />
    </main>
  );
}
