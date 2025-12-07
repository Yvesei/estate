import { z } from "zod";

export const propertySchema = z.object({
  id: z.string(),
  title: z.string(),
  city: z.string(),
  price: z.number().positive(),
  surface: z.number().positive(),
});

export type PropertySchema = z.infer<typeof propertySchema>;