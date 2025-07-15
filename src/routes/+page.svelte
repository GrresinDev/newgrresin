<script lang="ts">
	//images
	import art from '$lib/assets/images/Home/art.webp?enhanced';
	import project from '$lib/assets/images/Home/project.webp?enhanced';
	//Paraglide Imports
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { inview } from 'svelte-inview';
	import BlureFade from '$lib/components/Animation/BlureFade.svelte';
	import Hr from '$lib/components/Animation/Hr.svelte';
	import Hero from '$lib/components/Hero/Hero.svelte';
	import ArtCard from '$lib/components/ArtProducts/ArtCard.svelte';

	import LoadingArtCard from '$lib/components/ArtProducts/loading -art-card.svelte';
	import ProjectsProducts from '$lib/components/ProjectsProducts/ProjectsProducts.svelte';
	import LoadingProjectsProducts from '$lib/components/ProjectsProducts/loading-ProjectsProducts.svelte';
	import Partners from '$lib/components/Partners/partners.svelte';

	import Faq from '$lib/components/Faq/Faq.svelte';
	import ContactForm from '$lib/components/Contact/contact-form.svelte';

	let locale = $state(getLocale());
	let isArabic = $derived(locale == 'ar');
	let statview = $state(false);

	let { data } = $props();
</script>

<Hero />

<section id="graffiti-resin-services" class=" mt-3 flex w-full flex-col px-0 py-10 md:px-4 lg:px-8">
	<article class=" w-full px-2 md:min-h-svh md:p-20">
		<h1 class="  myshadow ml-11 w-fit text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
			Our Services<br />
			<hr class=" bg-primary my-2 h-1 w-full" />
		</h1>
		{#if data.components['Bento']}
			{@const Bento = data.components['Bento']}
			<BlureFade once={true}>
				<Bento />
			</BlureFade>
		{/if}
	</article>
</section>

<section id="graffiti-resin-intro" class=" bg-primary text-accent py-20">
	<div class="container mx-auto">
		<h1 class="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
			{m.proof_teary_whale_offer()}
		</h1>
		<br />
		<h2
			class="  w-fit text-2xl font-semibold tracking-tight break-words text-ellipsis sm:text-3xl lg:text-4xl"
		>
			{m.cozy_brave_maggot_ripple()}
			<Hr
				id="small"
				borderColor="border-gray-500"
				options={{
					rootMargin: '-10px',
					unobserveOnEnter: true
				}}
			/>
		</h2>

		<p class="text-bold my-8 mr-0 text-justify text-3xl tracking-tighter text-pretty">
			{m.bright_legal_badger_strive()}
		</p>
	</div>
</section>

<section id="graffiti-resin-artisitc-section" class="my-20 md:h-[25rem]">
	<div class="flex h-full flex-col gap-8 md:flex-row-reverse">
		<div class="  md:h-full md:basis-3/5">
			<enhanced:img
				class="h-full w-full rounded-l-3xl object-cover shadow-2xl shadow-blue-300 rtl:rounded-r-3xl"
				src={art}
				alt="Graffiti Resin Art Gallarey"
			/>
		</div>

		<div class="mx-4 flex items-center justify-center break-words md:basis-2/5">
			<div class="container max-w-full px-8">
				<h1 class="mb-1 px-2 text-start text-3xl font-semibold md:text-5xl">
					{m.only_new_insect_offer()}
				</h1>
				<h2
					class="w-fit text-center text-2xl font-semibold tracking-wide sm:text-3xl md:tracking-tight lg:text-4xl"
				>
					{m.knotty_civil_donkey_gasp()}

					<hr class="mx-2 h-2 w-full rounded-sm border-0 bg-blue-400 md:my-10" />
				</h2>
				<p
					class="text-bold my-6 text-xl text-pretty hover:line-clamp-none hover:max-h-[500px] md:my-8 md:line-clamp-6 md:text-2xl"
				>
					{m.plane_swift_moth_grace()}
				</p>
			</div>
		</div>
	</div>
</section>

<section id="art_products" class="my-30">
	{#await data.artProductsPromise}
		<div class="  flex touch-auto snap-x snap-mandatory flex-nowrap overflow-x-scroll">
			{#each Array(20)}
				<LoadingArtCard />
			{/each}
		</div>
	{:then art_products}
		<div class=" custom-scroll flex touch-auto snap-x snap-mandatory flex-nowrap overflow-x-scroll">
			{#each art_products as product (product.id)}
				<ArtCard {product} bind:isArabic />
			{/each}
		</div>
	{:catch err}
		<p>Refresh The Page To View Our Product</p>
	{/await}
</section>

<section id="resin-art-projects" aria-labelledby="resin-projects-heading">
	<div class="flex flex-col gap-8 md:h-[20rem] md:flex-row-reverse">
		<div class="h-48 drop-shadow-2xl md:h-full md:basis-3/5">
			<enhanced:img
				class="h-full w-full rounded-l-md object-cover drop-shadow-2xl"
				src={project}
				alt="Large-scale graffiti resin mural installation"
			/>
		</div>

		<div class="container mx-auto self-center md:basis-2/5">
			<h2 id="resin-projects-heading" class="text-4xl font-bold md:text-5xl">
				{m.only_patchy_crow_file()}<br />
				{m.bad_formal_hamster_tickle()}
			</h2>

			<hr class="mx-4 my-4 h-2 w-48 rounded-sm border-0 bg-blue-400 pl-10 md:my-10" />

			<p class="text-lg text-gray-700 md:text-xl">
				{m.pink_best_ladybug_fetch()}
			</p>
		</div>
	</div>
</section>

<article id="custom-resin-projects" aria-labelledby="custom-resin-heading">
	<h3 id="custom-resin-heading" class="sr-only">Custom Resin Project Description</h3>
	<p
		class="my-8 mr-0 px-2 text-xl leading-loose font-thin text-pretty text-black drop-shadow-2xl md:text-3xl"
	>
		{m.mushy_this_anteater_stab()}
	</p>
</article>

<section id="project_products" class="my-10 p-5">
	{#await data.projectProductsPromise}
		<div class="grid grid-cols-1 gap-8 text-center sm:p-3 md:grid-cols-2">
			{#each Array(10)}
				<LoadingProjectsProducts />
			{/each}
		</div>
	{:then project_products}
		<div class="grid grid-cols-1 gap-8 text-center sm:p-3 md:grid-cols-2">
			{#each project_products as project, i (project.id)}
				<ProjectsProducts {project} bind:isArabic />
			{/each}
		</div>
	{/await}
</section>

<section id="partner">
	<h1 class="  myshadow w-fit px-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
		{m.noisy_witty_goose_favor()}<br />
		<span class=" ms-9 text-left">
			Graffiti Resin
			<hr class="mr-14 h-2 w-full rounded-sm border-0 bg-blue-400 md:my-10" />
		</span>
	</h1>

	<Partners partner={data.partner} />
</section>

<!--Statics Section-->
<section
	id="statics"
	use:inview={{ rootMargin: '-50px', unobserveOnEnter: true }}
	oninview_change={(event) => {
		const { inView } = event.detail;
		statview = inView;
	}}
>
	<div class=" mx-auto w-full max-w-7xl p-4 py-16 md:py-24">
		<h1
			class="font-heading myshadow my-5 w-fit px-3 text-start text-5xl font-bold tracking-tight drop-shadow-md md:text-6xl lg:text-7xl"
		>
			Graffiti Goals.

			<hr class=" my-2 h-2 w-full bg-blue-400" />
		</h1>
		{#if data.components['Stats']}
			{@const Stats = data.components['Stats']}
			<Stats reloade={statview} />
		{/if}
	</div>
</section>

<section id="faq" class="my-4">
	<Faq faq={data.faq} bind:isArabic />
</section>

<section id="contact" class="my-0">
	<div class=" flex-row-reverse overflow-hidden rounded-lg shadow-xl lg:flex">
		<div class="flex w-full items-center justify-start p-8 lg:w-1/2 ltr:pr-0 rtl:pl-0">
			{#if data.components['ContactCarousel']}
				{@const ContactCarousel = data.components['ContactCarousel']}
				<ContactCarousel />
			{/if}
		</div>

		<div class="w-full p-8 lg:w-1/2 lg:p-12">
			<h2 class="myshadow font-heading mb-3 w-fit text-start text-3xl font-bold md:text-5xl">
				{m.bald_major_carp_feel()}
				<hr class="mt-2 ml-auto block h-1 w-full bg-blue-400" />
			</h2>
			<p class="mb-8 text-start whitespace-pre-line text-gray-600">
				{m.round_zany_mule_hack()}
			</p>
			<ContactForm />
		</div>
	</div>
</section>

<style>
	.custom-scroll::-webkit-scrollbar-track {
		background-color: transparent;
	}

	/* Target the scrollbar thumb (the draggable part) */
	.custom-scroll::-webkit-scrollbar-thumb {
		background-color: #a71580;
	}

	/* Optional: Target the overall scrollbar to remove the visual space */
	.custom-scroll::-webkit-scrollbar {
		width: 10px; /* Remove scrollbar space */
		height: auto;
	}
</style>
