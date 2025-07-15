<script lang="ts">
	//lucide Imports
	import Brain from '@lucide/svelte/icons/brain';
	import ChartLine from '@lucide/svelte/icons/chart-line';
	import Component from '@lucide/svelte/icons/component';
	import Lightbulb from '@lucide/svelte/icons/lightbulb';
	import Palette from '@lucide/svelte/icons/palette';
	import PencilRuler from '@lucide/svelte/icons/pencil-ruler';
	import type { Icon as IconType } from '@lucide/svelte';
	//----End
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';

	import type { PageData } from './$types';
	import Button from '$lib/components/ui/button/button.svelte';

	let locale = $state(getLocale());
	let isArabic = $derived(locale == 'ar');
	let value = $state<string>('');
	let { data }: { data: PageData } = $props();
	type WorkItem = {
		body: string;
		icon: typeof IconType;
	};
	const workWithUs: WorkItem[] = [
		{
			icon: Component,
			body: m.busy_tiny_mink_feast()
		},
		{
			icon: Lightbulb,
			body: m.gaudy_frail_rooster_ask()
		},
		{
			icon: ChartLine,
			body: m.bright_key_hawk_buzz()
		},
		{
			icon: PencilRuler,
			body: m.many_main_koala_mop()
		},
		{
			icon: Palette,
			body: m.smug_cool_sparrow_dream()
		},
		{
			icon: Brain,
			body: m.mild_aqua_worm_feel()
		}
	];
</script>

<section>
	<div class="relative z-10 max-w-full">
		{#if data.components['HeroCarousel']}
			{@const ContactCarousel = data.components['HeroCarousel']}
			<ContactCarousel />
		{/if}
	</div>
</section>
<p
	class="container mx-auto text-center text-3xl font-bold tracking-wide text-[#a71580] drop-shadow-2xl md:text-5xl"
>
	{m.swift_knotty_crow_arise()}
</p>
<section class=" container my-10 grid grid-cols-1 gap-x-8 gap-y-16 p-10 md:grid-cols-3">
	{#if data.components['CareerCard']}
		{@const CareerCard = data.components['CareerCard']}
		{#each workWithUs as content}
			<CareerCard body={content.body}>
				{@const Icon = content.icon}
				<Icon
					color="#a71580"
					strokeWidth={1.25}
					class="-mt-24 h-24 w-24 rounded-full bg-white p-2 shadow-black drop-shadow-2xl rtl:mr-52"
				/>
			</CareerCard>
		{/each}
	{/if}
</section>

<p class="text-primary container mx-auto my-5 min-h-20 text-center text-4xl font-thin">
	{m.misty_even_angelfish_taste()}
</p>

<div class="  px-10 py-10 md:py-16 lg:py-24 xl:px-0">
	<h2 class=" mb-14 text-center text-3xl leading-10 font-bold text-gray-900 lg:text-4xl">
		{m.clear_less_jackdaw_bump()}
	</h2>
	<div
		class="bg-gray-0 bg-opacity-5 mx-auto max-w-sm rounded-md border
 bg-clip-padding p-12 backdrop-blur-sm backdrop-filter sm:max-w-md md:max-w-xl lg:max-w-3xl
"
	>
		{#each data.position as postion (postion.id)}
			<div class="flex justify-between gap-x-8 border-b border-blue-500 py-6">
				<h3 class="text-xl leading-8 font-medium text-gray-900">
					{isArabic ? postion.name_ar : postion.name}
				</h3>
				<Button
					href={localizeHref('/careers#application')}
					onclick={() => {
						value = postion.id;
					}}
					class="siz-8 text-primary rounded-full   bg-indigo-50 font-semibold transition-all duration-700 hover:bg-indigo-100"
				>
					{m.known_jolly_cat_hurl()}
				</Button>
			</div>
		{/each}
	</div>
</div>

<section class="bg-primary" id="application">
	{#if data.components['CareerForm']}
		{@const CareerForm = data.components['CareerForm']}
		<CareerForm postions={data.position} bind:value bind:isArabic />
	{/if}
</section>
