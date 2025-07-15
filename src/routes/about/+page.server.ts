import type { ReviewModel } from '$lib/components/About/interface';
import type { PageServerLoad } from './$types';
export const prerender = true;
export const load: PageServerLoad = async ({ locals, setHeaders }) => {
	setHeaders({
		'Cache-Control': 'public, max-age=2592000, immutable'
	});
	const pb = locals.pb;
	const records: ReviewModel[] = await pb.collection('reviews').getFullList();
	return { reviews: records };
};
