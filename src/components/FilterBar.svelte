<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import RemoveFilter from './RemoveFilter.svelte';
	export let currentFilters: Array<string>;

	const dispatch = createEventDispatcher();
	const removeDispatch = createEventDispatcher<{ filter: { filterToRemove: string } }>();

	const removeFilter = (filter: string) => {
		removeDispatch('filter', {
			filterToRemove: filter
		});
	};

	const clearFilters = () => {
		dispatch('clearFilters');
	};
</script>

<div class="filterBar">
	<div class="filters">
		{#each currentFilters as filter}
			<RemoveFilter {filter} on:filter={() => removeFilter(filter)} />
		{/each}
	</div>

	<button on:click={clearFilters}>Clear</button>
</div>

<style lang="scss">
	.filterBar,
	.filters {
		display: flex;
	}

	.filterBar {
		background-color: var(--colour-white);
		border-radius: 6px;
		padding: 20px;
		box-shadow: 10px 10px 15px -5px rgba(0, 0, 0, 0.15);
		transform: translateY(-50%);
		justify-content: space-between;
		gap: 20px;
		margin-bottom: -73px;
	}

	.filters {
		gap: 20px;
		flex-basis: 90%;
		flex-wrap: wrap;
	}

	button {
		flex-basis: 10%;
		color: var(--colour-primary);
		font-weight: 800;
		height: fit-content;
		margin-top: 5px;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
