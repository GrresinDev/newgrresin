<script lang="ts">
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
</script>

<article class="flex w-full max-w-3xl flex-col space-y-3 rounded-2xl bg-white p-4 shadow-lg md:p-8">
	<!-- Image and Title Block -->
	<div
		class="flex flex-col space-y-4 md:flex-row-reverse md:space-y-0 md:space-x-8 md:rtl:flex-row"
	>
		<!-- Image Skeleton -->
		<div class="flex h-24 w-full items-center justify-center md:h-24 md:basis-[60%] rtl:ml-3">
			<Skeleton class="h-full w-full rounded-2xl" />
		</div>

		<!-- Title Skeleton -->
		<div class="mx-0 flex-1 md:basis-[40%]">
			<Skeleton class="mb-4 h-6 w-3/4" />
			<Skeleton class="bg-primary mb-6 h-1 w-full" />
		</div>
	</div>

	<!-- Description Skeleton -->
	<div class="flex-1 space-y-2">
		<Skeleton class="h-4 w-full" />
		<Skeleton class="h-4 w-11/12" />
		<Skeleton class="h-4 w-3/4" />
	</div>
</article>
