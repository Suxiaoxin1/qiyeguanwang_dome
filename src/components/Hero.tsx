import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useAnimations";

export function Hero() {
  useScrollReveal();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg animate-grid-drift" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/50 to-ink" />

      <div className="relative container mx-auto text-center px-6">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-8 hero-title-line">
          Brand Studio · Since 2018
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] mb-8">
          <span className="hero-title-line block">为品牌</span>
          <span className="hero-title-line block italic text-gold">创造动人</span>
          <span className="hero-title-line block">的价值</span>
        </h1>
        <p className="text-warm text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed hero-title-line">
          Aurora Studio 是一家策略驱动型创意品牌工作室，帮助企业从零到一构建品牌，或为成熟品牌注入新的生命力。
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center hero-title-line">
          <Link
            to="/cases"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-ink transition-all duration-300 text-sm tracking-widest uppercase"
          >
            浏览案例
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ivory text-ink hover:bg-ivory/90 transition-all duration-300 text-sm tracking-widest uppercase"
          >
            开始合作
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ivory/40 animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}
