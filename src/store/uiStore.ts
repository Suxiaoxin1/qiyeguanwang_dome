import type React from "react";
import { create } from "zustand";

interface UiState {
  menuOpen: boolean;
  caseDetailId: string | null;
  toast: string | null;
  setMenuOpen: (open: boolean) => void;
  openCase: (id: string) => void;
  closeCase: () => void;
  showToast: (message: string) => void;
  hideToast: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  menuOpen: false,
  caseDetailId: null,
  toast: null,
  setMenuOpen: (open) => set({ menuOpen: open }),
  openCase: (id) => set({ caseDetailId: id }),
  closeCase: () => set({ caseDetailId: null }),
  showToast: (message) => {
    set({ toast: message });
    setTimeout(() => set({ toast: null }), 3000);
  },
  hideToast: () => set({ toast: null }),
}));
