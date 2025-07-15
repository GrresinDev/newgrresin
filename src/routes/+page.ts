import type { PageLoad } from './$types';
export const prerender = false;

const getComponentPromise = (name: string) => {
	// $lib alias doesn't seem to work for dynamic imports
	return import(`../lib/components/${name}/${name}.svelte`);
};

export const load: PageLoad = async ({ data }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const components: any = {};
	components['Bento'] = (await getComponentPromise('Bento')).default;
	components['Stats'] = (await getComponentPromise('Stats')).default;
	components['ContactCarousel'] = (await import(`../lib/components/Contact/contact-carousel.svelte`)).default;

	return {
		components,
		artProductsPromise: data.art_products,
		projectProductsPromise: data.project_products,
		partner: data.partner,
		faq: data.faq
	};
};
