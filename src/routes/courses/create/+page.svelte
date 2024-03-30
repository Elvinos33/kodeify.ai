<script lang="ts">
	import { enhance } from '$app/forms';
	import Combobox from '$lib/components/general/Combobox.svelte';
	import type { ActionData } from './$types';
	import { CircleDashed, CircleCheck, CircleX } from 'lucide-svelte';
	import { fade } from 'svelte/transition';
	import { marked } from 'marked';

	export let form: ActionData;

	let selectedTech = { value: '', label: '' };
	let mkdown = ``;

	$: if (form?.message) mkdown = form.message;

	let loading = false;
	let success = false;
	let fail = false;

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
		<div in:fade class="flex flex-col items-center gap-4">
			<CircleDashed size={48} strokeWidth={1} class="animate-spin" />
			<h1 class="text-center text-xl font-semibold">Creating a course just for you.</h1>
		</div>
	{:else if success && form?.message}
		<div in:fade class="flex flex-col items-center gap-4">
			<CircleCheck size={48} strokeWidth={1} />
			<h1 class="text-center text-xl font-semibold">Hooray! Your new course has been created!</h1>
			<div>{@html marked(form?.message)}</div>
		</div>
	{:else if fail}
		<div in:fade class="flex flex-col items-center gap-4">
			<CircleX size={48} strokeWidth={1} />
			<h1 class="text-center text-xl font-semibold">Oh no! An error occured, please try again.</h1>
		</div>
	{:else}
		<form
			method="POST"
			class="flex flex-col items-center gap-4"
			use:enhance={() => {
				loading = true;
				return ({ result, update }) => {
					if (result.type === 'success') {
						success = true;
					} else if (result.type === 'failure') {
						fail = true;
					}
					update().finally(() => (loading = false));
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
