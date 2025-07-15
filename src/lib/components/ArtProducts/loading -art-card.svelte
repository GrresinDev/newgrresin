<script lang="ts">
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
</script>

<article class="mx-2 min-h-[200px] w-[280px] flex-shrink-0 sm:w-[320px] md:w-[320px] lg:w-[350px]">
	<div class="my-4 flex h-[450px] flex-col rounded-2xl border bg-gray-600/60 shadow-md">
		<!-- Image skeleton -->
		<div class="block aspect-square overflow-hidden rounded-t-2xl">
			<Skeleton class="h-full w-full object-cover" />
		</div>

		<!-- Content skeleton -->
		<div class="flex flex-grow flex-col justify-between space-y-3 p-2 sm:p-3 md:p-2.5">
			<!-- Title -->
			<Skeleton class="mx-auto h-5 w-3/4" />

			<!-- Description lines -->
			<div class="space-y-1">
				<Skeleton class="mx-auto h-3 w-full" />
				<Skeleton class="mx-auto h-3 w-11/12" />
				<Skeleton class="mx-auto h-3 w-10/12" />
			</div>
		</div>
	</div>
</article>
