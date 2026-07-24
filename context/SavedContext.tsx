"use client";

import { createContext, useContext, useEffect, useState } from "react";

type SavedContextType = {
  savedIds: string[];
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
};

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export function SavedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("saved-opportunities");

    if (saved) {
      setSavedIds(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "saved-opportunities",
      JSON.stringify(savedIds)
    );
  }, [savedIds]);

  const toggleSaved = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const isSaved = (id: string) => savedIds.includes(id);

  return (
    <SavedContext.Provider
      value={{
        savedIds,
        toggleSaved,
        isSaved,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  const context = useContext(SavedContext);

  if (!context) {
    throw new Error("useSaved must be used inside SavedProvider");
  }

  return context;
}