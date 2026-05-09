<script setup lang="ts">
withDefaults(
	defineProps<{
		text?: string
	}>(),
	{
		text: '由 BlazeSnow 提供支持'
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
	line-height: 1.4;
	white-space: nowrap;
}
</style>
