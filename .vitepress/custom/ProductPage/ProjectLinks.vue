<script setup lang="ts">
import { computed } from 'vue'
import { VPLink } from 'vitepress/theme'
import SiteIcon from '../InPageComponent/SiteIcon.vue'

interface ProjectLink {
	/** 卡片名称 */
	label: string
	/** 链接地址，缺省时渲染为不可点击的静态卡片 */
	href?: string
	/** 站点图标库中的图标名（/icon/{icon}.svg） */
	icon?: string
	/** 直接指定图标地址 */
	iconSrc?: string
	/** 补充说明，缺省时展示去掉协议的链接地址 */
	description?: string
}

const props = defineProps<{
	/** 自定义卡片，追加在预填卡片之后 */
	links?: ProjectLink[]
	/** 每行固定卡片数，缺省时按卡片最小宽度自适应；窄屏下自动降为单列 */
	columns?: number
	/** 项目仓库地址，预填「项目仓库」卡片 */
	repo?: string
	/** 许可证名称，如 GNU AGPL v3.0，预填「许可证」卡片的说明 */
	licenseName?: string
	/** 许可证链接，与 licenseName 至少提供其一才会生成「许可证」卡片 */
	licenseUrl?: string
	/** 更新日志链接，预填「更新日志」卡片 */
	changelog?: string
	/** 版权说明，预填「版权」静态卡片 */
	copyright?: string
}>()

const presetLinks = computed<ProjectLink[]>(() => {
	const items: ProjectLink[] = []
	if (props.repo) {
		items.push({ label: '项目仓库', href: props.repo, icon: 'github' })
	}
	if (props.licenseName || props.licenseUrl) {
		items.push({ label: '许可证', href: props.licenseUrl, icon: 'licence', description: props.licenseName })
	}
	if (props.changelog) {
		items.push({
			label: '更新日志',
			href: props.changelog,
			icon: 'changelog',
			description: props.changelog.includes('CHANGELOG') ? 'CHANGELOG.md' : undefined
		})
	}
	if (props.copyright) {
		items.push({ label: '版权', icon: 'copyright', description: props.copyright })
	}
	return items
})

const allLinks = computed(() => [...presetLinks.value, ...(props.links ?? [])])

function isExternal(href: string) {
	return /^https?:\/\//i.test(href)
}

function describe(link: ProjectLink) {
	return link.description || (link.href ? link.href.replace(/^https?:\/\//i, '').replace(/\/$/, '') : '')
}

function cardAttrs(link: ProjectLink) {
	if (!link.href) return {}
	return {
		href: link.href,
		target: isExternal(link.href) ? '_blank' : undefined,
		rel: isExternal(link.href) ? 'noopener noreferrer' : undefined,
		noIcon: true
	}
}
</script>

<template>
	<div
		class="project-links"
		:class="{ 'project-links--fixed-cols': columns && columns > 0 }"
		:style="columns && columns > 0 ? { '--project-links-cols': String(columns) } : undefined"
	>
		<component
			:is="link.href ? VPLink : 'div'"
			v-for="link in allLinks"
			:key="link.href || link.label"
			class="project-links__card"
			v-bind="cardAttrs(link)"
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
				<span v-if="describe(link)" class="project-links__description">{{ describe(link) }}</span>
			</span>
		</component>
	</div>
</template>

<style scoped>
.project-links {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	gap: 12px;
	margin: 16px 0;
}

.project-links--fixed-cols {
	grid-template-columns: repeat(var(--project-links-cols, 2), minmax(0, 1fr));
}

@media (max-width: 767px) {
	.project-links--fixed-cols {
		grid-template-columns: 1fr;
	}
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
	transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

a.project-links__card:hover {
	border-color: var(--vp-c-brand-1);
	background: color-mix(in srgb, var(--vp-c-brand-soft) 45%, var(--vp-custom-block-info-bg) 55%);
}

a.project-links__card:focus-visible {
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

/* 静态卡片的说明允许换行，避免长文本被截断 */
div.project-links__card .project-links__description {
	white-space: normal;
}
</style>
