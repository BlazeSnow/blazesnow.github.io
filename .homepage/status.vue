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
    <p>
        查看本网站的运行状态及可用域名：
        <a href="https://blazesnow.statuspage.io/" target="_blank">
            https://blazesnow.statuspage.io/
        </a>
    </p>
</template>
