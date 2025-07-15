import type { ReviewModel } from '$lib/components/About/interface';
import type { PageServerLoad } from './$types';
export const prerender = true;
export const csr = false;

export const load: PageServerLoad = async ({ locals }) => {
	const pb = locals.pb;
	const records: ReviewModel[] = await pb.collection('reviews').getFullList();
	return { reviews: records };
};
