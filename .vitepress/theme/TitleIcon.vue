<script setup>
import SiteIcon from './SiteIcon.vue'

defineProps({
	icon: {
		type: String,
		required: false,
		default: ''
	},
	src: {
		type: String,
		required: false,
		default: ''
	},
	alt: {
		type: String,
		required: false,
		default: ''
	}
})
</script>

<template>
	<SiteIcon class="title-icon" :icon="icon" :src="src" :alt="alt" />
</template>

<style scoped>
.title-icon {
	display: inline-block;
	width: 1em;
	height: 1em;
	margin-right: 0.35em;
	color: var(--vp-c-brand-1);
	vertical-align: -0.12em;
}
</style>
