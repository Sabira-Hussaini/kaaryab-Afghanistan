import { z } from "zod";

export const opportunitySchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  organization: z
    .string()
    .min(2, "Organization is required"),

  category: z.enum(
    [
      "Job",
      "Internship",
      "Scholarship",
      "Remote Work",
      "Training",
      "Volunteer",
      "Online Course",
    ],
    {
      message: "Please select a category",
    }
  ),

  location: z
    .string()
    .min(2, "Location is required"),

  type: z.enum(
    [
      "Remote",
      "On-site",
      "Hybrid",
    ],
    {
      message: "Please select an opportunity type",
    }
  ),

  deadline: z
    .string()
    .min(1, "Deadline is required"),

  description: z
    .string()
    .min(
      10,
      "Description must be at least 10 characters"
    ),

  requirements: z
    .string()
    .min(
      5,
      "Requirements are required"
    ),

  tags: z
    .string()
    .min(
      2,
      "Tags are required"
    ),

  applyLink: z
    .string()
    .url("Enter a valid URL"),
});


export type OpportunityFormData =
  z.infer<typeof opportunitySchema>;