<script setup>
import card from "./card.vue"
</script>

<template>
    <card title="Windows相关" link="/Windows/">
        <template #description>
            Windows是Microsoft开发和销售的专有图形操作系统，
            适用于消费者、企业、工作站、服务器和嵌入式系统
        </template>
    </card>
    <card title="Ubuntu相关" link="/Ubuntu/">
        <template #description>
            最新版本的Ubuntu桌面版为开发人员、
            创作者、游戏玩家和系统管理员提供了新工具和增强功能
        </template>
    </card>
    <card title="DNS加密" link="/DNSEncryption/">
        <template #description>
            加密DNS通过对查询和响应进行加密，确保数据在传输过程中不被窃听或篡改
        </template>
    </card>
</template>