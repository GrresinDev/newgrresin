import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	return {
		posts: data.posts,
		recentPost: data.recentPost,
		carouselImageUrls: data.imagesCarouselPromise
	};
};
