<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    if (typeof window !== 'undefined') {
        import('@webcomponents/webcomponentsjs/webcomponents-bundle.js')
        import('@statuspage/status-widget/dist/index.js')
    }
})
</script>

<template>
    <h2>网站状态</h2>
    <statuspage-widget src="https://blazesnow.statuspage.io" appearance="basic" title="BlazeSnow网站状态">
    </statuspage-widget>
</template>
