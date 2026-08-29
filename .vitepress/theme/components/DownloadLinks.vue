<script setup lang="ts">
import { VPLink } from 'vitepress/theme'

interface DownloadLink {
	/** 按钮或徽章的文字说明 */
	label: string
	/** 下载地址 */
	href: string
	/** 徽章图片地址（如 Microsoft Store 徽章），设置后不再渲染文字按钮 */
	image?: string
	/** 徽章图片的 alt 文本 */
	alt?: string
	/** 下载地址的补充说明 */
	description?: string
}

defineProps<{
	links: DownloadLink[]
}>()
</script>

<template>
	<div class="download-links">
		<VPLink
			v-for="link in links"
			:key="link.href"
			class="download-links__item"
			:href="link.href"
			target="_blank"
			rel="noopener noreferrer"
			no-icon
		>
			<img
				v-if="link.image"
				class="download-links__badge"
				:src="link.image"
				:alt="link.alt || link.label"
				loading="lazy"
			/>
			<span v-else class="download-links__button">
				<span class="download-links__button-label">{{ link.label }}</span>
				<svg class="download-links__button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
					<path
						fill="currentColor"
						d="M12 3a1 1 0 0 1 1 1v9.17l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V4a1 1 0 0 1 1-1Zm-7 15a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
					/>
				</svg>
			</span>
			<span v-if="link.description" class="download-links__description">{{ link.description }}</span>
		</VPLink>
	</div>
</template>

<style scoped>
.download-links {
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: 16px;
	margin: 16px 0;
}

.download-links__item {
	display: inline-flex;
	flex-direction: column;
	gap: 6px;
	color: var(--vp-c-text-1);
	text-decoration: none;
}

.download-links__badge {
	height: 56px;
	width: auto;
	border-radius: 8px;
	transition: opacity 0.25s;
}

.download-links__item:hover .download-links__badge {
	opacity: 0.85;
}

.download-links__button {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	height: 40px;
	padding: 0 20px;
	border: 1px solid var(--vp-button-brand-border);
	border-radius: 20px;
	background: var(--vp-button-brand-bg);
	color: var(--vp-button-brand-text);
	font-size: 14px;
	font-weight: 600;
	transition: background-color 0.25s, color 0.25s, border-color 0.25s;
}

.download-links__item:hover .download-links__button {
	background: var(--vp-button-brand-hover-bg);
	color: var(--vp-button-brand-hover-text);
	border-color: var(--vp-button-brand-hover-border);
}

.download-links__button-icon {
	width: 16px;
	height: 16px;
}

.download-links__description {
	font-size: 0.85rem;
	color: var(--vp-c-text-2);
}
</style>
