import { z } from "zod";

export const propertySchema = z.object({
  id: z.string(),
  title: z.string(),
  city: z.string(),
  price: z.number().positive(),
  surface: z.number().positive(),
});

export const createPropertySchema = z.object({
  title: z.string().min(1, "Title is required"),
  city: z.string().min(1, "City is required"),
  price: z.number().positive("Price must be positive"),
  surface: z.number().positive("Surface must be positive"),
});

export type PropertySchema = z.infer<typeof propertySchema>;
export type CreatePropertySchema = z.infer<typeof createPropertySchema>;