import type { PageLoad } from './$types';

export const load = (async ({ data }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const components: any = {};

	components['CareerCard'] = (
		await import(`../../lib/components/Career/CareerCard.svelte`)
	).default;

	components['CareerForm'] = (
		await import(`../../lib/components/Career/CareerForm.svelte`)
	).default;
	return { components, position: data.position };
}) satisfies PageLoad;
