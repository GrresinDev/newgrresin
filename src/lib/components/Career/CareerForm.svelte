<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import partner from '$lib/assets/images/bento/partner.webp?enhanced';
	import { enhance } from '$app/forms';
	import Label from '$lib/components/ui/label/label.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import LoaderCircle from '@lucide/svelte/icons/loader-circle';
	import { toast } from 'svelte-sonner';
	import { page } from '$app/state';
	import type { PositionModel } from '$lib/components/Career/interface';
	import Button from '$lib/components/ui/button/button.svelte';
	let loading = $state(false);
	let {
		postions,
		value = $bindable(),
		isArabic = $bindable()
	}: { isArabic: boolean; postions: PositionModel[]; value: string } = $props();
	const selectedvalue = $derived(
		value
			? isArabic
				? postions.find((postion) => postion.id === value)?.name_ar
				: postions.find((postion) => postion.id === value)?.name
			: m.only_tired_donkey_rest()
	);
	$effect(() => {
		if (page.form) {
			if (page.form?.success) {
				toast.success(m.ornate_heavy_squirrel_achieve());
			}
		}
	});
</script>

<div class=" container">
	<div class=" flex h-full flex-col gap-8 md:flex-row">
		<div class=" my-8 flex basis-1/2 flex-col">
			<div class="basis-1/4 text-start">
				<h1 class=" text-4xl font-bold tracking-wider whitespace-pre-line text-white md:text-6xl">
					{m.wild_close_angelfish_swim()}
				</h1>
			</div>
			<div class="aspect-square basis-4/5 rounded-full p-8">
				<enhanced:img
					loading="lazy"
					class="h-full w-full rounded-full object-cover"
					src={partner}
					alt="jobs "
				/>
			</div>
		</div>

		<div class="  my-8 basis-1/2 rounded-2xl bg-white">
			<form
				method="POST"
				enctype="multipart/form-data"
				use:enhance={() => {
					loading = true;
					return async ({ update }) => {
						await update({ invalidateAll: false });
						loading = false;
					};
				}}
			>
				<div class="flex w-full flex-col gap-1.5 p-8">
					<Label for="name">
						<h1 class="w-full text-3xl">
							{m.known_zippy_llama_empower()}
							<hr class="h-[2px] w-1/2 bg-blue-500" />
						</h1>
					</Label>
					<Input
						class=" border-t-0 border-r-0 border-b border-l-0 border-gray-500    bg-transparent text-xl  placeholder:text-gray-500 focus:border-gray-500 "
						type="text"
						name="name"
						id="name"
						placeholder={m.vivid_direct_gopher_belong()}
						required
					/>
					<p class="h-1 text-red-500">
						{#if page.form?.validation?.name}
							{m.every_fine_crow_yell()}
						{/if}
					</p>
				</div>
				<div class="flex w-full flex-col gap-1.5 p-8">
					<Label for="email">
						<h1 class="w-full text-3xl">
							{m.great_awful_donkey_endure()}
							<hr class="h-[2px] w-1/2 bg-blue-500" />
						</h1>
					</Label>
					<Input
						class=" border-t-0 border-r-0 border-b border-l-0 border-gray-500    bg-transparent text-xl  placeholder:text-gray-500 focus:border-gray-500 "
						type="email"
						id="email"
						name="email"
						placeholder="example@example.com"
						required
					/>
				</div>
				<div class=" flex w-full flex-col gap-1.5 p-8">
					<Label for="position-select">
						<h1 class="w-full text-3xl">
							{m.proof_key_mongoose_adore()}
							<hr class="h-[2px] w-1/2 bg-blue-500" />
						</h1>
					</Label>
					<Select.Root type="single" name="position" bind:value required>
						<Select.Trigger
							id="position-select"
							class="border-t-0 border-r-0 border-b border-l-0 border-gray-500    bg-transparent text-xl  placeholder:text-gray-500 focus:border-gray-500"
						>
							{selectedvalue}
						</Select.Trigger>
						<Select.Content side="bottom">
							<Select.Group class="bg-white">
								{#each postions as postion (postion.id)}
									<Select.Item
										class="hover:bg-slate-300"
										value={postion.id}
										label={isArabic ? postion.name_ar : postion.name}
									>
										{isArabic ? postion.name_ar : postion.name}</Select.Item
									>
								{/each}
							</Select.Group>
						</Select.Content>
					</Select.Root>
				</div>
				<div class="flex w-full flex-col gap-1.5 p-8">
					<Label for="message">
						<h1 class="w-full text-3xl">
							{m.vexed_antsy_lynx_zap()}
							<hr class="h-[2px] w-1/2 bg-blue-500" />
						</h1>
					</Label>
					<Textarea
						id="message"
						class=" border-t-0 border-r-0 border-b border-l-0 border-gray-500    bg-transparent text-2xl  placeholder:text-gray-500 focus:border-gray-500 "
						name="message"
						placeholder={m.sunny_trick_manatee_urge()}
						required
					/>
				</div>
				<div class="flex w-full flex-col gap-1.5 p-8">
					<Label for="cv">
						<h1 class="w-full text-3xl">
							{m.hour_tidy_worm_transform()}
							<hr class="h-[2px] w-1/2 bg-blue-500" />
						</h1>
					</Label>
					<Input
						class=" border-t-0 border-r-0 border-b border-l-0 border-gray-500    bg-transparent text-xl  placeholder:text-gray-500 focus:border-gray-500 "
						type="file"
						id="cv"
						name="cv"
						accept=".pdf,.doc,.docx"
					/>
				</div>
				<div class="flex w-full flex-col gap-1.5 p-8">
					<Button
						type="submit"
						class="rounded-2xl border border-blue-500 text-3xl hover:bg-blue-500 hover:text-white"
						disabled={loading}
					>
						{#if loading}
							<LoaderCircle class="mr-2 animate-spin" />
						{/if}
						{m.known_jolly_cat_hurl()}</Button
					>
				</div>
			</form>
		</div>
	</div>
</div>
