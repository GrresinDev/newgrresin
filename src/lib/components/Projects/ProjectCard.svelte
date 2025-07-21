<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import Eye from '@lucide/svelte/icons/eye';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import type { ProjectWithThumbNail } from '$lib/components/Projects/interface';
	import { localizeHref } from '$lib/paraglide/runtime';

	// Props using $props() rune
	let {
		project,
		isArabic = $bindable()
	}: {
		project: ProjectWithThumbNail;
		isArabic: boolean;
	} = $props();

	// State using $state() rune
	let showAfter = $state(false); // Controls which image is visible

	// Helper function to construct the thumbnail URL with size
	function getThumbnailUrl(baseUrl: string, size: string): string {
		if (!baseUrl) return ''; // Handle cases where URL might be missing
		// Check if the URL already has a query string
		const separator = baseUrl.includes('?') ? '&' : '?';
		return `${baseUrl}${separator}thumb=${size}`;
	}

	const SIZES = {
		mobile: '340x192', // Roughly for max 375px wide screen, single column
		tablet: '580x326', // For md:grid-cols-2 on screens up to ~768px wide
		desktop: '720x405', // For md/lg:grid-cols-2 on screens up to ~1440px wide
		retina: '1440x810'
	};

	// Derived states using $derived() rune
	const beforeSrcset = $derived(
		`
		${getThumbnailUrl(project.before_thumbnail!, SIZES.mobile)} 340w,
		${getThumbnailUrl(project.before_thumbnail!, SIZES.tablet)} 580w,
		${getThumbnailUrl(project.before_thumbnail!, SIZES.desktop)} 720w,
		${getThumbnailUrl(project.before_thumbnail!, SIZES.retina)} 1440w
	`.trim()
	);

	const afterSrcset = $derived(
		`
		${getThumbnailUrl(project.after_thumbnail!, SIZES.mobile)} 340w,
		${getThumbnailUrl(project.after_thumbnail!, SIZES.tablet)} 580w,
		${getThumbnailUrl(project.after_thumbnail!, SIZES.desktop)} 720w,
		${getThumbnailUrl(project.after_thumbnail!, SIZES.retina)} 1440w
	`.trim()
	);

	const imageSizes = $derived(
		`
		(max-width: 640px) 100vw,
		(max-width: 768px) 50vw, 
		(max-width: 1024px) 50vw, 
		(min-width: 1025px) 400px,
		100vw 
	`.trim()
	);
</script>

<a href={localizeHref(`/projects/${project.slug}`)} class="group block">
	<Card.Root
		class="bg-card flex flex-col overflow-hidden shadow-lg transition-shadow duration-300 ease-in-out group-hover:shadow-xl"
	>
		<Card.Header class="px-3 pt-3 pb-1 sm:px-4 sm:pt-4 sm:pb-2">
			<div class="flex items-start justify-between">
				<Card.Title
					class="text-primary mb-1 text-base transition-colors duration-150 group-hover:text-[#a71580] sm:text-lg md:text-xl"
				>
					{isArabic ? project.title_ar : project.title}
				</Card.Title>

				<Badge
					variant={project.type === 'Commercial'
						? 'default'
						: project.type === 'Residential'
							? 'secondary'
							: 'outline'}
					class={project.type === 'Commercial'
						? 'bg-primary text-primary-foreground text-xs sm:text-sm'
						: project.type === 'Residential'
							? 'bg-secondary text-secondary-foreground text-xs sm:text-sm'
							: 'border-primary text-primary text-xs sm:text-sm'}
				>
					{project.slug}
				</Badge>
			</div>
			<Card.Description class="text-muted-foreground line-clamp-2 text-xs sm:text-sm">
				{#if isArabic}
					{@html project.desc_ar}
				{:else}
					{@html project.desc}
				{/if}
			</Card.Description>
		</Card.Header>

		<Card.Content class="flex flex-grow flex-col justify-between p-3 sm:p-4">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="relative mb-3 aspect-video w-full cursor-pointer overflow-hidden rounded-md"
				onmouseenter={() => (showAfter = true)}
				onmouseleave={() => (showAfter = false)}
				onclick={(e) => {
					e.preventDefault();
				}}
			>
				<img
					src={getThumbnailUrl(project.before_thumbnail!, SIZES.desktop)}
					srcset={beforeSrcset}
					sizes={imageSizes}
					alt={`Before: ${project.title}`}
					class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
					class:opacity-100={!showAfter}
					class:opacity-0={showAfter}
					loading="lazy"
				/>

				<img
					src={getThumbnailUrl(project.after_thumbnail!, SIZES.desktop)}
					srcset={afterSrcset}
					sizes={imageSizes}
					alt={`After: ${project.title}`}
					class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
					class:opacity-100={showAfter}
					class:opacity-0={!showAfter}
					loading="lazy"
				/>

				<div
					class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				>
					<Eye class="h-8 w-8 text-white sm:h-10 sm:w-10" />
				</div>

				<Badge
					class="absolute top-1 left-1 bg-black/70 text-xs text-white backdrop-blur-sm sm:top-2 sm:left-2 sm:text-sm"
					variant="default"
				>
					{showAfter ? 'After' : 'Before'}
				</Badge>
			</div>
		</Card.Content>
	</Card.Root>
</a>
