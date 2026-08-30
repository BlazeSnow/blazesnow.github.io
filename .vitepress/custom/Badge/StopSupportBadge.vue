<script setup lang="ts">
withDefaults(
	defineProps<{
		text?: string
	}>(),
	{
		text: '本文已停止支持'
	}
)
</script>

<template>
	<a href="/deprecated/" class="stop-support-badge" title="本文的内容已停止支持，点击前往查看停止支持及弃用内容。">{{ text }}</a>
</template>

<style scoped>
.stop-support-badge {
	display: inline-flex;
	align-items: center;
	vertical-align: middle;
	margin-left: 8px;
	border: 1px solid #dc2626;
	border-radius: 999px;
	padding: 2px 8px;
	background: color-mix(in srgb, #dc2626 12%, transparent);
	color: #dc2626 !important;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.04em;
	line-height: 1.4;
	opacity: 0.88;
	white-space: nowrap;
	text-decoration: none;
}
</style>
