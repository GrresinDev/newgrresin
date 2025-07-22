import type { PostModel, PostWithThumbnail } from '$lib/components/Blogs/interface';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=60`
	});

	const pb = locals.pb;

	const postPromise: Promise<PostWithThumbnail> = pb
		.collection('posts')
		.getFirstListItem<PostModel>(`slug="${params.slug}"`)
		.then((post: PostModel) => {
			const postWithImageUrl: PostWithThumbnail = {
				...post,
				thumbnail: pb.files.getURL(post, post.image)
			};
			return postWithImageUrl;
		});

	return { post: postPromise };
};
