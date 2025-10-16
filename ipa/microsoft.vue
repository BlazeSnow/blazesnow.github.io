<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    if (typeof window !== 'undefined') {
        const script = document.createElement('script')
        script.type = 'module'
        script.src = 'https://get.microsoft.com/badge/ms-store-badge.bundled.js'
        document.head.appendChild(script)
    }
})
</script>

<template>
    <ms-store-badge productid="9msxmxd5520x" window-mode="full" theme="auto" size="large" language="zh-cn"
        animation="on">
    </ms-store-badge>
</template>