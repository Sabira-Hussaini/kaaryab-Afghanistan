import { Opportunity } from "@/types/opportunity";

const STORAGE_KEY = "kaaryab-opportunities";

export function getStoredOpportunities(): Opportunity[] {
  if (typeof window === "undefined") return [];

  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) return [];

  return JSON.parse(stored);
}

export function saveStoredOpportunities(
  opportunities: Opportunity[]
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(opportunities)
  );
}

export function addOpportunity(opportunity: Opportunity) {
  const existing = getStoredOpportunities();

  existing.push(opportunity);

  saveStoredOpportunities(existing);
}

export function deleteOpportunity(id: string) {
  const opportunities = getStoredOpportunities();

  const updated = opportunities.filter(
    (item) => item.id !== id
  );

  saveStoredOpportunities(updated);
}


export function updateOpportunity(updatedOpportunity: Opportunity) {
  const existing = getStoredOpportunities();

  const updated = existing.map((item) =>
    item.id === updatedOpportunity.id
      ? updatedOpportunity
      : item
  );

  saveStoredOpportunities(updated);
}