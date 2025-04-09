import { z } from "zod";

export const todoSchema = z.object({
  id: z.string(),
  name: z.string(),
  completed: z.boolean(),
});
export type TodoType = z.infer<typeof todoSchema>;

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  todos: z.array(todoSchema),
});
export type ProjectType = z.infer<typeof projectSchema>;
