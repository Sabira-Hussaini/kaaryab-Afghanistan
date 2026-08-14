"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type SavedContextType = {
  savedIds: string[];
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
};

const SavedContext =
  createContext<SavedContextType | undefined>(
    undefined
  );

const SAVED_KEY = "saved-opportunities";

function getInitialSaved(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const saved =
      localStorage.getItem(SAVED_KEY);

    if (!saved) {
      return [];
    }

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed)
      ? parsed
      : [];
  } catch {
    return [];
  }
}

export function SavedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [savedIds, setSavedIds] =
    useState<string[]>(getInitialSaved);

  useEffect(() => {
    try {
      localStorage.setItem(
        SAVED_KEY,
        JSON.stringify(savedIds)
      );
    } catch (error) {
      console.error(
        "Failed to save saved opportunities:",
        error
      );
    }
  }, [savedIds]);

  function toggleSaved(id: string): void {
    setSavedIds((previous) => {
      if (previous.includes(id)) {
        return previous.filter(
          (item) => item !== id
        );
      }

      return [...previous, id];
    });
  }

  function isSaved(id: string): boolean {
    return savedIds.includes(id);
  }

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

export function useSaved(): SavedContextType {
  const context = useContext(SavedContext);

  if (!context) {
    throw new Error(
      "useSaved must be used inside SavedProvider"
    );
  }

  return context;
}