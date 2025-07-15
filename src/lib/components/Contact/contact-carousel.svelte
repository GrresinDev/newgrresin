<script lang="ts">
	import contact from '$lib/assets/images/contact/contact.webp?enhanced';
	import second from '$lib/assets/images/contact/contact_second.webp?enhanced';
	let currentIndex = $state(0);

	const images = [contact, second];

	let interval: number | undefined = $state<number>();

	$effect(() => {
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % images.length;
		}, 3000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="relative h-full w-full">
	{#each images as image, index (image)}
		<enhanced:img
			src={image}
			alt="Carousel"
			class="carousel-item h-full w-full object-cover transition-opacity ltr:rounded-l-2xl rtl:rounded-r-2xl"
			class:active={index === currentIndex}
		/>
	{/each}
</div>

<style>
	.carousel-item {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		z-index: -10;
		transition: opacity 0.5s ease-in-out;
	}

	.carousel-item.active {
		opacity: 1;
		z-index: 1;
	}
</style>
