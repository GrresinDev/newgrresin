<script lang="ts">
	import '../app.css';
	import '@fontsource/almarai';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import Navbar from '$lib/components/Layout/Navbar.svelte';

	let { children } = $props();
</script>

<Toaster position="top-center"  />
<Navbar />
{@render children()}

<style>
	:global(body) {
		font-family: 'Almarai', sans-serif;
	}
</style>
