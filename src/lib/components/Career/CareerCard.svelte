<script>
	let { children, body } = $props();
</script>

<div class=" bg-primary my-4 max-w-md rounded-3xl p-8 text-start md:my-2 lg:p-8">
	{@render children()}

	<p
		class=" mt-8 text-xl font-medium tracking-tight text-white hover:line-clamp-none focus:line-clamp-none"
	>
		{body}
	</p>
</div>
