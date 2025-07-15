import { z } from 'zod';

export const contactUsSchema = z
	.object({
		email: z.string().email({ message: 'Email is Required' }),
		subject: z.string().min(2, { message: 'Subject is Required' }),
		message: z.string().min(2, { message: 'Message is Required' })
	})
	.strict();
