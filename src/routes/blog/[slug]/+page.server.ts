import type { PostModel } from '$lib/components/Blogs/interface';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=60`
	});

	const pb = locals.pb;
	try {
		const post: PostModel = await pb.collection('posts').getFirstListItem(`slug="${params.slug}"`);

		const postWithImageUrl = {
			...post,
			thumbnail: pb.files.getURL(post, post.image)
		};

		return { post: postWithImageUrl };
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (_) {
		error(401, 'Project Not Found');
	}
};
