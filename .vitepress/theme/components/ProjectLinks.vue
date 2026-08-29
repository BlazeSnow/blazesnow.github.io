<script setup lang="ts">
import { VPLink } from 'vitepress/theme'
import SiteIcon from '../SiteIcon.vue'

interface ProjectLink {
	/** 链接名称 */
	label: string
	/** 链接地址 */
	href: string
	/** 站点图标库中的图标名（/icon/{icon}.svg） */
	icon?: string
	/** 直接指定图标地址 */
	iconSrc?: string
	/** 链接的补充说明，缺省时展示去掉协议的链接地址 */
	description?: string
}

defineProps<{
	links: ProjectLink[]
}>()

function isExternal(href: string) {
	return /^https?:\/\//i.test(href)
}

function describe(link: ProjectLink) {
	return link.description || link.href.replace(/^https?:\/\//i, '').replace(/\/$/, '')
}
</script>

<template>
	<div class="project-links">
		<VPLink
			v-for="link in links"
			:key="link.href"
			class="project-links__card"
			:href="link.href"
			:target="isExternal(link.href) ? '_blank' : undefined"
			:rel="isExternal(link.href) ? 'noopener noreferrer' : undefined"
			no-icon
		>
			<span class="project-links__icon">
				<SiteIcon v-if="link.icon || link.iconSrc" :icon="link.icon || ''" :src="link.iconSrc || ''" />
				<svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
					<path
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
					/>
				</svg>
			</span>
			<span class="project-links__body">
				<span class="project-links__label">{{ link.label }}</span>
				<span class="project-links__description">{{ describe(link) }}</span>
			</span>
		</VPLink>
	</div>
</template>

<style scoped>
.project-links {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	gap: 12px;
	margin: 16px 0;
}

.project-links__card {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 14px 16px;
	background: var(--vp-custom-block-info-bg);
	border: 1px solid var(--vp-c-divider);
	border-radius: 8px;
	color: var(--vp-c-text-1);
	text-decoration: none;
	transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.project-links__card:hover {
	border-color: var(--vp-c-brand-1);
	background: color-mix(in srgb, var(--vp-c-brand-soft) 45%, var(--vp-custom-block-info-bg) 55%);
}

.project-links__card:focus-visible {
	outline: 2px solid var(--vp-c-brand-1);
	outline-offset: 2px;
}

.project-links__icon {
	flex: 0 0 auto;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 20px;
	height: 20px;
	font-size: 20px;
	color: var(--vp-c-brand-1);
}

.project-links__icon svg {
	flex: 0 0 auto;
	width: 20px;
	height: 20px;
}

.project-links__body {
	display: flex;
	flex-direction: column;
	min-width: 0;
}

.project-links__label {
	font-weight: 600;
	line-height: 1.5;
}

.project-links__description {
	overflow: hidden;
	font-size: 0.85rem;
	color: var(--vp-c-text-2);
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
