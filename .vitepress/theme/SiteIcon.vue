<script setup>
import { computed } from 'vue'

const props = defineProps({
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

const resolvedSrc = computed(() => {
	if (props.src) return props.src
	if (props.icon) return `/icon/${props.icon}.svg`
	return null
})
</script>

<template>
	<span v-if="resolvedSrc || icon" class="site-icon">
		<img v-if="resolvedSrc" class="site-icon__image" :src="resolvedSrc" :alt="alt" :aria-hidden="alt ? null : 'true'">
	</span>
</template>

<style scoped>
.site-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 1em;
	height: 1em;
	color: var(--vp-c-brand-1);
	vertical-align: -0.12em;
}

.site-icon__image {
	width: 100%;
	height: 100%;
	object-fit: contain;
}
</style>
