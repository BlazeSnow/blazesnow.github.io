<script setup>
import card from "./card.vue"
</script>

<template>
    <card title="Docker系列" link="/DockerSeries/">
        <template #description>
            简洁管理多容器应用的教程，助你高效编排
        </template>
    </card>
    <card title="搭建内网穿透服务" link="/FrpClientAndServer/">
        <template #description>
            使用FRP在Windows客户端和Ubuntu服务端上搭建内网穿透服务
        </template>
    </card>
    <card title="Nginx相关" link="/Nginx/">
        <template #description>
            Nginx是一款HTTP Web服务器、反向代理和内容缓存工具
        </template>
    </card>
</template>