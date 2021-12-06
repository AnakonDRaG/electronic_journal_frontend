import { z } from 'zod'

export const SignInValidation = z.object({
  login: z
    .string()
    .nonempty({ message: 'Please enter your email' })
    .email({ message: 'Please check your email' }),
  password: z.string().nonempty({ message: 'Please enter your password' }),
})
