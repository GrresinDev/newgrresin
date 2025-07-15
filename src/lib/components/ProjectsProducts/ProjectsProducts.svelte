<script lang="ts">
	import type { ProjectProductWithUrl } from '$lib/components/ProjectsProducts/interface';

	let { project, isArabic = $bindable() }: { project: ProjectProductWithUrl; isArabic: boolean } =
		$props();

	let name = $derived(isArabic ? project.name_ar : project.name);
	let description = $derived(isArabic ? project.descriptoin_ar : project.descriptoin);
</script>

<article
	class="flex w-full max-w-3xl flex-col space-y-3 rounded-2xl bg-white p-4 shadow-lg md:p-8"
	itemscope
	itemtype="https://schema.org/Product"
>
	<a
		href={project.tdsUrl}
		download="Tds.pdf"
		target="_blank"
		rel="noopener noreferrer"
		class="flex flex-col space-y-4 md:flex-row-reverse md:space-y-0 md:space-x-8 md:rtl:flex-row"
		itemprop="url"
		aria-label={`Download Technical Data Sheet for ${name}`}
	>
		<div class="flex h-24 w-full items-center justify-center md:h-24 md:basis-[60%] rtl:ml-3">
			<img
				src={project.imageUrl}
				alt={`Image of ${name}`}
				class="h-full w-full rounded-2xl object-contain"
				loading="lazy"
				itemprop="image"
			/>
		</div>
		<div class="mx-0 flex-1 md:basis-[40%]">
			<h2
				class="my-2 text-start text-lg font-bold tracking-wider text-wrap text-gray-800 md:text-lg"
				itemprop="name"
			>
				{name}
			</h2>
			<hr class="bg-primary mb-6 h-1 w-full" />
		</div>
	</a>

	<div class="flex-1">
		<p class="text-sm text-gray-600 md:text-base" itemprop="description">
			{description}
		</p>
	</div>

	<div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
		<meta itemprop="availability" content="https://schema.org/InStock" />
		<meta itemprop="priceCurrency" content="EUR" />
		<meta itemprop="price" content="0.00" />
	</div>
</article>
