import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	return { projectTypes: data.projectTypes, projectsPromise: data.projectsPromise };
};
