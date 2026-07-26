import { Opportunity } from "@/types/opportunity";

const STORAGE_KEY = "kaaryab-opportunities";

export function getStoredOpportunities(): Opportunity[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) return [];

    return JSON.parse(stored) as Opportunity[];
  } catch (error) {
    console.error("Failed to read opportunities:", error);
    return [];
  }
}

export function saveStoredOpportunities(
  opportunities: Opportunity[]
): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(opportunities)
    );
  } catch (error) {
    console.error(
      "Failed to save opportunities:",
      error
    );
  }
}
export function addOpportunity(
  opportunity: Opportunity
): void {
  const existing = getStoredOpportunities();

  const filtered = existing.filter(
    (item) => item.id !== opportunity.id
  );

  saveStoredOpportunities([
    ...filtered,
    opportunity,
  ]);
}
export function updateOpportunity(
  updatedOpportunity: Opportunity
): void {
  const existing = getStoredOpportunities();

  const updated = existing.map((item) =>
    item.id === updatedOpportunity.id
      ? updatedOpportunity
      : item
  );

  saveStoredOpportunities(updated);
}

export function deleteOpportunity(id: string): void {
  const existing = getStoredOpportunities();

  const updated = existing.filter(
    (item) => item.id !== id
  );

  saveStoredOpportunities(updated);
}

export function getOpportunityById(
  id: string
): Opportunity | null {
  const opportunity =
    getStoredOpportunities().find(
      (item) => item.id === id
    );

  return opportunity ?? null;
}

export function clearOpportunities(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);
}

export function getAllOpportunities(
  demoData: Opportunity[]
): Opportunity[] {
  const stored = getStoredOpportunities();

  const ids = new Set(
    demoData.map((item) => item.id)
  );

  return [
    ...demoData,
    ...stored.filter(
      (item) => !ids.has(item.id)
    ),
  ];
}