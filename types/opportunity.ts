export type OpportunityCategory =
  | "Job"
  | "Internship"
  | "Scholarship"
  | "Remote Work"
  | "Training"
  | "Volunteer"
  | "Online Course";

export type OpportunityType =
  | "Remote"
  | "On-site"
  | "Hybrid";

export interface Opportunity {
  id: string;

  title: string;
  titleFa?: string;

  organization: string;
  organizationFa?: string;

  category: OpportunityCategory;

  location: string;
  locationFa?: string;

  type: OpportunityType;

  deadline: string;

  description: string;
  descriptionFa?: string;

  requirements: string[];
  requirementsFa?: string[];

  applyLink: string;

  tags: string[];

  featured?: boolean;
}