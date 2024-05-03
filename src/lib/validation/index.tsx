import z from "zod";




export const SignupValidation = z.object({
    name: z.string().min(3,{message:'Too Short'}),

    username: z.string().min(2).max(50),

    email: z.string().email(),

    password: z.string().min(8, {message:'Password must be at least 8 characters long.'})
  })

export const SigninValidation = z.object({

    email: z.string().email(),

    password: z.string().min(8, {message:'Password must be at least 8 characters long.'})
})