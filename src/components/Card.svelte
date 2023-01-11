<script lang="ts">
	import type { JobPost } from 'src/interfaces/types';
	import AddFilter from './AddFilter.svelte';
	import { afterUpdate, createEventDispatcher } from 'svelte';

	export let job: JobPost;

	let filterItems = [job.role, job.level, ...job.languages, ...job.tools];

	const dispatch = createEventDispatcher<{ filter: { filterToAdd: string } }>();

	const handleAddFilter = (event: CustomEvent<{ filterToAdd: string }>) => {
		console.log(event.detail.filterToAdd);
		dispatch('filter', {
			filterToAdd: event.detail.filterToAdd
		});
	};

	afterUpdate(() => {
		filterItems = [job.role, job.level, ...job.languages, ...job.tools];
	});
</script>

<div class="card {job.featured ? 'border' : ''}">
	<div class="img">
		<img src={job.logo} alt={job.company} />
	</div>
	<div class="details">
		<div class="top">
			<span>{job.company}</span>
			{#if job.new}
				<div class="tag">new!</div>
			{/if}
			{#if job.featured}
				<div class="tag featured">featured</div>
			{/if}
		</div>
		<div class="middle">
			<h2>{job.position}</h2>
		</div>
		<div class="bottom">
			<p>{job.postedAt}</p>
			<p>{job.contract}</p>
			<p>{job.location}</p>
		</div>
	</div>

	<div class="tags">
		{#each filterItems as filter}
			<AddFilter {filter} on:filter={handleAddFilter} />
		{/each}
	</div>
</div>

<style lang="scss">
	@use '../styles/media.scss' as media;

	.card {
		position: relative;
		border-radius: 6px;
		background-color: var(--colour-white);
		padding: 40px 20px 20px 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		box-shadow: 10px 10px 15px -5px rgba(0, 0, 0, 0.15);

		@include media.minWidth(smallDesktop) {
			flex-direction: row;
			padding: 20px;
		}

		&.border {
			border-left: 5px solid var(--colour-primary);
		}
	}

	.img {
		width: 60px;
		height: 60px;

		@include media.maxWidth(smallDesktop) {
			position: absolute;
			top: -30px;
		}

		@include media.minWidth(smallDesktop) {
			width: 80px;
			height: 80px;
		}
	}

	.details {
		@include media.minWidth(smallDesktop) {
			flex-basis: 40%;
		}
	}

	.top,
	.middle,
	.bottom,
	.tags {
		display: flex;
	}

	.top {
		gap: 10px;
		align-items: center;
		flex-wrap: wrap;

		span {
			font-weight: 800;
			color: var(--colour-primary);
		}

		.tag {
			background-color: var(--colour-primary);
			color: var(--colour-white);
			border-radius: 15px;
			padding: 2px 10px;
			text-transform: uppercase;
			font-weight: 800;

			&.featured {
				background-color: var(--colour-very-dark-gray-cyan);
			}
		}
	}

	.middle {
		margin: 5px 0;
		width: 100%;
		justify-content: space-between;
	}

	.bottom {
		color: var(--colour-dark-gray-cyan);

		p {
			margin-right: 10px;

			& + p {
				padding-left: 12.5px;
				position: relative;

				&:before {
					content: '.';
					line-height: 1;
					position: absolute;
					left: 0;
					top: 1px;
					font-weight: bold;
				}
			}
		}
	}

	.tags {
		gap: 10px;
		flex-wrap: wrap;

		@include media.minWidth(smallDesktop) {
			flex-basis: 50%;
			justify-content: flex-end;
		}
	}
</style>
