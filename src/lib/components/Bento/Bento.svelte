<script lang="ts">
	//import { m } from '$lib/paraglide/messages';
	//@lucide/svelte Import and Icons
	import { type Icon as IconType } from '@lucide/svelte';

	import TrendingUp from '@lucide/svelte/icons/trending-up';
	import ShoppingCart from '@lucide/svelte/icons/shopping-cart';
	import ClipboardList from '@lucide/svelte/icons/clipboard-list';
	import ChartSpline from '@lucide/svelte/icons/chart-spline';
	import Info from '@lucide/svelte/icons/info';
	import Users from '@lucide/svelte/icons/users';
	import Tag from '@lucide/svelte/icons/tag';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import FileBadge2 from '@lucide/svelte/icons/file-badge-2';
	import File from '@lucide/svelte/icons/file';
	//Images Imports
	import bento from '$lib/assets/images/bento/shop.webp';
	import partner from '$lib/assets/images/bento/partner.webp';
	import projects from '$lib/assets/images/bento/projects.webp';
	import aboutus from '$lib/assets/images/bento/aboutus.webp';
	import sales from '$lib/assets/images/bento/sales.webp';
	import products from '$lib/assets/images/bento/products.webp';
	import flooring from '$lib/assets/images/bento/flooring.webp';
	import third from '$lib/assets/images/hero/third.jpg';
	import blogs from '$lib/assets/images/bento/blogs.jpg';
	import creating from '$lib/assets/images/bento/creating.webp';
	
	import MobileBentoGrid from './MobileBento.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';

	interface GridItem {
		id: string;
		title: string;
		icon: typeof IconType;
		href: string;
		backgroundImage?: string;
		colSpan: `col-span-${1 | 2 | 3 | 4 | 5}`;
		rowSpan: `row-span-${1 | 2 | 3 | 4 | 5}`;
		className?: string;
		backgroundPosition: string;
	}

	let items: GridItem[] = [
		{
			id: '1',
			title: 'Shop',
			icon: ShoppingCart,
			href: 'https://shop.grresin.com/',
			colSpan: 'col-span-1',
			rowSpan: 'row-span-3',
			backgroundImage: `url(${bento})`,
			backgroundPosition: 'center'
		},
		{
			id: '2',
			title: 'Partners',
			icon: Users,
			href: localizeHref('#partner'),
			colSpan: 'col-span-1',
			rowSpan: 'row-span-1',
			backgroundImage: `url(${partner})`,
			backgroundPosition: 'center'
		},
		{
			id: '3',
			title: 'Projects',
			icon: ClipboardList,
			href: localizeHref('/projects'),
			colSpan: 'col-span-1',
			rowSpan: 'row-span-1',
			backgroundImage: `url(${projects})`,
			backgroundPosition: 'center'
		},
		{
			id: '4',
			title: 'AboutUs',
			icon: Info,
			href: localizeHref('/about'),
			colSpan: 'col-span-2',
			rowSpan: 'row-span-1',
			backgroundImage: `url(${aboutus})`,
			backgroundPosition: 'top'
		},
		{
			// This is the modified item 5
			id: '5',
			title: 'Point of Sales', // You might want to adjust this title as it's now one of two.
			icon: ChartSpline,
			href: localizeHref('/sales'),
			colSpan: 'col-span-1', // Changed from 'col-span-2' to 'col-span-1'
			rowSpan: 'row-span-1',
			backgroundImage: `url(${sales})`,
			backgroundPosition: 'center'
		},
		{
			// This is the new item derived from the original item 5
			id: '10', // New unique ID
			title: 'Art Products', // A new title for the second cell, or reuse if appropriate
			icon: TrendingUp, // A different icon might be suitable
			href: localizeHref('#art_products'), // A different href if it leads somewhere else
			colSpan: 'col-span-1',
			rowSpan: 'row-span-1',
			backgroundImage: `url(${third})`, // You might want a different background image
			backgroundPosition: 'center'
		},
		{
			id: '6',
			title: 'Products \n',
			icon: Tag,
			href: localizeHref('#project_products'),
			colSpan: 'col-span-1',
			rowSpan: 'row-span-1',
			backgroundImage: `url(${products})`,
			backgroundPosition: 'center'
		},
		{
			id: '7',
			title: 'Portfolio',
			icon: FileBadge2,
			href: '/Graffite Profile.pdf',
			colSpan: 'col-span-1',
			rowSpan: 'row-span-1',
			backgroundImage: `url(${flooring})`,
			backgroundPosition: 'center'
		},
		{
			id: '8',
			title: 'Blogs',
			icon: BookOpen,
			href: localizeHref('/blog'),
			colSpan: 'col-span-2',
			rowSpan: 'row-span-1',
			backgroundImage: `url(${blogs})`,
			backgroundPosition: 'left bottom'
		},
		{
			id: '9',
			title: 'Make Your Own',
			icon: File,
			href: localizeHref('/order'),
			colSpan: 'col-span-2',
			rowSpan: 'row-span-1',
			backgroundImage: `url(${creating})`,
			backgroundPosition: 'center'
		}
	];
</script>

<div class="hidden h-full w-full items-center justify-center md:flex">
	<div class="grid h-full w-full grid-cols-5 grid-rows-3 gap-4 p-2">
		{#each items as item (item.id)}
			{@const Icon = item.icon}
			{#if item.id === '7'}
				<a
					href={item.href}
					class={` relative ${item.colSpan} ${item.rowSpan} flex flex-col items-center justify-center overflow-hidden rounded-2xl  ${item.className || ''} transition-all duration-300 ease-in hover:z-10 hover:scale-110 `}
					style={item.backgroundImage
						? `background-image: ${item.backgroundImage}; background-size: cover; background-position: ${item.backgroundPosition};`
						: ''}
					download
					data-sveltekit-noscroll
				>
					{#if item.backgroundImage}
						<div class="ahmad absolute inset-0 text-center backdrop-blur-[2px]"></div>
					{/if}
					<div class="relative z-10 flex flex-col items-center justify-center p-4 text-white">
						<Icon class="mb-2 h-8 w-8" />
						<span class="text-[2rem] drop-shadow-2xl">{item.title}</span>
					</div>
				</a>
			{:else}
				<a
					data-sveltekit-noscroll
					href={item.href}
					class={` relative ${item.colSpan} ${item.rowSpan} flex flex-col items-center justify-center overflow-hidden rounded-2xl  ${item.className || ''} transition-all duration-300 ease-in hover:z-10 hover:scale-110 `}
					style={item.backgroundImage
						? `background-image: ${item.backgroundImage}; background-size: cover; background-position: ${item.backgroundPosition};`
						: ''}
				>
					{#if item.backgroundImage}
						<div class="ahmad absolute inset-0 backdrop-blur-[2px]"></div>
					{/if}
					<div class="relative z-10 flex flex-col items-center justify-center p-4 text-white">
						<Icon class="mb-2 h-8 w-8" />
						<span class="text-[2rem] drop-shadow-2xl">{item.title}</span>
					</div>
				</a>
			{/if}
		{/each}
	</div>
</div>
<MobileBentoGrid {items} />

<style>
	.hibo {
		opacity: 0;
		height: 0;
	}
	.ahmad {
		background: radial-gradient(rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
	}
</style>
