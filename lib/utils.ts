import { opportunities as demoOpportunities } from "@/data/opportunities";
import { Opportunity } from "@/types/opportunity";
import { getStoredOpportunities } from "./storage";

export function getAllOpportunities(): Opportunity[] {
  if (typeof window === "undefined") {
    return demoOpportunities;
  }

  const stored = getStoredOpportunities();

  const all = [...demoOpportunities];

  stored.forEach((item) => {
    if (!all.some((opportunity) => opportunity.id === item.id)) {
      all.push(item);
    }
  });

  return all;
}

export function getOpportunityById(
  id: string
): Opportunity | undefined {
  return getAllOpportunities().find(
    (item) => item.id === id
  );
}

export function getFeaturedOpportunities(): Opportunity[] {
  return getAllOpportunities().filter(
    (item) => item.featured
  );
}

export function getOpportunitiesByCategory(
  category: string
): Opportunity[] {
  if (category === "All") {
    return getAllOpportunities();
  }

  return getAllOpportunities().filter(
    (item) => item.category === category
  );
}

export function searchOpportunities(
  query: string
): Opportunity[] {
  const search = query.toLowerCase().trim();

  return getAllOpportunities().filter((item) => {
    return (
      item.title.toLowerCase().includes(search) ||
      item.organization.toLowerCase().includes(search) ||
      item.location.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
    );
  });
}