<script setup lang="ts">
withDefaults(
	defineProps<{
		/** 版权说明 */
		copyright?: string
		/** 许可证名称 */
		license?: string
		/** 许可证链接 */
		licenseUrl?: string
		/** 更新日志链接 */
		changelog?: string
		/** 更新日志链接文字 */
		changelogLabel?: string
	}>(),
	{
		copyright: '',
		license: '',
		licenseUrl: '',
		changelog: '',
		changelogLabel: '查看更新日志'
	}
)
</script>

<template>
	<div class="project-footer">
		<p v-if="copyright || license" class="project-footer__line">
			<span v-if="copyright">{{ copyright }}</span>
			<span v-if="license">
				以
				<a v-if="licenseUrl" :href="licenseUrl" target="_blank" rel="noopener noreferrer">{{ license }}</a>
				<template v-else>{{ license }}</template>
				的条款发布。
			</span>
		</p>
		<p v-if="changelog" class="project-footer__line">
			更新日志：<a :href="changelog" target="_blank" rel="noopener noreferrer">{{ changelogLabel }}</a>
		</p>
		<div class="project-footer__extra">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.project-footer {
	margin: 8px 0 0;
	font-size: 0.9rem;
	line-height: 1.8;
	color: var(--vp-c-text-2);
}

.project-footer__line {
	margin: 0;
}

.project-footer__line + .project-footer__line {
	margin-top: 2px;
}

.project-footer__line > span + span::before {
	content: '·';
	margin: 0 6px;
	color: var(--vp-c-text-3);
}

.project-footer__line a {
	color: var(--vp-c-brand-1);
	text-decoration: none;
}

.project-footer__line a:hover {
	color: var(--vp-c-brand-2);
	text-decoration: underline;
}

.project-footer__extra :deep(p) {
	margin: 4px 0 0;
}
</style>
