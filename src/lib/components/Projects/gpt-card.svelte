<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import Eye from '@lucide/svelte/icons/eye';
	import type { ProjectWithThumbNail } from '$lib/components/Projects/interface';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';

	export let project: ProjectWithThumbNail;
	export let isArabic: boolean = false;

	let showAfter = false;
	const preloadImages = [project.before_thumbnail, project.after_thumbnail];
</script>

<svelte:head>
	<!-- Preload for better LCP -->
	{#each preloadImages as img}
		<link rel="preload" as="image" href={img} />
	{/each}

	<!-- Structured Data -->
	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "CreativeWork",
			"name": isArabic ? project.title_ar : project.title,
			"description": isArabic ? project.desc_ar : project.desc,
			"url": localizeHref(`${page.url.host}/projects/${project.slug}`),
			"image": project.after_thumbnail
		})}
	</script>
</svelte:head>

<a href={localizeHref(`/projects/${project.slug}`)} class="group block h-full">
	<Card.Root
		class="bg-card flex h-full flex-col overflow-hidden shadow-lg transition-shadow duration-300 ease-in-out group-hover:shadow-xl"
	>
		<!-- Header -->
		<Card.Header class="pb-2">
			<div class="flex items-start justify-between">
				<Card.Title
					class="text-primary mb-1 text-xl transition-colors duration-150 group-hover:text-[#a71580] lg:text-2xl"
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
						? 'bg-primary text-primary-foreground'
						: project.type === 'Residential'
							? 'bg-secondary text-secondary-foreground'
							: 'border-primary text-primary'}
				>
					{project.slug}
				</Badge>
			</div>

			<Card.Description class="text-muted-foreground line-clamp-2 text-sm">
				{#if isArabic}
					{@html project.desc_ar}
				{:else}
					{@html project.desc}
				{/if}
			</Card.Description>
		</Card.Header>

		<!-- Image Section -->
		<Card.Content class="flex flex-grow flex-col justify-between p-4">
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="relative mb-4 aspect-video w-full cursor-pointer overflow-hidden rounded-md"
				onmouseenter={() => (showAfter = true)}
				onmouseleave={() => (showAfter = false)}
			>
				<!-- After Image -->
				<img
					src={project.after_thumbnail}
					alt={`After: ${project.title}`}
					width="640"
					height="360"
					loading="lazy"
					class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
					class:opacity-100={showAfter}
					class:opacity-0={!showAfter}
				/>

				<!-- Before Image -->
				<img
					src={project.before_thumbnail}
					alt={`Before: ${project.title}`}
					width="640"
					height="360"
					loading="lazy"
					class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
					class:opacity-0={showAfter}
					class:opacity-100={!showAfter}
				/>

				<!-- Overlay Eye Icon -->
				<div
					class="absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				>
					<Eye class="h-10 w-10 text-white" />
				</div>

				<!-- Badge -->
				<Badge
					class="absolute top-2 left-2 z-20 bg-black/70 text-white backdrop-blur-sm"
					variant="default"
				>
					{showAfter ? 'After' : 'Before'}
				</Badge>
			</div>
		</Card.Content>
	</Card.Root>
</a>
