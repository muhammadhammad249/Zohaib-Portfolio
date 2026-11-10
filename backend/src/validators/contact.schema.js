import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must not exceed 80 characters"),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Please provide a valid email address"),
  subject: z
    .string({ required_error: "Subject is required" })
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(120, "Subject must not exceed 120 characters"),
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must not exceed 2000 characters"),
  honeypot: z
    .string()
    .optional()
    .refine((val) => !val || val.length === 0, {
      message: "Spam submission detected"
    })
});

