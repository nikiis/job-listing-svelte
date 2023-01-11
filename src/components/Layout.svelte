<script>
	import '../styles/style.scss';
</script>

<div class="headerImage" />
<main>
	<slot />
</main>

<style lang="scss">
	@use '../styles/media.scss' as media;

	.headerImage {
		width: 100%;
		height: 156px;
		background-color: var(--colour-primary);
		background-image: url(../assets/images/bg-header-mobile.svg);
		background-position: top 0;
		background-repeat: no-repeat;
		background-size: cover;

		@include media.minWidth(mobile) {
			background-image: url(../assets/images/bg-header-desktop.svg);
		}
	}
</style>
