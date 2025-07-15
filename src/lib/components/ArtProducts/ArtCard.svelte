<script lang="ts">
	import type { ArtProductWithUrl } from './interface';

	let { product, isArabic = $bindable() }: { product: ArtProductWithUrl; isArabic: boolean } =
		$props();

	let name = $derived(isArabic ? product.name_ar : product.name);
	let description = $derived(isArabic ? product.description_ar : product.description);
</script>

<article
	class="mx-2 min-h-[200px] w-[280px] flex-shrink-0 sm:w-[320px] md:w-[320px] lg:w-[350px]"
	itemscope
	itemtype="https://schema.org/Product"
>
	<div class="my-4 flex h-[450px] flex-col rounded-2xl border bg-gray-600/60 shadow-md">
		<a
			class="block aspect-square overflow-hidden rounded-t-2xl"
			itemprop="url"
			aria-label={`View details for ${name}`}
			href={product.shop}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				class="h-full w-full object-cover"
				src={product.imageUrl}
				alt={`Thumbnail of ${name}`}
				loading="lazy"
				itemprop="image"
			/>
		</a>

		<div class="flex flex-grow flex-col justify-between p-2 sm:p-3 md:p-2.5">
			<h3
				class="mb-3 text-center text-sm font-bold tracking-tight text-white sm:text-base md:mb-2 md:text-[15px] lg:text-lg"
				itemprop="name"
			>
				{name}
			</h3>

			<p
				class="max-h-[120px] overflow-x-hidden overflow-y-auto text-center text-[13px] text-white sm:text-sm md:text-xs lg:text-sm"
				itemprop="description"
			>
				{description}
			</p>
		</div>
	</div>
</article>
