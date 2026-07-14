import React from "react";
import { useScrollReveal } from "@/hooks/useAnimations";
import { values } from "@/data/content";

export function About() {
  useScrollReveal();

  return (
    <main className="bg-ink pt-32 md:pt-40">
      <section className="container mx-auto pb-24 md:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] md:h-[560px] overflow-hidden" data-reveal>
            <div className="absolute inset-0 bg-gradient-to-br from-slate/40 to-ink" />
            <div className="absolute inset-0 grid-bg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-8xl md:text-9xl text-gold/20">A</div>
                <p className="text-ivory/60 tracking-widest uppercase mt-4 text-sm">Est. 2018 · Shanghai</p>
              </div>
            </div>
          </div>

          <div data-reveal>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight mb-8">
              让品牌成为
              <br />
              意义的载体
            </h2>
            <div className="space-y-6 text-ivory/70 text-lg leading-relaxed">
              <p>
                Aurora Studio 成立于 2018 年，是一家专注于品牌战略与视觉体验的独立创意工作室。我们的团队由策略顾问、品牌设计师、数字产品设计师与空间体验设计师组成，共同致力于为品牌创造持久价值。
              </p>
              <p>
                我们拒绝模板化产出，坚持以深度研究为起点，以独特叙事为内核，为每个品牌量身打造可感知、可传播、可生长的品牌系统。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 border-y border-ivory/10">
        <div className="container mx-auto">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-12" data-reveal>Values</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.id}
                className="border border-ivory/10 p-10 hover:border-gold/40 transition-colors duration-300"
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-2xl text-ivory mb-4">{value.title}</h3>
                <p className="text-ivory/60 leading-relaxed">{value.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center" data-reveal>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Team</p>
            <h2 className="font-display text-4xl md:text-5xl text-ivory mb-6">小而精的团队，大而有为的愿景</h2>
            <p className="text-ivory/70 text-lg leading-relaxed">
              我们始终保持精简的团队结构，确保每个项目都能获得核心团队的直接关注。从战略到执行，我们与客户并肩作战，共同见证品牌的成长。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {["策略总监", "设计总监", "数字产品", "空间体验"].map((role, index) => (
              <div
                key={role}
                className="aspect-square bg-muted flex flex-col items-center justify-center border border-ivory/10"
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-slate/20 mb-4" />
                <p className="text-ivory font-display text-lg">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
