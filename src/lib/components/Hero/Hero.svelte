<script lang="ts">
	import logo from '$lib/assets/images/Logo.png?enhanced';
	import HeroCarousel from '$lib/components/Hero/hero-carousel.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<section id="Hero" class="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-8" dir="ltr">
	<div class="container mx-auto">
		<div class="flex flex-col-reverse items-center gap-10 md:grid md:grid-cols-2 md:gap-16">
			<!-- Logo + Text -->
			<div class="w-full text-start md:order-1">
				<div class="flex w-full justify-center md:justify-start">
					<enhanced:img
						class="mb-0 max-h-[300px] w-auto object-contain"
						src={logo}
						alt="Graffiti Resin Logo"
					/>
				</div>
				<div class="mt-4 p-2 text-start md:text-start">
					<h1
						class="myshadow mb-4 py-4 text-3xl font-bold tracking-wide sm:text-4xl lg:text-6xl rtl:text-right"
					>
						{m.maroon_zany_hound_evoke()}<br />
						{m.plane_fancy_tortoise_zap()}
						{m.clear_clean_crocodile_trim()}.
						<hr class="bg-primary mt-4 h-2 w-[100%] rtl:mt-4" />
					</h1>
				</div>
			</div>

			<!-- Carousel -->
			<div class="flex w-full justify-center md:order-2">
				<div class="relative z-10 w-full max-w-[400px]">
					<HeroCarousel />
				</div>
			</div>
		</div>

		<!-- Description Paragraph -->
		<p
			class="mx-auto px-2 text-justify text-xl text-wrap hyphens-auto whitespace-pre-line md:text-2xl ltr:ml-0 ltr:text-left rtl:mr-0 rtl:text-right"
		>
			{m.funny_livid_gecko_enjoy()}
		</p>
	</div>
</section>
