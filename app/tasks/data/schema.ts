import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  status: z.string(),
  label: z.string(),
  urgency: z.string(),
  editor: z.string(),
  assignee: z.string(),
  language: z.string(),
  confidence: z.number(),
});

export type Task = z.infer<typeof taskSchema>;
