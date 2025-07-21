import type { ImagesModel, PostModel, PostWithThumbnail } from '$lib/components/Blogs/interface';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const pb = locals.pb;
	const postsPromise: Promise<PostWithThumbnail[]> = pb
		.collection('posts')
		.getFullList<PostModel[]>()
		.then((posts: PostModel[]) => {
			const postsWithImageUrls: PostWithThumbNail[] = posts.map((post: PostModel) => ({
				...post,
				thumbnail: pb.files.getURL(post, post.image)
			}));
			return postsWithImageUrls;
		});

	const recentPostPromise: Promise<PostWithThumbnail> = pb
		.collection('posts')
		.getFirstListItem<PostModel>('', { sort: '-created' })
		.then((recentPost: PostModel) => {
			const recentPostWithImageUrls: PostWithThumbnail = {
				...recentPost,
				thumbnail: pb.files.getURL(recentPost, recentPost.image)
			};
			return recentPostWithImageUrls;
		});

	const imagesCarouselPromise: Promise<string[]> = pb
		.collection('website_images')
		.getFirstListItem<ImagesModel>('name="blogs_carousel"')
		.then((imagesCarousel: ImagesModel) => {
			const carouselImageUrls = imagesCarousel.images.map((record) =>
				pb.files.getURL(imagesCarousel, record)
			);
			return carouselImageUrls;
		});

	return {
		posts: postsPromise,
		recentPost: recentPostPromise,
		imagesCarouselPromise: imagesCarouselPromise
	};
};
