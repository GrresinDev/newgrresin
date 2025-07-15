<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import type { FAQModel } from '$lib/components/Faq/interface';
	import { m } from '$lib/paraglide/messages';

	let {
		faq,

		isArabic = $bindable()
	}: { faq: FAQModel[]; isArabic: boolean } = $props();
	let value = $state('');
</script>

<!-- FAQ -->

<div
	class="mx-auto max-w-[85rem] rounded-3xl bg-[#e2e2e274] px-4 py-10 drop-shadow-2xl sm:px-6 lg:px-8 lg:py-14"
>
	<!-- Grid -->
	<div class="grid gap-10 md:grid-cols-5">
		<div class="md:col-span-2">
			<div class="max-w-xs">
				<h2
					class=" font-heading myshadow text-5xl font-bold tracking-tight drop-shadow-md md:text-6xl md:leading-tight lg:text-7xl dark:text-white"
				>
					{m.tame_big_bulldog_slurp()}
					<hr class="mt-2 ml-auto block h-1 w-full bg-blue-400" />
				</h2>
				<p class="mt-1 hidden text-gray-600 md:block dark:text-neutral-400">
					{m.safe_slow_javelina_cure()}
				</p>
			</div>
		</div>
		<!-- End Col -->

		<div class="md:col-span-3">
			<!-- Accordion -->
			<Accordion.Root type="single" class="divide-gray-200 dark:divide-neutral-700">
				{#each faq as faq}
					<Accordion.Item>
						<Accordion.Trigger
							class="group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:outline-hidden  md:text-3xl dark:text-neutral-200"
							>{isArabic ? faq.question_ar : faq.question}</Accordion.Trigger
						>
						<Accordion.Content class="w-full overflow-hidden">
							<p class="text-xl">
								{isArabic ? faq.answer_ar : faq.answer}
							</p>
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>

			<!-- End Accordion -->
		</div>
		<!-- End Col -->
	</div>
	<!-- End Grid -->
</div>

<!-- End FAQ -->

<style>
	.myshadow {
		text-shadow: 2px 2px #a715805b;
	}
</style>
