<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { quintOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import { localizeHref } from '$lib/paraglide/runtime';
	import Button from '$lib/components/ui/button/button.svelte';

	let countdown = $state(5);

	function redirectToHome() {
		goto(localizeHref('/'));
	}

	onMount(() => {
		const interval = setInterval(() => {
			countdown -= 1;
		}, 1000);

		return () => clearInterval(interval);
	});

	$effect(() => {
		if (countdown <= 0) {
			redirectToHome();
		}
	});
</script>

<div class="b flex min-h-screen items-center justify-center p-4 dark:bg-gray-900">
	<div
		class="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl md:p-12 dark:bg-gray-800"
		in:fade={{ duration: 500, easing: quintOut }}
		out:fade={{ duration: 300 }}
	>
		<div class="mb-6" transition:slide={{ duration: 700, easing: quintOut }}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mx-auto h-20 w-20 animate-bounce text-red-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</div>

		<h1
			class="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl dark:text-white"
			transition:slide={{ delay: 100, duration: 700, easing: quintOut }}
		>
			Oops! Blog Not Found.
		</h1>
		<p
			class="mb-6 text-lg text-gray-700 dark:text-gray-300"
			transition:slide={{ delay: 200, duration: 700, easing: quintOut }}
		>
			It looks like you've stumbled upon an error.
		</p>
		<p
			class="text-md mb-8 text-gray-600 dark:text-gray-400"
			transition:slide={{ delay: 300, duration: 700, easing: quintOut }}
		>
			You will be redirected to the home page in <span class="font-bold text-red-500"
				>{countdown}</span
			> seconds.
		</p>
		<div transition:slide={{ delay: 400, duration: 700, easing: quintOut }}>
			<Button
				onclick={redirectToHome}
				class="focus:ring-opacity-50 transform rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			>
				Go Home Now
			</Button>
		</div>
	</div>
</div>
