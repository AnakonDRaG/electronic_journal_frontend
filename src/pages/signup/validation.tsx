import { z } from 'zod'

export const FirstStepScheme = z
  .object({
    login: z
      .string()
      .nonempty({ message: 'Please enter your email' })
      .email({ message: 'Please check your email' }),
    password: z.string().nonempty({ message: 'Please enter your password' }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
