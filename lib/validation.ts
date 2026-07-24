import { z } from "zod";

export const opportunitySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),

  organization: z.string().min(2, "Organization is required"),

  category: z.string(),

  location: z.string().min(2, "Location is required"),

  type: z.string(),

  deadline: z.string().min(1, "Deadline is required"),

  description: z.string().min(10, "Description must be at least 10 characters"),

  requirements: z.string().min(5, "Requirements are required"),

  applyLink: z.string().url("Enter a valid URL"),
});

export type OpportunityFormData = z.infer<typeof opportunitySchema>;