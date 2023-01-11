<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import FilterButton from './FilterButton.svelte';
	import closeicon from '../assets/images/icon-remove.svg';

	export let filter: string;

	const dispatch = createEventDispatcher<{ filter: { filterToRemove: string } }>();

	const removeFilter = () => {
		dispatch('filter', {
			filterToRemove: filter
		});
	};
</script>

<FilterButton>
	<span>{filter}</span>

	<button on:click={removeFilter} aria-label="remove filter">
		<img role="presentation" src={closeicon} alt="" />
	</button>
</FilterButton>

<style lang="scss">
	:global(.filter) {
		height: 100%;
		width: fit-content;
		position: relative;

		span {
			margin-right: 30px;
		}
	}
	button {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		padding: 0 8px;
		background-color: var(--colour-primary);
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		transition: background-color 0.2s ease-in-out;

		&:hover {
			cursor: pointer;
			background-color: var(--colour-very-dark-gray-cyan);
		}
	}
</style>
