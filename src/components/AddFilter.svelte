<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import FilterButton from './FilterButton.svelte';
	export let filter: string;

	const dispatch = createEventDispatcher<{ filter: { filterToAdd: string } }>();

	const addFilter = () => {
		dispatch('filter', {
			filterToAdd: filter
		});
	};
</script>

<button on:click={addFilter}>
	<FilterButton>
		{filter}
	</FilterButton>
</button>

<style lang="scss">
	button {
		&:hover {
			cursor: pointer;

			:global(.filter) {
				background-color: var(--colour-primary);
				color: var(--colour-white);
			}
		}
	}
</style>
