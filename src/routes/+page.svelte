<script lang="ts">
	import { Sparkles } from 'lucide-svelte';
</script>

<main class="flex h-full flex-col items-center justify-center gap-4">
	<div>
		<h1 class="text-3xl font-semibold">Learn faster than ever.</h1>
		<h3 class="text-center text-lg brightness-75">Tailormade courses for you.</h3>
	</div>
	<a
		href="/auth/register"
		class="flex items-center gap-1 rounded-md bg-neutral-800 px-3 py-2 hover:brightness-110"
		>Get started
		<Sparkles class="scale-[80%]" />
	</a>
</main>
