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
		<Label for="email">{m.ideal_mushy_bee_slide()}</Label>
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
