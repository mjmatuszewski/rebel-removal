"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface QuoteModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
