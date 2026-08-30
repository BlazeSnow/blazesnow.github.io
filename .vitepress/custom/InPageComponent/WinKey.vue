<script setup lang="ts">
import KeyCap from './KeyCap.vue'
import { resolveIconSrc } from '../icons'
</script>

<template>
	<KeyCap class="win-key" title="Windows徽标键">
		<img :src="resolveIconSrc('windows')" alt="Windows徽标" />
	</KeyCap>
</template>

<style scoped>
.win-key img {
	width: 0.9em;
	height: 0.9em;
}
</style>
