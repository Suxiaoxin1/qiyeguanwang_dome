import React from "react";
import { useUiStore } from "@/store/uiStore";
import { X } from "lucide-react";
import { cases } from "@/data/content";

export function CaseModal() {
  const { caseDetailId, closeCase } = useUiStore();
  const caseItem = cases.find((c) => c.id === caseDetailId);

  if (!caseItem) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      <div
        className="absolute inset-0 bg-ink/90 backdrop-blur-sm"
        onClick={closeCase}
      />
      <div className="relative w-full max-w-3xl bg-muted border border-ivory/10 p-8 md:p-12 animate-fade-up">
        <button
          onClick={closeCase}
          className="absolute top-6 right-6 text-ivory/60 hover:text-ivory transition-colors"
          aria-label="关闭"
        >
          <X size={24} />
        </button>

        <span className="text-gold text-sm tracking-widest uppercase">{caseItem.category} / {caseItem.year}</span>
        <h2 className="font-display text-4xl md:text-5xl text-ivory mt-4 mb-6">{caseItem.title}</h2>

        <div className="relative h-64 md:h-80 w-full mb-8 overflow-hidden">
          <img
            src={caseItem.imageUrl}
            alt={caseItem.title}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-ivory/80 leading-relaxed text-lg mb-8">{caseItem.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {caseItem.results.map((result) => (
            <div key={result} className="border border-ivory/10 p-4 text-center">
              <p className="text-gold font-display text-lg">{result}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          {caseItem.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 border border-ivory/20 text-ivory/70 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
