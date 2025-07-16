<script lang="ts">
	import { navigating } from '$app/state';
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	let showProgressBar = $state(false);

	let timeoutId: ReturnType<typeof setTimeout> | undefined;

	$effect(() => {
		if (navigating) {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				showProgressBar = true;
			}, 100);
		} else {
			clearTimeout(timeoutId);
			showProgressBar = false;
		}
	});

	const [send, receive] = crossfade({
		duration: 200,
		easing: quintOut
	});
</script>

{#if showProgressBar}
	<div
		class="progress-bar"
		in:send={{ key: 'progress' }}
		out:receive={{ key: 'progress' }}
		class:w-full={navigating}
		class:w-min={!navigating}
	></div>
{/if}

<style>
	.progress-bar {
		position: fixed;
		top: 0;
		left: 0;
		height: 3px;
		background-color: var(--color-primary);
		z-index: 1000;
		transition: width 0.3s ease-out;
	}
</style>
