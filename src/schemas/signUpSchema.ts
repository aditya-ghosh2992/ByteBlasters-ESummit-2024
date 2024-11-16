import { z } from "zod";

export const verifyUsername = z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(10, { message: "Username must be less than 10 characters long" })
    .regex(/^[a-zA-Z0-9._-]{3,10}$/, {
        message: " Username must only contain letters and numbers"
    })

export const signUpSchema = z.object({
    username : verifyUsername,
    email : z.string().email({ message: "Please provide a valid email" }),
    password : z.string().min(6, { message: "Password must be at least 6 characters long" }),
})