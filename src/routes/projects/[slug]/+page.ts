import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	return { project: data.project, beforeImages: data.beforeImages, afterImages: data.afterImages };
};
