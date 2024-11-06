<!-- components/AdBanner.vue -->
<template>
    <div ref="adContainer"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const adContainer = ref(null)

onMounted(() => {
    // 创建广告脚本
    const adScript = document.createElement('script')
    adScript.setAttribute('async', '')
    adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8010307323433130"
    adScript.crossOrigin = "anonymous"

    // 创建广告 <ins> 元素
    const adIns = document.createElement('ins')
    adIns.className = 'adsbygoogle'
    adIns.style.display = 'inline-block'
    adIns.style.width = '224px'
    adIns.style.height = '224px'
    adIns.setAttribute('data-ad-client', 'ca-pub-8010307323433130')
    adIns.setAttribute('data-ad-slot', '3760107648')

    // 插入广告到组件中
    adContainer.value.appendChild(adIns)
    adContainer.value.appendChild(adScript)

    // 初始化广告
    adScript.onload = () => {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }
})
</script>