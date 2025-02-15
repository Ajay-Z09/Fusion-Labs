
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  industry: z.string().min(1, "Please select your industry"),
  projectStage: z.string().min(1, "Please select a project stage"),
  timeline: z.string().min(1, "Please select your timeline"),
  budget: z.string().min(1, "Please select your budget range"),
  quantity: z.string().min(1, "Please enter your target quantity"),
  cadFile: z.instanceof(FileList).optional(),
  projectDetails: z.string().min(10, "Please provide more details about your project"),
});

export type QuoteFormValues = z.infer<typeof formSchema>;

export const industries = [
  "Automotive",
  "Medical Devices",
  "Consumer Electronics",
  "Aerospace",
  "Industrial Equipment",
  "Other"
];

export const projectStages = [
  "Initial Concept",
  "Design Phase",
  "Prototype Ready",
  "Production Ready",
  "Seeking Manufacturing Partner"
];

export const timelines = [
  "Immediate (< 1 month)",
  "Short-term (1-3 months)",
  "Medium-term (3-6 months)",
  "Long-term (6+ months)"
];

export const budgetRanges = [
  "Under $10,000",
  "$10,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+"
];

