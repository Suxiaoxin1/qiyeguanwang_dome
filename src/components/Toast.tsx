import React from "react";
import { useUiStore } from "@/store/uiStore";

export function Toast() {
  const { toast } = useUiStore();
  if (!toast) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[70] bg-gold text-ink px-8 py-4 font-body text-sm animate-fade-up">
      {toast}
    </div>
  );
}
