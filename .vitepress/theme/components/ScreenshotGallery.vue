<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const viewer = ref<{ src: string; alt: string } | null>(null)

function onClick(event: MouseEvent) {
	const target = event.target as HTMLElement
	if (target.tagName !== 'IMG') return
	const img = target as HTMLImageElement
	const src = img.currentSrc || img.src
	if (!src) return
	event.preventDefault()
	viewer.value = { src, alt: img.alt || '' }
}

function close() {
	viewer.value = null
}

function onKeydown(event: KeyboardEvent) {
	if (event.key === 'Escape') close()
}

watch(viewer, (value) => {
	document.body.style.overflow = value ? 'hidden' : ''
})

onMounted(() => {
	window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
	window.removeEventListener('keydown', onKeydown)
	document.body.style.overflow = ''
})
</script>

<template>
	<div class="screenshot-gallery" @click="onClick">
		<slot />
	</div>

	<Teleport to="body">
		<div v-if="viewer" class="screenshot-viewer" role="dialog" aria-modal="true" :aria-label="viewer.alt || '截图预览'"
			@click="close">
			<button class="screenshot-viewer__close" type="button" aria-label="关闭预览" @click.stop="close">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
					<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
						d="m6 6 12 12M18 6 6 18" />
				</svg>
			</button>
			<figure class="screenshot-viewer__figure" @click.stop>
				<img :src="viewer.src" :alt="viewer.alt" />
				<figcaption v-if="viewer.alt">{{ viewer.alt }}</figcaption>
			</figure>
		</div>
	</Teleport>
</template>

<style scoped>
.screenshot-gallery {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 16px;
	margin: 16px 0;
}

.screenshot-gallery :deep(p) {
	display: contents;
}

.screenshot-gallery :deep(img) {
	width: 100%;
	height: auto;
	border: 1px solid var(--vp-c-divider);
	border-radius: 6px;
	background: var(--vp-c-bg);
	cursor: zoom-in;
	transition: border-color 0.25s, box-shadow 0.25s;
}

.screenshot-gallery :deep(img:hover) {
	border-color: var(--vp-c-brand-1);
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.screenshot-viewer {
	position: fixed;
	inset: 0;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 32px;
	background: rgba(0, 0, 0, 0.75);
	animation: screenshot-viewer-fade 0.2s ease;
}

.screenshot-viewer__close {
	position: absolute;
	top: 16px;
	right: 16px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border: none;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.12);
	color: #fff;
	cursor: pointer;
	transition: background-color 0.25s;
}

.screenshot-viewer__close:hover {
	background: rgba(255, 255, 255, 0.25);
}

.screenshot-viewer__close svg {
	width: 20px;
	height: 20px;
}

.screenshot-viewer__figure {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	margin: 0;
	max-width: 100%;
}

.screenshot-viewer__figure img {
	max-width: min(1400px, 92vw);
	max-height: 82vh;
	object-fit: contain;
	border-radius: 8px;
}

.screenshot-viewer__figure figcaption {
	color: rgba(255, 255, 255, 0.85);
	font-size: 0.9rem;
	text-align: center;
}

@keyframes screenshot-viewer-fade {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}
</style>
