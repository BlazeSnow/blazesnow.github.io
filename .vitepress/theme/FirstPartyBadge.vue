<script setup lang="ts">
withDefaults(
	defineProps<{
		text?: string
	}>(),
	{
		text: '第一方项目'
	}
)
</script>

<template>
	<span class="first-party-badge">{{ text }}</span>
</template>

<style scoped>
.first-party-badge {
	display: inline-flex;
	align-items: center;
	vertical-align: middle;
	margin-left: 8px;
	border: 1px solid var(--vp-c-brand-2);
	border-radius: 999px;
	padding: 2px 8px;
	background: color-mix(in srgb, var(--vp-c-brand-1) 12%, transparent);
	color: var(--vp-c-brand-1);
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.04em;
	line-height: 1.4;
	opacity: 0.88;
	white-space: nowrap;
}
</style>
