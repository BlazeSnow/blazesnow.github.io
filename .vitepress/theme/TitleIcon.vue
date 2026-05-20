<script setup>
defineProps({
	src: {
		type: String,
		required: true
	},
	alt: {
		type: String,
		required: false,
		default: ''
	}
})
</script>

<template>
	<img class="title-icon" :src="src" :alt="alt" :aria-hidden="alt ? null : 'true'">
</template>

<style scoped>
.title-icon {
	display: inline-block;
	width: 1em;
	height: 1em;
	margin-right: 0.35em;
	vertical-align: -0.12em;
}
</style>
