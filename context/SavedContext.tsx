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
  createContext<SavedContextType | undefined>(undefined);

const SAVED_KEY = "saved-opportunities";

export function SavedProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [savedIds, setSavedIds] = useState<string[]>([]);


  // Load saved opportunities
  useEffect(() => {
    try {
      const saved =
        localStorage.getItem(SAVED_KEY);

      if (saved) {
        setSavedIds(JSON.parse(saved));
      }
    } catch (error) {
      console.error(
        "Failed to load saved opportunities:",
        error
      );
    }
  }, []);


  // Save opportunities whenever state changes
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


  const toggleSaved = (id: string) => {
    setSavedIds((previous) =>
      previous.includes(id)
        ? previous.filter(
            (item) => item !== id
          )
        : [...previous, id]
    );
  };


  const isSaved = (id: string) => {
    return savedIds.includes(id);
  };


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
    throw new Error(
      "useSaved must be used inside SavedProvider"
    );
  }

  return context;
}