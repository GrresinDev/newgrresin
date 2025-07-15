<script lang="ts">
	class CountUp {
		static countUp({
			targetNumber,
			durationMs,
			callback
		}: {
			targetNumber: number;
			durationMs: number;
			callback: (formattedNumber: string) => void; // Callback now receives a formatted string
		}): void {
			let currentNumber = 0;
			const increment = Math.ceil(targetNumber / (durationMs / 16));

			callback(this.formatNumber(currentNumber)); // Initial formatted number

			const interval = setInterval(() => {
				currentNumber += increment;

				if (currentNumber >= targetNumber) {
					currentNumber = targetNumber;
					clearInterval(interval);
				}

				callback(this.formatNumber(currentNumber)); // Formatted number in each update
			}, 16);
		}

		// Helper function to format numbers
		private static formatNumber(number: number): string {
			if (number >= 1000000) {
				return `${(number / 1000000).toFixed(1)}M`;
			} else if (number >= 1000) {
				return `${(number / 1000).toFixed(1)}k`;
			} else {
				return number.toString();
			}
		}
	}

	const squareMeters: number = 1000000;
	let squareMetersText: string = $state('');
	const completedProjects: number = 50000;
	let completedProjectsText: string = $state('');
	const yearsInBusiness: number = 5;
	let yearsInBusinessText: string = $state('');
	let { reloade = $bindable() }: { reloade: boolean } = $props();
	$effect(() => {
		if (reloade) {
			CountUp.countUp({
				targetNumber: squareMeters,
				durationMs: 1500,
				callback: (formattedNumber) => {
					squareMetersText = formattedNumber;
				}
			});
			CountUp.countUp({
				targetNumber: completedProjects,
				durationMs: 1500,
				callback: (formattedNumber) => {
					completedProjectsText = formattedNumber;
				}
			});
			CountUp.countUp({
				targetNumber: yearsInBusiness,
				durationMs: 1500,
				callback: (formattedNumber) => {
					yearsInBusinessText = formattedNumber;
				}
			});
		} else {
			yearsInBusinessText = '';
			completedProjectsText = '';
			squareMetersText = '';
		}
	});
</script>

{#snippet divider()}
	<div class="w-20 border-t border-black lg:h-20 lg:w-1 lg:border-t-0 lg:border-l"></div>
{/snippet}
<div
	class="glass flex flex-col items-center justify-center gap-10 p-8 py-7 lg:flex-row"
	class:animate={reloade}
>
	<!-- Start -->
	<div class="space-y-1 rounded-2xl p-2">
		<span class="  block text-center text-6xl font-bold text-black md:text-8xl"
			>{squareMetersText}+</span
		>
		<p class="block"><strong>Projects</strong></p>
	</div>

	{@render divider()}
	<!-- End -->

	<!-- Start -->
	<div class="space-y-1 rounded-2xl p-2">
		<span class="block text-center text-6xl font-bold md:text-8xl">{completedProjectsText}+</span>
		<p class="myshadow block"><strong>Artisit</strong></p>
	</div>

	{@render divider()}
	<!--End -->

	<!--Start -->
	<div class="space-y-1 rounded-2xl p-2">
		<span class=" block text-center text-6xl font-bold md:text-8xl">
			{yearsInBusinessText}<span>yr</span>
		</span>
		<p class="myshadow block"><strong>Years </strong></p>
	</div>
	{@render divider()}
	<!--End -->

	<!--Start -->
	<div class="space-y-1 rounded-2xl p-2">
		<span class=" block text-center text-6xl font-bold md:text-8xl">{squareMetersText}+</span>
		<p class="myshadow block"><strong>Sales Points </strong></p>
	</div>
</div>

<style>
	.animate {
		animation: animate 1s cubic-bezier(0.26, 0.53, 0.74, 1.48) 0.5s backwards;
	}

	@keyframes animate {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
