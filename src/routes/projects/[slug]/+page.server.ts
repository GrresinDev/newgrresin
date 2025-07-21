import type { ProjectModel } from '$lib/components/Projects/interface';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=60`
	});

	const pb = locals.pb;
	try {
		const project: ProjectModel = await pb
			.collection('projects')
			.getFirstListItem<ProjectModel>(`slug="${params.slug}"`);

		const beforeImages = project.before_images.map((filename: string) =>
			pb.files.getURL(project, filename)
		);
		const afterImages = project.after_images.map((filename: string) =>
			pb.files.getURL(project, filename)
		);

		return { project, beforeImages, afterImages };
	} catch (_) {
		error(401, 'Project Not Found');
	}
};
