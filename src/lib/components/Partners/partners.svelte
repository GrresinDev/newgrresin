<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import type { PartnerModelWithThumbnail } from '$lib/components/Partners/interface';

	let { partner }: { partner: PartnerModelWithThumbnail[] } = $props();
</script>

<div
	class="relative overflow-hidden py-6 before:absolute before:start-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-linear-to-r before:from-white before:to-transparent after:absolute after:end-0 after:top-0 after:h-full after:w-20 after:bg-linear-to-l after:from-white after:to-transparent md:py-10 dark:before:from-neutral-900 dark:after:from-neutral-900"
>
	<div class="flex items-center justify-between gap-x-4">
		<Carousel.Root
			plugins={[
				Autoplay({
					delay: 2000
				})
			]}
			class="w-full px-8 "
		>
			<Carousel.Content class=" mx-3 px-8">
				{#each partner as p}
					<Carousel.Item class=" md:basis-1/4 lg:basis-1/4">
						<a href={p.company_url} class="cursor-pointer">
							<img src={p.thumbnail} alt="Graffiti Resin partner" class=" h-[200px] w-[340px]" />
						</a>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous class="z-[100] mx-20 size-8 bg-black text-white" />
			<Carousel.Next class="z-[100] mx-20 size-8 bg-black text-white" />
		</Carousel.Root>
	</div>
</div>
