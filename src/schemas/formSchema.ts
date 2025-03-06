import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at  least 2 characters"),
  bio: z.string().min(2, "Last name must be at  least 2 characters"),
  email: z.string().email("Invalid email address"),
  nativeLocation: z.string().min(3, "Enter a valid location"),
  currentLocation: z.string().min(3, "Enter a valid location"),
  photo: z
    .any()
    .refine((file) => file instanceof File, "Please upload a valid image")
    .optional(),
});

export type StepFormData = z.infer<typeof formSchema>;
