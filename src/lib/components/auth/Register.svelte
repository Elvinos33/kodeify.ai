<script lang="ts">
	import { Github, Gitlab } from 'lucide-svelte';
	import { enhance } from '$app/forms';

	export let error: string | undefined;
</script>

<form method="POST" use:enhance class="flex w-96 flex-col gap-3 rounded-md p-5">
	{#if error}
		<p class="text-center text-sm text-red-500">{error}</p>
	{/if}
	<h2 class="mb-2 text-center text-xl font-bold brightness-90">Create an Account</h2>

	<div class="flex h-14 w-full gap-2">
		<button
			type="button"
			class="flex-1 rounded-md border border-neutral-800 bg-neutral-900 transition hover:brightness-110"
		>
			<Github class="w-full text-center" strokeWidth={1} />
		</button>
		<button
			type="button"
			class="flex-1 rounded-md border border-neutral-800 bg-neutral-900 transition hover:brightness-110"
		>
			<Gitlab class="w-full text-center" strokeWidth={1} />
		</button>
	</div>
	<div class="flex flex-col space-y-1 border-t border-t-neutral-800 pt-2">
		<label for="email" class="text-sm text-white brightness-75">Email</label>
		<input
			required
			autocomplete="email"
			type="email"
			id="email"
			name="email"
			placeholder="Email..."
			class="rounded-md border border-neutral-800 bg-transparent p-2 text-sm placeholder:text-white placeholder:brightness-75 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
		/>
	</div>
	<div class="flex flex-col space-y-1">
		<label for="password" class="text-sm text-white brightness-75">Password</label>
		<input
			required
			autocomplete="new-password"
			type="password"
			id="password"
			name="password"
			placeholder="Password..."
			class="rounded-md border border-neutral-800 bg-transparent p-2 text-sm placeholder:text-white placeholder:brightness-75 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
		/>
	</div>
	<div class="flex flex-col space-y-1">
		<label for="confirmPassword" class="text-sm text-white brightness-75">Confirm Password</label>
		<input
			required
			autocomplete="new-password"
			type="password"
			id="confirmPassword"
			name="confirmPassword"
			placeholder="Confirm Password..."
			class="rounded-md border border-neutral-800 bg-transparent p-2 text-sm placeholder:text-white placeholder:brightness-75 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
		/>
	</div>

	<button type="submit" class="rounded-md bg-neutral-800 px-3 py-2 hover:brightness-110"
		>Create Account</button
	>

	<p class="text-center brightness-90">
		Already have an account? {' '}
		<a href="/auth/login" class="font-bold hover:underline">Log in</a>
	</p>
</form>
