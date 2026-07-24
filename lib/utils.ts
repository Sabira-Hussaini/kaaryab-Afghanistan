import { opportunities } from "@/data/opportunities";

export function getAllOpportunities() {
  return opportunities;
}

export function getOpportunityById(id: string) {
  return opportunities.find((item) => item.id === id);
}

export function getFeaturedOpportunities() {
  return opportunities.filter((item) => item.featured);
}