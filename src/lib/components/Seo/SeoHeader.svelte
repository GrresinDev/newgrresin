<script lang="ts">
	import { page } from '$app/state';
	import { seo, type SeoData, type SeoPage } from '$lib';
	import { deLocalizeHref, getLocale } from '$lib/paraglide/runtime';

	// Props in runes mode use $props()
	let { pageName }: { pageName: SeoPage } = $props();

	// Reactive state using $state

	let locale = $state(getLocale());
	let currentSeoData = $derived(locale == 'ar' ? seo['ar'][pageName] : seo['en'][pageName]);
</script>

<svelte:head>
	<title>{currentSeoData.title}</title>
	<meta name="description" content={currentSeoData.description} />
	<meta name="keywords" content={currentSeoData.keywords} />
	<meta property="og:title" content={currentSeoData.title} />
	<meta property="og:description" content={currentSeoData.description} />
	{#if pageName !== 'about'}
		<meta property="og:image" content={page.url.origin + currentSeoData.image} />

		<meta name="twitter:image" content={page.url.host + currentSeoData.image} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<link rel="canonical" href={page.url.href} />
	<meta name="twitter:card" content="Graffiti Resin Logo" />
	<meta name="twitter:title" content={currentSeoData.title} />
	<meta name="twitter:description" content={currentSeoData.description} />
</svelte:head>
