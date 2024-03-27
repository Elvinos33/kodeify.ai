<script>
	import '../app.pcss';
	import Header from '$lib/components/nav/Header.svelte';
</script>

<div class=" flex h-screen flex-col bg-neutral-900 text-white">
	<Header />
	<slot />
</div>
