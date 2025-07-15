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
	components['BlureFade'] = (await import(`../lib/components/Animation/BlureFade.svelte`)).default;
	components['Hr'] = (await import(`../lib/components/Animation/Hr.svelte`)).default;
	components['ArtCard'] = (await import(`../lib/components/ArtProducts/ArtCard.svelte`)).default;
	components['LoadingArtCard'] = (await import(`../lib/components/ArtProducts/loading-art-card.svelte`)).default;
	components['ProjectsProducts'] = (await import(`../lib/components/ProjectsProducts/ProjectsProducts.svelte`)).default;
	components['LoadingProjectsProducts'] = (await import(`../lib/components/ProjectsProducts/loading-ProjectsProducts.svelte`)).default;
	components['Partners'] = (await import(`../lib/components/Partners/partners.svelte`)).default;
	components['Faq'] = (await import(`../lib/components/Faq/Faq.svelte`)).default;
	components['ContactForm'] = (await import(`../lib/components/Contact/contact-form.svelte`)).default;


	return {
		components,
		artProductsPromise: data.art_products,
		projectProductsPromise: data.project_products,
		partner: data.partner,
		faq: data.faq
	};
};
