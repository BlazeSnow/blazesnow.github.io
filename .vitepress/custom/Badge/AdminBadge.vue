<script setup lang="ts">
withDefaults(
	defineProps<{
		text?: string
	}>(),
	{
		text: '需要管理员权限'
	}
)
</script>

<template>
	<span class="admin-badge" title="操作需要以管理员身份执行">{{ text }}</span>
</template>

<style scoped>
.admin-badge {
	display: inline-flex;
	align-items: center;
	vertical-align: middle;
	margin-left: 8px;
	border: 1px solid #0078d4;
	border-radius: 999px;
	padding: 2px 8px;
	background: color-mix(in srgb, #0078d4 12%, transparent);
	color: #0078d4;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.04em;
	line-height: 1.4;
	opacity: 0.88;
	white-space: nowrap;
}
</style>
