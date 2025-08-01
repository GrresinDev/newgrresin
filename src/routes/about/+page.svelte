<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	//lucide Import
	import TestTubeDiagonal from '@lucide/svelte/icons/test-tube-diagonal';
	import ShieldPlus from '@lucide/svelte/icons/shield-plus';
	import Milestone from '@lucide/svelte/icons/milestone';
	import Trophy from '@lucide/svelte/icons/trophy';
	import Rocket from '@lucide/svelte/icons/rocket';
	import Building from '@lucide/svelte/icons/building';
	import Mail from '@lucide/svelte/icons/mail';
	import Factory from '@lucide/svelte/icons/factory';
	import Lock from '@lucide/svelte/icons/lock';
	//End of lucide Import----
	import logo from '$lib/assets/images/Logo.png?enhanced';
	import { locales, localizeHref, getLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';

	import type { PageData } from './$types';
	import { page } from '$app/state';

	import Review from '$lib/components/About/Review.svelte';
	import TimelineCard from '$lib/components/About/TimelineCard.svelte';
	import SeoHeader from '$lib/components/Seo/SeoHeader.svelte';

	let locale = $state(getLocale());
	let isArabic = $derived(locale == 'ar');

	let { data }: { data: PageData } = $props();

	const timelineData = [
		{
			id: 'event1',
			date: '2018',
			title: 'Company Inception in KSA',
			description:
				'ResinTransform established its presence in Saudi Arabia, focusing on specialized resin flooring.',
			Icon: Rocket
		},
		{
			id: 'event2',
			date: '2020',
			title: 'First Major Commercial Project',
			description:
				'Successfully completed a large-scale epoxy flooring project for a prestigious Riyadh business park.',
			Icon: Building
		},
		{
			id: 'event3',
			date: '2022',
			title: 'Expansion to Industrial Sector',
			description:
				'Expanded services to cater to the demanding needs of industrial clients in Dammam and Jubail.',
			Icon: Factory
		},
		{
			id: 'event4',
			date: '2023',
			title: 'Recognition for Quality',
			description:
				'Received industry award for outstanding quality and innovation in resin flooring solutions in the GCC region.',
			Icon: Trophy
		},
		{
			id: 'event5',
			date: 'Ongoing',
			title: 'Commitment to Vision 2030',
			description:
				"Aligning our growth and sustainability practices with Saudi Arabia's Vision 2030.",
			Icon: Milestone
		}
	];
	const timelineData_ar = [
		{
			id: 'event1',
			date: '2018',
			title: 'تأسيس الشركة في المملكة العربية السعودية',
			description:
				'أسست ريزن ترانسفورم (ResinTransform) حضورها في المملكة العربية السعودية، مع التركيز على حلول الأرضيات الراتنجية المتخصصة.',
			Icon: Rocket
		},
		{
			id: 'event2',
			date: '2020',
			title: 'أول مشروع تجاري كبير',
			description: 'أكملت بنجاح مشروع أرضيات إيبوكسي واسع النطاق لمجمع أعمال مرموق في الرياض.',
			Icon: Building
		},
		{
			id: 'event3',
			date: '2022',
			title: 'التوسع في القطاع الصناعي',
			description: 'وسعت خدماتها لتلبية الاحتياجات المتطلبة للعملاء الصناعيين في الدمام والجبيل.',
			Icon: Factory
		},
		{
			id: 'event4',
			date: '2023',
			title: 'تقدير الجودة',
			description:
				'حصلت على جائزة صناعية للجودة المتميزة والابتكار في حلول الأرضيات الراتنجية في منطقة دول مجلس التعاون الخليجي.',
			Icon: Trophy
		},
		{
			id: 'event5',
			date: 'مستمر',
			title: 'الالتزام برؤية 2030',
			description: 'مواءمة نمونا وممارسات الاستدامة لدينا مع رؤية المملكة العربية السعودية 2030.',
			Icon: Milestone
		}
	];
	const workwithusData = [
		{
			header: m.vexed_great_kudu_hike(),
			Icon: Lock,
			body: m.slow_nimble_rabbit_fetch()
		},
		{
			header: m.big_keen_cow_fulfill(),
			Icon: TestTubeDiagonal,
			body: m.good_top_parakeet_flip()
		},
		{
			header: m.solid_sweet_panda_foster(),
			Icon: ShieldPlus,
			body: m.aqua_bright_stork_pray()
		}
	];
</script>

<SeoHeader pageName="about" />
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref('/about', { locale })}>{locale}</a>
	{/each}
</div>
<div id="About Intro" class=" relative z-0 py-16 md:pt-32 md:pb-20">
	<div class="container mx-auto px-4 xl:max-w-6xl">
		<div class="-mx-4 flex flex-row flex-wrap justify-center">
			<!-- content -->
			<div
				class="w-full max-w-full flex-shrink self-center px-4 sm:w-9/12 sm:px-12 lg:w-1/2 lg:px-18"
			>
				<enhanced:img src={logo} class="h-auto w-full max-w-full" alt="creative agency" />
			</div>
			<!-- end content -->

			<!-- text -->
			<div class="w-full max-w-full flex-shrink self-center px-4 md:w-9/12 lg:w-1/2 lg:pr-12">
				<div class="mt-6 text-center lg:mt-0 lg:text-left">
					<div class="mb-12">
						<h1 class="mb-4 text-4xl leading-normal font-bold text-black">
							{m.tense_lost_panther_emerge()} <br />
						</h1>
						<p class="mx-auto pb-2 text-xl leading-relaxed font-light text-gray-500">
							{m.spare_civil_guppy_cheer()}
						</p>
					</div>

					<Button
						href={localizeHref('/careers')}
						class="mx-2 min-w-52 text-lg font-semibold"
						variant="ghost"><Mail class="mr-2 size-4" />{m.even_known_husky_quell()}</Button
					>
					<Button
						href={localizeHref('/#contact')}
						class="bg-primary min-w-52 text-lg  font-semibold text-white hover:text-black"
					>
						<Mail class="mr-2 size-4" />{m.early_clean_cod_devour()}</Button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<Review reviews={data.reviews} bind:isArabic />

<section class="my-8 shadow-md">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
		<div class="mb-8 max-w-screen-md lg:mb-16">
			<h2 class="text-primary mb-4 text-4xl font-extrabold tracking-tight">
				{m.gray_inner_cougar_swim()}
			</h2>
			<p class="text-gray-500 sm:text-xl dark:text-gray-400">
				{m.aloof_moving_jaguar_cheer()}
			</p>
		</div>
		<div class="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
			{#each workwithusData as text}
				{@const Icon = text.Icon}
				<div class="p-8 shadow-2xl">
					<div
						class="dark:bg-primary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-300 lg:h-12 lg:w-12"
					>
						<Icon />
					</div>
					<h3 class="mb-2 text-xl font-bold text-[#a71580]">{text.header}</h3>
					<p class=" text-gray-600">
						{text.body}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="timeline" class="w-full py-16 md:py-24">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<section class="mb-16 w-full rounded-lg py-20 md:mb-24 md:py-32">
			<div class="container mx-auto px-4 text-center sm:px-6 lg:px-8">
				<h1 class="text-primary mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
					{m.raw_mellow_wren_zoom()}
				</h1>
				<p class="text-foreground/80 mx-auto mb-10 max-w-2xl text-lg sm:text-xl">
					{m.day_less_starfish_wish()}
				</p>
			</div>

			<div class="relative">
				{#if isArabic}
					{#each timelineData_ar as event, index (event.id)}
						<TimelineCard {event} isLast={index === timelineData.length - 1} />
					{/each}
				{:else}
					{#each timelineData as event, index (event.id)}
						<TimelineCard {event} isLast={index === timelineData.length - 1} />
					{/each}
				{/if}
			</div>
		</section>
	</div>
</section>
