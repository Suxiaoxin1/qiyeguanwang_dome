import React from "react";
import { useState } from "react";
import { useUiStore } from "@/store/uiStore";
import { useScrollReveal } from "@/hooks/useAnimations";
import { cases, categories } from "@/data/content";

export function CaseGrid() {
  const [active, setActive] = useState("全部");
  const { openCase } = useUiStore();
  useScrollReveal();

  const filtered = active === "全部" ? cases : cases.filter((c) => c.category === active);

  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4" data-reveal>Cases</p>
            <h2 className="font-display text-4xl md:text-5xl text-ivory" data-reveal>
              精选案例
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-12" data-reveal>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm tracking-wider transition-all duration-300 border ${
                active === cat
                  ? "border-gold text-gold"
                  : "border-ivory/20 text-ivory/60 hover:border-ivory/40 hover:text-ivory"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, index) => (
            <button
              key={c.id}
              onClick={() => openCase(c.id)}
              className="group text-left"
              data-reveal
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <div className={`relative h-72 md:h-80 ${c.gradient} overflow-hidden mb-5`}>
                <img
                  src={c.imageUrl}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-ivory font-display text-xl">{c.title}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-xs text-ivory/70 px-2 py-1 border border-ivory/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl text-ivory group-hover:text-gold transition-colors">{c.title}</h3>
                  <p className="text-warm text-sm mt-1">{c.category} · {c.year}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
