<script lang="ts">
	import { page } from '$app/state';
	import { seo, type SeoData, type SeoPage } from '$lib';
	import { getLocale } from '$lib/paraglide/runtime';

	// Props in runes mode use $props()
	let { pageName }: { pageName: SeoPage } = $props();

	// Reactive state using $state
	let currentSeoData = $state<SeoData>(seo['en'][pageName]);
	let locale = $state(getLocale());

	$effect(() => {
		const typedLocale = locale as keyof typeof seo;

		if (seo[typedLocale]) {
			currentSeoData = seo[typedLocale][pageName];
		} else {
			console.warn(`SEO data not found for locale: ${locale}`);
		}
	});
</script>

<svelte:head>
	<title>{currentSeoData.title}</title>
	<meta name="description" content={currentSeoData.description} />
	<meta name="keywords" content={currentSeoData.keywords} />
	<meta property="og:title" content={currentSeoData.title} />
	<meta property="og:description" content={currentSeoData.description} />
	<meta property="og:image" content={currentSeoData.image} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
    <link rel="canonical" href={page.url.href} />
	<meta name="twitter:card" content="Graffiti Resin Logo" />
	<meta name="twitter:title" content={currentSeoData.title} />
	<meta name="twitter:description" content={currentSeoData.description} />
	<meta name="twitter:image" content={currentSeoData.image} />
</svelte:head>
