import { z } from "nestjs-zod/z";

export const Password = z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password is too long")
    .regex(
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?!.* ).{8,50}$/,
        "Password must contain at least one letter and one number",
    );
