import React from "react";
import { ArrowRight } from "lucide-react";
import { news } from "@/data/content";

export function NewsSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4" data-reveal>News</p>
            <h2 className="font-display text-4xl md:text-5xl text-ivory" data-reveal>
              最新动态
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-ivory/70 hover:text-gold transition-colors text-sm tracking-widest uppercase"
          >
            查看全部
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={item.id}
              className="group border-t border-ivory/20 pt-8"
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4 text-sm text-warm">
                <span>{item.date}</span>
                <span className="w-8 h-px bg-ivory/20" />
                <span className="text-gold">{item.category}</span>
              </div>
              <h3 className="font-display text-xl md:text-2xl text-ivory group-hover:text-gold transition-colors leading-snug">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
