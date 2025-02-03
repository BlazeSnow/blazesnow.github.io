<script setup>
import card from "./card.vue"
</script>

<template>
    <card title="Docker系列" link="/DockerSeries/">
        <template #description>
            Docker Compose是容器编排的得力助手，
            用简洁YAML文件管理多容器应用
        </template>
    </card>
    <card title="搭建内网穿透服务" link="/FrpClientAndServer/">
        <template #description>
            使用fatedier/frp在Windows客户端和Ubuntu服务端上搭建frp内网穿透服务
        </template>
    </card>
    <card title="Nginx相关" link="/Nginx/">
        <template #description>
            Nginx是一款HTTP Web服务器
        </template>
    </card>
</template>