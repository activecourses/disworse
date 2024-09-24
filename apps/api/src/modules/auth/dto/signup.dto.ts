import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";
import { Password } from "../../../common/custom-validation/password";
import { Username } from "../../../common/custom-validation/username";

const signupSchema = z.object({
    name: z.string().transform((name) => name.trim()),
    email: z.string().email("Invalid email address"),
    dob: z.string().date("Date must be in the form yyyy-mm-dd"),
    username: Username,
    password: Password,
});

export class SignupDto extends createZodDto(signupSchema) {}
