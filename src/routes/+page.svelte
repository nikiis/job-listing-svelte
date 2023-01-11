<script lang="ts">
	import Layout from '../components/Layout.svelte';
	import Card from '../components/Card.svelte';
	import FilterBar from '../components/FilterBar.svelte';
	import data from '../data/data.json';
	import type { JobPost } from 'src/interfaces/types';

	let currentFilters: Array<string> = [];
	let filteredData: Array<JobPost> = data;

	const addFilter = (event: CustomEvent<{ filterToAdd: string }>) => {
		const filter = event.detail.filterToAdd;
		if (!currentFilters.includes(filter)) {
			currentFilters.push(filter);

			currentFilters = currentFilters;
			filteredData = filteredData.filter((item) =>
				[...item.languages, ...item.tools, item.role, item.level].includes(filter)
			);

			filteredData = filteredData;
		}
	};

	const removeFilter = (event: CustomEvent<{ filterToRemove: string }>) => {
		const filter = event.detail.filterToRemove;

		if (currentFilters.includes(filter)) {
			currentFilters = currentFilters.filter((item) => item != filter);
			currentFilters = currentFilters;

			filteredData = data.filter((item) => {
				return currentFilters.every((filter) =>
					[...item.languages, ...item.tools, item.role, item.level].includes(filter)
				);
			});
		}
	};

	const clearFilters = () => {
		currentFilters = [];
		currentFilters = currentFilters;

		filteredData = data;
	};
</script>

<Layout>
	<div class="inner">
		<div class="container">
			{#if currentFilters.length > 0}
				<FilterBar {currentFilters} on:filter={removeFilter} on:clearFilters={clearFilters} />
			{/if}

			<div class="cards">
				{#each filteredData as job}
					<Card {job} on:filter={addFilter} />
				{/each}
			</div>

			<div class="footer">
				<p>
					Made in {new Date().getFullYear()} by <a href="https://github.com/nikiis"> Nicole</a>,
					part of a <a href="https://www.frontendmentor.io/home"> Frontend Mentor</a> challenge
				</p>
			</div>
		</div>
	</div>
</Layout>

<style lang="scss">
	@use '../styles/media.scss' as media;
	.inner {
		background-color: var(--colour-light-gray-filter);
		min-height: 100vh;
	}

	.cards {
		padding-top: 80px;
		display: flex;
		flex-direction: column;
		gap: 50px;
		padding-bottom: 100px;

		@include media.minWidth(smallDesktop) {
			gap: 20px;
		}
	}

	.footer {
		display: flex;
		justify-content: center;
		padding: 30px 0;
	}
</style>
