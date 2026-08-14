import { Opportunity } from "@/types/opportunity";

const STORAGE_KEY = "kaaryab-opportunities";
const DELETED_KEY = "kaaryab-deleted";

function getStoredOpportunities(): Opportunity[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function getDeletedIds(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const deleted = localStorage.getItem(DELETED_KEY);

    if (!deleted) {
      return [];
    }

    const parsed = JSON.parse(deleted);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveDeletedIds(ids: string[]): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(DELETED_KEY, JSON.stringify(ids));
}

function saveStoredOpportunities(
  opportunities: Opportunity[]
): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(opportunities)
  );
}

export function addOpportunity(
  opportunity: Opportunity
): void {
  const stored = getStoredOpportunities();

  const filtered = stored.filter(
    (item) => item.id !== opportunity.id
  );

  filtered.push(opportunity);

  saveStoredOpportunities(filtered);

  // If this ID was previously deleted, remove it
  // from the deleted list.
  const deletedIds = getDeletedIds();

  if (deletedIds.includes(opportunity.id)) {
    saveDeletedIds(
      deletedIds.filter(
        (id) => id !== opportunity.id
      )
    );
  }
}

export function updateOpportunity(
  opportunity: Opportunity
): void {
  const stored = getStoredOpportunities();

  const index = stored.findIndex(
    (item) => item.id === opportunity.id
  );

  if (index === -1) {
    stored.push(opportunity);
  } else {
    stored[index] = opportunity;
  }

  saveStoredOpportunities(stored);

  // Make sure an updated opportunity is not
  // still marked as deleted.
  const deletedIds = getDeletedIds();

  if (deletedIds.includes(opportunity.id)) {
    saveDeletedIds(
      deletedIds.filter(
        (id) => id !== opportunity.id
      )
    );
  }
}

export function deleteOpportunity(
  id: string
): void {
  // Remove it from custom/local opportunities.
  const stored = getStoredOpportunities();

  const remaining = stored.filter(
    (item) => item.id !== id
  );

  saveStoredOpportunities(remaining);

  // Also remember the ID as deleted.
  // This is important for demo opportunities,
  // because demo data comes from the source file.
  const deletedIds = getDeletedIds();

  if (!deletedIds.includes(id)) {
    deletedIds.push(id);
    saveDeletedIds(deletedIds);
  }
}

export function getOpportunityById(
  id: string,
  demoData: Opportunity[] = []
): Opportunity | null {
  const all = getAllOpportunities(demoData);

  return (
    all.find(
      (item) => item.id === id
    ) || null
  );
}

export function getAllOpportunities(
  demoData: Opportunity[]
): Opportunity[] {
  const stored = getStoredOpportunities();
  const deletedIds = getDeletedIds();

  const map = new Map<string, Opportunity>();

  // Add demo opportunities first.
  demoData
    .filter(
      (item) => !deletedIds.includes(item.id)
    )
    .forEach((item) => {
      map.set(item.id, item);
    });

  // Stored opportunities override demo opportunities
  // with the same ID.
  stored.forEach((item) => {
    if (!deletedIds.includes(item.id)) {
      map.set(item.id, item);
    }
  });

  return Array.from(map.values());
}

export function clearOpportunities(): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(DELETED_KEY);
}

export { getStoredOpportunities };