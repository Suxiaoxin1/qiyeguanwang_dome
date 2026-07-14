import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "@/data/content";

interface ServiceCardProps {
  service: Service;
  index: number;
  compact?: boolean;
}

export function ServiceCard({ service, index, compact = false }: ServiceCardProps) {
  return (
    <Link
      to="/services"
      className="group block border border-ivory/10 bg-muted/30 p-8 md:p-10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2"
      data-reveal
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex justify-between items-start mb-8">
        <span className="text-gold/60 font-display text-4xl md:text-5xl">
          0{index + 1}
        </span>
        <ArrowUpRight
          size={24}
          className="text-ivory/30 group-hover:text-gold transition-colors duration-300"
        />
      </div>

      <h3 className="font-display text-2xl text-ivory mb-2">{service.title}</h3>
      <p className="text-xs tracking-widest text-warm uppercase mb-6">{service.titleEn}</p>

      {!compact && (
        <>
          <p className="text-ivory/70 leading-relaxed mb-8">{service.description}</p>
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="text-sm text-ivory/60 flex items-center gap-3"
              >
                <span className="w-1 h-1 bg-gold rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}
    </Link>
  );
}
