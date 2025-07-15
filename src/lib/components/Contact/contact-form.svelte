<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import LoaderCircle from '@lucide/svelte/icons/loader-circle';
	import { toast } from 'svelte-sonner';
	let loading = $state(false);

	$effect(() => {
		if (page.form?.success) {
			toast.success(m.ornate_heavy_squirrel_achieve());
		}
	});
</script>

<!--
<form
	method="POST"
	class="space-y-5"
	use:enhance={() => {
		loading = true;
		return ({ update }) => {
			update({ invalidateAll: false }).finally(async () => {
				loading = false;
			});
		};
	}}
>
	<div class="relative">
		<label for="email" class="sr-only">Your Email</label>
		<input
			type="email"
			id="email"
			name="email"
			placeholder={m.ideal_mushy_bee_slide()}
			class="w-full rounded-md border border-gray-200 py-3 pr-12 pl-4 text-start text-black placeholder-gray-500 hover:bg-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>
	</div>
	<p class="h-1 text-red-500">
		{#if page.form?.validation?.email}
			{m.large_kind_coyote_lend()}
		{/if}
	</p>
	<div class="relative">
		<label for="subject" class="sr-only">{m.day_lost_turtle_imagine()}</label>
		<input
			type="text"
			id="subject"
			name="subject"
			placeholder={m.day_lost_turtle_imagine()}
			class="w-full rounded-md border border-gray-200 py-3 pr-12 pl-4 text-start text-black placeholder-gray-500 hover:bg-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>
	</div>
	<p class="h-1 text-red-500">
		{#if page.form?.validation?.subject}
			{m.stale_mushy_crossbill_kiss()}
		{/if}
	</p>
	<div class="relative">
		<label for="message" class="sr-only">{m.slow_sad_cockroach_quiz()}</label>
		<input
			type="text"
			id="message"
			name="message"
			placeholder={m.slow_sad_cockroach_quiz()}
			class="w-full rounded-md border border-gray-200 py-3 pr-12 pl-4 text-start text-black placeholder-gray-500 hover:bg-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>
	</div>
	<p class="h-1 text-red-500">
		{#if page.form?.validation?.message}
			{m.fancy_topical_halibut_succeed()}
		{/if}
	</p>

	<div>
		<Button
			id="contact"
			disabled={loading}
			type="submit"
			class="w-full rounded-md bg-blue-400 px-4 py-3 font-bold text-white transition duration-150 ease-in-out hover:bg-[#a71580] focus:ring-2 focus:ring-[#a71580] focus:ring-offset-2 focus:outline-none"
		>
			{#if loading}
				<LoaderCircle class="animate-spin" />
			{/if}
			{m.early_clean_cod_devour()}
		</Button>
	</div>
</form>
-->
<form
	method="POST"
	class="space-y-5"
	use:enhance={() => {
		loading = true;
		return ({ update }) => {
			update({ invalidateAll: false }).finally(async () => {
				loading = false;
			});
		};
	}}
>
	<div class="grid w-full items-center gap-1.5">
		<Label for="email">Your Email</Label>
		<Input
			type="email"
			id="email"
			name="email"
			placeholder={m.ideal_mushy_bee_slide()}
			class="text-neutral-900"
		/>
	</div>
	<p class="h-1 text-sm font-medium text-red-500">
		{#if page.form?.validation?.email}
			{m.large_kind_coyote_lend()}
		{/if}
	</p>

	<div class="grid w-full items-center gap-1.5">
		<Label for="subject">{m.day_lost_turtle_imagine()}</Label>
		<Input
			type="text"
			id="subject"
			name="subject"
			placeholder={m.day_lost_turtle_imagine()}
			class="text-neutral-900"
		/>
	</div>
	<p class="h-1 text-sm font-medium text-red-500">
		{#if page.form?.validation?.subject}
			{m.stale_mushy_crossbill_kiss()}
		{/if}
	</p>

	<div class="grid w-full items-center gap-1.5">
		<Label for="message">{m.slow_sad_cockroach_quiz()}</Label>
		<Input
			type="text"
			id="message"
			name="message"
			placeholder={m.slow_sad_cockroach_quiz()}
			class="text-neutral-900"
		/>
	</div>
	<p class="h-1 text-sm font-medium text-red-500">
		{#if page.form?.validation?.message}
			{m.fancy_topical_halibut_succeed()}
		{/if}
	</p>

	<div>
		<Button id="contact" disabled={loading} type="submit" class="w-full">
			{#if loading}
				<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
			{/if}
			{m.early_clean_cod_devour()}
		</Button>
	</div>
</form>
