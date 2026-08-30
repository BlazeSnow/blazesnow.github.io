<script setup lang="ts">
withDefaults(
	defineProps<{
		char?: string
	}>(),
	{
		char: ''
	}
)
</script>

<template>
	<kbd class="key-cap">
		<slot>{{ char }}</slot>
	</kbd>
</template>

<style scoped>
.key-cap {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	vertical-align: middle;
	margin: 0 1px;
	min-width: 1.75em;
	height: 1.75em;
	padding: 0 0.35em;
	border: 1px solid var(--vp-c-border);
	border-bottom-width: 3px;
	border-radius: 0.375em;
	background: var(--vp-c-bg-soft);
	color: var(--vp-c-text-1);
	font-family: var(--vp-font-family-mono);
	font-size: 0.8em;
	font-weight: 600;
	line-height: 1;
	white-space: nowrap;
	user-select: none;
}
</style>
