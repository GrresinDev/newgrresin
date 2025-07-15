import type { ArtProduct, ArtProductWithUrl } from '$lib/components/ArtProducts/interface';
import type { FAQModel } from '$lib/components/Faq/interface';
import type { PartnerModel, PartnerModelWithThumbnail } from '$lib/components/Partners/interface';
import type {
	ProjectProduct,
	ProjectProductWithUrl
} from '$lib/components/ProjectsProducts/interface';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { contactUsSchema } from '$lib/schema/contact-schema';

export const load: PageServerLoad = async ({ locals }) => {
	const pb = locals.pb;

	const artProductsPromise: Promise<ArtProductWithUrl[]> = pb
		.collection('art_products')
		.getFullList<ArtProduct>({ sort: '-created' })
		.then((records: ArtProduct[]) =>
			records.map((record: ArtProduct) => ({
				...record,
				imageUrl: pb.files.getURL(record, record.image)
			}))
		);

	const projectProductsPromise: Promise<ProjectProductWithUrl[]> = pb
		.collection('projects_products')
		.getFullList<ProjectProduct>({ sort: '-created' })
		.then((records: ProjectProduct[]) =>
			records.map((record: ProjectProduct) => ({
				...record,
				imageUrl: pb.files.getURL(record, record.image),
				tdsUrl: pb.files.getURL(record, record.tds)
			}))
		);
	const [partners, faq] = await Promise.all([
		pb.collection('partners').getFullList(),
		pb.collection('faq').getFullList<FAQModel>()
	]);

	const partenerWithThumb: PartnerModelWithThumbnail[] = partners.map((partner: PartnerModel) => ({
		...partner,
		thumbnail: pb.files.getURL(partner, partner.logo)
	}));

	return {
		art_products: artProductsPromise,
		project_products: projectProductsPromise,
		partner: partenerWithThumb,
		faq: faq
	};
};
export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const rawData = Object.fromEntries(formData);

		// Parse the form data against the Zod schema
		const result = contactUsSchema.safeParse({
			email: rawData.email,
			subject: rawData.subject,
			message: rawData.message
		});

		// If validation fails, return form errors
		if (!result.success) {
			const fieldErrors = result.error.formErrors.fieldErrors;
			const errorResponse = Object.entries(fieldErrors).reduce(
				(acc, [field, errors]) => {
					if (errors?.[0]) acc[field] = errors[0];
					return acc;
				},
				{} as Record<string, string>
			);

			return fail(400, {
				success: false,
				validation: errorResponse,
			
			});
		}

		try {
	
			const { email, subject, message } = result.data; 

			const pb = locals.pb;

			
			await pb.collection('contact').create({
				email,
				subject, 
				message
			});

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
