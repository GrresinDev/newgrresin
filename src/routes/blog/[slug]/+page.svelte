<script lang="ts">
	import logo from '$lib/assets/images/Logo.png';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import type { PageData } from './$types';

	import Facebook from '@lucide/svelte/icons/facebook';
	import LoaderCircle from '@lucide/svelte/icons/loader-circle';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	import { getReadingTime } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import Sticky from '$lib/components/Projects/Sticky.svelte';
	import Sharing from '$lib/components/Projects/Sharing.svelte';

	let { data }: { data: PageData } = $props();
	let copied = $state(false);
	let fullUrl = $state('');
	let locale = $state(getLocale());
	let isArabic = $derived(locale == 'ar');
	function getd(post_date: Date) {
		const date: Date = new Date(post_date);

		return date.toLocaleDateString();
	}
	onMount(() => {
		fullUrl = `${window.location.origin}${page.url.pathname}`;
	});
	async function copyToClipBoard() {
		try {
			await navigator.clipboard.writeText(fullUrl);
			copied = true;

			setTimeout(() => (copied = false), 2000);
			toast.success('Copied To ClipBoard');
		} catch (err) {
			toast.error('Something Went Wrong ');
		}
	}
</script>

{#await data.post}
	<div
		class=" conatiner mx-auto flex h-screen max-w-4xl flex-row items-center justify-center pt-6 pb-12 lg:pt-10"
	>
		<div class="px-8 md:px-2">
			<LoaderCircle class="animate-spin " color="#a71580" size="100" />
		</div>
	</div>
{:then post}
	<!-- Blog Article -->
	<div class="  conatiner mx-auto max-w-4xl pt-6 pb-12 lg:pt-10">
		<div class="px-8 md:px-2">
			<!-- Avatar Media -->
			<div class="mb-6 flex items-center justify-between">
				<div class="flex w-full gap-x-5 sm:items-center sm:gap-x-3">
					<div class="shrink-0">
						<img class="size-12 rounded-full" src={logo} alt="Avatar" />
					</div>

					<div class="grow">
						<div class="flex items-center justify-between gap-x-2">
							<div>
								<div class="hs-tooltip inline-block [--placement:bottom] [--trigger:hover]">
									<div class="hs-tooltip-toggle block text-start sm:mb-1">
										<span class="font-semibold text-gray-800 dark:text-neutral-200">
											{m.company_name()}
										</span>
									</div>
								</div>

								<ul class="text-xs text-gray-500 dark:text-neutral-500">
									<li
										class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600"
									>
										{getd(post.created)}
									</li>
									<li
										class="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600"
									>
										{getReadingTime(isArabic ? post.desc_ar : post.desc, true)} min read
									</li>
								</ul>
							</div>

							<!-- Button Group -->
							<Sharing>
								<div
									class="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-800 shadow-2xs hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
								>
									<Facebook />
									Facebook
								</div>
							</Sharing>
							<!-- End Button Group -->
						</div>
					</div>
				</div>
			</div>
			<!-- End Avatar Media -->

			<!-- Content -->
			<div class="space-y-5 md:space-y-8">
				<div class="space-y-3">
					<h2 class="text-2xl font-bold md:text-3xl dark:text-white">
						{isArabic ? post.title_ar : post.title}
					</h2>

					<div class="text-lg text-gray-800 dark:text-neutral-200">
						{@html isArabic ? post.desc_ar : post.desc}
					</div>
				</div>
			</div>
			<!-- End Content -->
		</div>
	</div>

	<!-- End Blog Article -->

	<!-- Sticky Share Group -->

	<Sticky bind:likes={post.likes} {copyToClipBoard} />
{/await}

<!-- End Sticky Share Group -->

<style>
	:global(body) {
		background-size: 150%;
	}
	/* Apply to all paragraphs that only contain an image */
	:global(p > img:only-child) {
		display: inline-block;
		max-width: 100%;
		height: auto;
	}

	/* Make the parent <p> act like inline-block so images align in a row */
	:global(p:has(img:only-child)) {
		display: inline-block;
		margin: 0 1rem 1rem 0;
	}

	/* Optional: Remove spacing between inline-blocks */
	:global(p:has(img:only-child)) + p:has(img:only-child) {
		margin-left: 0;
	}
</style>
