import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useUiStore } from "@/store/uiStore";

const navLinks = [
  { path: "/", label: "首页" },
  { path: "/about", label: "关于" },
  { path: "/services", label: "服务" },
  { path: "/cases", label: "案例" },
  { path: "/contact", label: "联系" },
];

export function Navigation() {
  const { menuOpen, setMenuOpen } = useUiStore();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-md border-b border-ivory/10">
      <div className="container mx-auto flex items-center justify-between h-20">
        <Link to="/" className="font-display text-2xl text-ivory tracking-tight">
          Aurora<span className="text-gold">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm tracking-wider transition-colors duration-300 hover:text-gold ${
                location.pathname === link.path ? "text-gold" : "text-ivory/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-ivory p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-ink border-b border-ivory/10 px-6 pb-6">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-lg tracking-wider ${
                  location.pathname === link.path ? "text-gold" : "text-ivory/80"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
