import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
export const prerender = true;
export const GET: RequestHandler = async ({ locals }) => {
	const pb = locals.pb;

	// Fetch slugs from your CMS (Pocketbase)
	const [blog_slugs_data, project_slugs_data] = await Promise.all([
		pb.collection('posts').getFullList({ fields: 'slug' }),
		pb.collection('projects').getFullList({ fields: 'slug' })
	]);

	const blogSlugs = blog_slugs_data.map((blog) => blog.slug);
	const projectSlugs = project_slugs_data.map((project) => project.slug);

	return await sitemap.response({
		origin: 'https://newgrresin.vercel.app',

		paramValues: {
			'/blog/[slug]': blogSlugs,
			'/projects/[slug]': projectSlugs
		}
	});
};
