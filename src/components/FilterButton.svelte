<div class="filter">
	<slot />
</div>

<style lang="scss">
	.filter {
		background-color: var(--colour-light-gray-background);
		padding: 5px 8px;
		border-radius: 5px;
		color: var(--colour-primary);
		font-weight: 800;
		transition: colour 0.2s ease-in-out, background-color 0.2s ease-in-out;
		max-height: fit-content;
		max-height: 35px;
	}
</style>
