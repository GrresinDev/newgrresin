import type {
	ProjectModel,
	ProjectTypeItem,
	ProjectWithThumbNail
} from '$lib/components/Projects/interface';
import type { PageServerLoad } from './$types';

export const load = (async ({ setHeaders, locals }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=60`
	});
	const pb = locals.pb;
	const projectTypes = await pb.collection('project_types').getList(1, 50, {
		fields: 'id,types,types_ar'
	});
	const itemsOnly: ProjectTypeItem[] = projectTypes.items;
	itemsOnly.unshift({
		id: 'all',
		types: 'all',
		types_ar: 'الكل'
	});

	const projectsPromise: Promise<ProjectWithThumbNail[]> = pb
		.collection('projects')
		.getFullList<ProjectModel>({ sort: '-created' })
		.then((records: ProjectModel[]) =>
			records.map((project: ProjectModel) => ({
				...project,
				before_thumbnail:
					project.before_images && project.before_images.length > 0
						? pb.files.getURL(project, project.before_images[0])
						: null,
				after_thumbnail:
					project.after_images && project.after_images.length > 0
						? pb.files.getURL(project, project.after_images[0])
						: null
			}))
		);

	return { projectTypes: itemsOnly, projectsPromise };
}) satisfies PageServerLoad;
