import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted border-t border-ivory/10">
      <div className="container mx-auto py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link to="/" className="font-display text-3xl text-ivory">
              Aurora<span className="text-gold">.</span>
            </Link>
            <p className="mt-6 text-warm max-w-sm leading-relaxed">
              以策略为起点，以设计为语言，为品牌创造持久而动人的价值。
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-body text-xs tracking-widest text-warm uppercase mb-6">导航</h4>
            <nav className="flex flex-col gap-4">
              {["首页", "关于", "服务", "案例", "联系"].map((label) => (
                <Link
                  key={label}
                  to={label === "首页" ? "/" : `/${label === "关于" ? "about" : label === "服务" ? "services" : label === "案例" ? "cases" : "contact"}`}
                  className="text-ivory/80 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                >
                  {label}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-body text-xs tracking-widest text-warm uppercase mb-6">联系</h4>
            <div className="flex flex-col gap-3 text-ivory/80">
              <p>上海市静安区南京西路 1266 号</p>
              <p>contact@aurora-studio.com</p>
              <p>+86 21 6288 8888</p>
            </div>
            <div className="flex gap-5 mt-8">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-colors"
                  aria-label="社交媒体"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-warm">
          <p>© 2024 Aurora Studio. 保留所有权利。</p>
          <p>沪 ICP 备 2024XXXXXX 号</p>
        </div>
      </div>
    </footer>
  );
}
