<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { type Icon as IconType } from '@lucide/svelte';

	interface Info {
		title: string;
		date: string;
		description: string;
		Icon?: typeof IconType;
	}
	let { event, isLast }: { event: Info; isLast: boolean } = $props();
</script>

<div class="group relative py-3 pl-4 sm:pl-10">
	{#if !isLast}
		<div
			class="bg-border absolute top-[18%] bottom-0 left-6 w-0.5 transition-colors duration-300 group-hover:bg-[#a71580] sm:left-3"
		></div>
	{/if}

	<div
		class="bg-border absolute top-3.5 left-1 h-4 w-4 rounded-full border-4 border-black transition-colors duration-300 group-hover:border-[#a71580] sm:left-0.5"
	></div>

	<Card.Root
		class="ml-6 bg-transparent transition-shadow duration-300 ease-in-out group-hover:border-[#a71580]/50 hover:shadow-lg sm:ml-4"
	>
		<Card.Header class="bg-transparent pb-2">
			<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
				<Card.Title
					class="text-primary text-base transition-colors duration-300 group-hover:text-[#a71580] sm:text-lg"
				>
					{event.title}
				</Card.Title>
				<span class="text-muted-foreground px-2 py-1 text-xs font-semibold">
					{event.date}
				</span>
			</div>
		</Card.Header>

		<Card.Content>
			<div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-0 sm:space-x-3">
				{#if event.Icon}
					{@const Icon = event.Icon}
					<Icon class=" h-5 w-5 shrink-0" />
				{/if}
				<Card.Description class="text-foreground/80 text-sm">{event.description}</Card.Description>
			</div>
		</Card.Content>
	</Card.Root>
</div>
