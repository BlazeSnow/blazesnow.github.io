<script setup>
import { computed } from 'vue'
import { isMonoIcon, resolveIconSrc } from './icons'

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
	},
	// 强制按彩色图标处理，跳过深色模式反色
	color: {
		type: Boolean,
		required: false,
		default: false
	}
})

const resolvedSrc = computed(() => {
	if (props.src) return props.src
	if (props.icon) return resolveIconSrc(props.icon)
	return null
})

const mono = computed(() => isMonoIcon({ icon: props.icon, src: props.src, color: props.color }))
</script>

<template>
	<span v-if="resolvedSrc || icon" class="site-icon" :class="{ 'site-icon--mono': mono }">
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

<style>
/* 单色图标经 <img> 加载时恒为黑色，深色模式下反色；彩色图标（见 icons.ts 清单）不反色 */
html.dark .site-icon--mono img {
	filter: invert(1);
}
</style>
