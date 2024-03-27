<script lang="ts">
	import { Combobox, type Selected } from 'bits-ui';
	import { slide } from 'svelte/transition';
	import { Check, Library, ChevronsUpDown } from 'lucide-svelte';

	type Item = { value: string; label: string };

	export let items: Item[];
	export let name: string;
	export let selected: Selected<string>;

	let inputValue = '';
	let touchedInput = false;

	$: filteredItems =
		inputValue && touchedInput
			? items.filter((item: Item) => item.value.includes(inputValue.toLowerCase()))
			: items;
</script>

<Combobox.Root items={filteredItems} bind:selected bind:inputValue bind:touchedInput>
	<div class="relative">
		<Library
			class="pointer-events-none absolute start-3 top-1/2 size-6 -translate-y-1/2 brightness-75"
		/>
		<Combobox.Input
			class=" focus:ring-foreground inline-flex w-[296px] truncate rounded-md border border-neutral-800 bg-transparent px-11 py-4 text-sm transition placeholder:text-white placeholder:brightness-75 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
			placeholder="Search an item"
			aria-label="Search an item"
			required
		/>
		<ChevronsUpDown
			class="pointer-events-none absolute end-3 top-1/2 size-6 -translate-y-1/2 brightness-75"
		/>
	</div>

	<Combobox.Content
		class="max-h-56 w-full overflow-y-scroll rounded-md border border-neutral-800 bg-neutral-900 px-1 py-3"
		transition={slide}
		sideOffset={4}
	>
		{#each filteredItems as item (item.value)}
			<Combobox.Item
				class="flex h-10 w-full select-none items-center rounded-md py-3 pl-5 pr-1.5 text-sm capitalize text-white outline-none brightness-75 transition data-[highlighted]:bg-neutral-800 data-[highlighted]:brightness-100"
				value={item.value}
				label={item.label}
			>
				{item.label}
				<Combobox.ItemIndicator class="ml-auto" asChild={false}>
					<Check class="scale-75" />
				</Combobox.ItemIndicator>
			</Combobox.Item>
		{:else}
			<span class="block px-5 py-2 text-sm text-white brightness-75"> No results found </span>
		{/each}
	</Combobox.Content>
	<Combobox.HiddenInput {name} />
</Combobox.Root>
