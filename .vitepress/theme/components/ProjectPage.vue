<template>
	<main class="project-page">
		<div class="project-page__container vp-doc">
			<slot />
		</div>
	</main>
</template>

<style scoped>
.project-page {
	width: 100%;
	padding: 48px 24px 96px;
}

.project-page__container {
	margin: 0 auto;
	max-width: 960px;
}

@media (max-width: 767px) {
	.project-page {
		padding: 32px 16px 64px;
	}
}
</style>
