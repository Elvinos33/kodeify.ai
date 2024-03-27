<script lang="ts">
	import { enhance } from '$app/forms';
	import Combobox from '$lib/components/general/Combobox.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let selectedTech = { value: '', label: '' };
	let loading = false;

	const tech = [
		{ value: 'vue', label: 'Vue' },
		{ value: 'angular', label: 'Angular' },
		{ value: 'flutter', label: 'Flutter' },
		{ value: 'ruby', label: 'Ruby' },
		{ value: 'rails', label: 'Rails' },
		{ value: 'nodejs', label: 'Node.js' },
		{ value: 'express', label: 'Express' },
		{ value: 'go', label: 'Go' },
		{ value: 'swift', label: 'Swift' },
		{ value: 'kotlin', label: 'Kotlin' }
	];
</script>

<main class="flex h-full flex-col items-center justify-center">
	{#if loading}
		<p>Loading...</p>
	{:else if form?.success}
		<p>Success</p>
		<p>{form?.data}</p>
	{:else}
		<form
			method="POST"
			class="flex flex-col items-center gap-4"
			use:enhance={() => {
				loading = true;
				return ({ result, update }) => {
					if (result.type === 'success') {
						console.log('yay');
					} else if (result.type === 'failure') {
						console.log('nay');
					}
					update().finally(async () => {
						loading = false;
					});
				};
			}}
		>
			<h1 class="text-2xl font-semibold">What do you want to learn?</h1>
			<Combobox name="selectedTech" items={tech} bind:selected={selectedTech} />
			<button class="rounded-md bg-neutral-800 px-3 py-2 hover:brightness-110">
				Create Course
			</button>
		</form>
	{/if}
</main>
