<script setup>
import { computed } from 'vue'
import simpleIcons from '@iconify-json/simple-icons/icons.json'

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

const iconData = computed(() => props.icon ? simpleIcons.icons[props.icon] : null)
</script>

<template>
	<span v-if="iconData || src" class="site-icon">
		<svg v-if="iconData" class="site-icon__svg" aria-hidden="true" viewBox="0 0 24 24" v-html="iconData.body"></svg>
		<img v-else class="site-icon__image" :src="src" :alt="alt" :aria-hidden="alt ? null : 'true'">
	</span>
</template>

<style scoped>
.site-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 1em;
	height: 1em;
	color: inherit;
	vertical-align: -0.12em;
}

.site-icon__svg,
.site-icon__image {
	width: 100%;
	height: 100%;
}

.site-icon__image {
	object-fit: contain;
}
</style>
