<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    try {
        window.addAds()
        console.log('AdUnit loaded')
    } catch (e) {
        console.log(e)
    }
})
</script>

<template>
    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-8010307323433130" data-ad-slot="3760107648"
        data-ad-format="auto" data-full-width-responsive="true"></ins>
</template>
