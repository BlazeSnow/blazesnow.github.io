<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import SiteIcon from '../InPageComponent/SiteIcon.vue'
import FirstPartyBadge from '../Badge/FirstPartyBadge.vue'

const props = withDefaults(
	defineProps<{
		/** 站点图标库中的图标名（/icon/{icon}.svg） */
		icon?: string
		/** 直接指定图标地址 */
		src?: string
		/** 项目名，缺省时读取 frontmatter 的 title */
		title?: string
		/** 项目一句话描述，缺省时读取 frontmatter 的 description */
		description?: string
		/** 是否展示第一方项目徽章 */
		badge?: boolean
	}>(),
	{
		icon: '',
		src: '',
		title: '',
		description: '',
		badge: true
	}
)

const { frontmatter } = useData()

const resolvedTitle = computed(() => props.title || frontmatter.value.title || '')
const resolvedDescription = computed(() => props.description || frontmatter.value.description || '')
</script>

<template>
	<header class="project-hero">
		<span v-if="icon || src" class="project-hero__icon">
			<SiteIcon :icon="icon" :src="src" :alt="resolvedTitle" />
		</span>
		<div class="project-hero__body">
			<h1 class="project-hero__title">
				<span class="project-hero__title-text">{{ resolvedTitle }}</span>
				<FirstPartyBadge v-if="badge" />
			</h1>
			<p v-if="resolvedDescription" class="project-hero__description">{{ resolvedDescription }}</p>
		</div>
	</header>
</template>

<style scoped>
.project-hero {
	display: flex;
	align-items: center;
	gap: 20px;
	margin-bottom: 8px;
}

.project-hero__icon {
	flex: 0 0 auto;
	font-size: 64px;
}

.project-hero__body {
	min-width: 0;
}

.project-hero__title {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 12px;
	margin: 0;
	font-size: clamp(1.75rem, 4vw, 2.25rem);
	font-weight: 700;
	line-height: 1.2;
	color: var(--vp-c-text-1);
}

.project-hero__description {
	margin: 8px 0 0;
	font-size: 1.05rem;
	line-height: 1.7;
	color: var(--vp-c-text-2);
}

@media (max-width: 767px) {
	.project-hero {
		gap: 14px;
	}

	.project-hero__icon {
		font-size: 48px;
	}
}
</style>
