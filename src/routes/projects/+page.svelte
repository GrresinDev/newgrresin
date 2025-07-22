<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import type { ProjectTypeItem } from '$lib/components/Projects/interface';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import Home from '@lucide/svelte/icons/home';
	import BrickWall from '@lucide/svelte/icons/brick-wall';
	import Droplet from '@lucide/svelte/icons/droplet';
	import FlaskConical from '@lucide/svelte/icons/flask-conical';
	import GlassWater from '@lucide/svelte/icons/glass-water';
	import LoaderCircle from '@lucide/svelte/icons/loader-circle';

	import type { PageData } from './$types';
	import { m } from '$lib/paraglide/messages';
	import Button from '$lib/components/ui/button/button.svelte';
	import { fade } from 'svelte/transition';
	import ProjectCard from '$lib/components/Projects/ProjectCard.svelte';
	import { cubicOut } from 'svelte/easing';
	import { page } from '$app/state';
	import SeoHeader from '$lib/components/Seo/SeoHeader.svelte';

	let { data }: { data: PageData } = $props();

	let locale = $state(getLocale());
	let isArabic = $derived(locale == 'ar');

	let activeTabId = $state(
		data.projectTypes.find((pt: ProjectTypeItem) => pt.types === 'all')?.id ||
			data.projectTypes[0]?.id
	);

	const iconMap: Record<string, typeof Home> = {
		[data.projectTypes.find((pt: ProjectTypeItem) => pt.types === 'all')?.id || '']: Home
	};

	const getIcon = (typeId: string, index: number) => {
		return iconMap[typeId] || [BrickWall, Droplet, FlaskConical, GlassWater][index % 4];
	};

	function onTabChange(value: string) {
		activeTabId = value;
	}

	$effect(() => {
		const initialTab = data.projectTypes.find((pt: ProjectTypeItem) => pt.types === 'all')?.id;
		if (initialTab) {
			activeTabId = initialTab;
		} else if (data.projectTypes.length > 0) {
			activeTabId = data.projectTypes[0].id;
		}
	});
</script>

<SeoHeader pageName="projects" />
<main>
	<section
		class="from-background to-card w-full rounded-lg bg-gradient-to-br py-20 shadow-xl md:py-32"
	>
		<div class="container mx-auto px-4 text-center sm:px-6 lg:px-8">
			<h1 class="text-primary mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
				{m.mean_small_anteater_hush()}
			</h1>
			<p class="text-foreground/80 mx-auto mb-10 max-w-2xl text-lg sm:text-xl">
				{m.cool_long_sheep_tear()}
			</p>
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button size="lg" href={localizeHref(`/projects#${activeTabId}`)}>
					{m.vexed_jolly_boar_blend()}
				</Button>
			</div>
		</div>
	</section>

	<section id="all" class="w-full py-16 md:py-24">
		<div class="container mx-auto px-4 sm:px-6 lg:px-8">
			<Tabs.Root value={activeTabId} onValueChange={onTabChange} class="mb-8">
				<Tabs.List
					class="grid h-auto w-full grid-cols-2 gap-2 rounded-lg bg-transparent p-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
				>
					{#each data.projectTypes as projectTypeConfig, i (projectTypeConfig.id)}
						{@const Icon = getIcon(projectTypeConfig.id, i)}
						<Tabs.Trigger
							value={projectTypeConfig.id}
							class="data-[state=active]:text-primary-foreground relative flex-1 px-2 py-2.5 text-sm font-bold uppercase transition-colors data-[state=active]:bg-[#a71580] data-[state=active]:shadow-md sm:text-base"
						>
							<Icon class="mr-2 hidden h-5 w-5 sm:inline-block" />
							{isArabic ? projectTypeConfig.types_ar : projectTypeConfig.types}
						</Tabs.Trigger>
					{/each}
				</Tabs.List>

				{#each data.projectTypes as projectTypeConfig (projectTypeConfig.id)}
					<Tabs.Content value={projectTypeConfig.id} class="mt-0">
						{#await data.projectsPromise}
							<div class="flex h-[50vh] w-full items-center justify-center">
								<LoaderCircle class="animate-spin " color="#a71580" size="100" />
							</div>
						{:then resolvedProjects}
							{@const filteredProjects = (() => {
								const selectedProjectType = data.projectTypes.find(
									(pt: ProjectTypeItem) => pt.id === activeTabId
								);
								if (selectedProjectType?.id === 'all') {
									return resolvedProjects;
								} else {
									return resolvedProjects.filter((project) => project.type === activeTabId);
								}
							})()}

							{#key activeTabId}
								<article
									class=" mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 lg:gap-8"
									in:fade={{ delay: 100, duration: 800, easing: cubicOut }}
									out:fade={{ duration: 400, easing: cubicOut }}
								>
									{#each filteredProjects as project (project.id)}
										<ProjectCard {project} bind:isArabic />
									{/each}
								</article>
								{#if filteredProjects.length === 0}
									<div class="flex items-center justify-center">
										<p class="text-muted-foreground mt-8 h-[50vh] text-center text-lg">
											No Projects Found for this Category
										</p>
									</div>
								{/if}
							{/key}
						{:catch error}
							<div class="py-8 text-center">
								<p class="text-lg text-red-600">Failed to load projects: {error.message}</p>
								<p class="text-muted-foreground">Please try refreshing the page.</p>
							</div>
						{/await}
					</Tabs.Content>
				{/each}
			</Tabs.Root>
		</div>
	</section>
</main>
