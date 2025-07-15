import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

const OrderSchema = z.object({
	name: z
		.string()
		.min(2, { message: 'Too Short' })
		.refine((val) => val.length >= 2, 'Invalid content in name'),
	email: z.string().email(),
	phone: z.string().refine((val) => val.length >= 2, 'Invalid content in Phone'),
	city: z.string().refine((val) => val.length >= 2, 'Invalid content in City'),
	place: z.string().refine((val) => val.length >= 2, 'Invalid content in place')
});
export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const rawData = Object.fromEntries(formData);
		console.log(rawData);

		const result = OrderSchema.safeParse(rawData);
		if (!result.success) {
			const fieldErrors = result.error.formErrors.fieldErrors;
			const errorResponse = Object.entries(fieldErrors).reduce(
				(acc, [field, errors]) => {
					if (errors?.[0]) acc[field] = errors[0];
					return acc;
				},
				{} as Record<string, string>
			);
			console.log(errorResponse);
			return fail(400, {
				success: false,
				validation: errorResponse
			});
		}
		try {
			const pb = locals.pb;

			await pb.collection('floor_order').create(result.data);

			return { success: true, message: 'Message sent successfully!' };
		} catch (error) {
			console.error('PocketBase Error:', error);
			return fail(500, {
				success: false,
				message: 'Failed to send message. Please try again later.'
			});
		}
	}
};
