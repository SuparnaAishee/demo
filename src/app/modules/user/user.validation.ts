import { z } from "zod";


export const userValidationSchema=z.object({
  name :z.string().min(3, { message: "Name must be atleast 3 characters long" }),
    email:z.string().email(),       
    phone:z.string().optional(),
    password:z.string().min(6, { message: "Password must be atleast 6 characters long" }),
})
