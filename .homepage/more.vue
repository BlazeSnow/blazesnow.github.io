<script setup>
import card from "./card.vue"
</script>

<template>
    <card title="原生安卓" link="/Android/">
        <template #description>
            由谷歌开发的、未经过深度定制的安卓版本
        </template>
    </card>
    <card title="Nodejs相关" link="/Nodejs/">
        <template #description>
            Node.js是一个开源的JavaScript运行时环境
        </template>
    </card>
    <card title="Docker相关" link="/Docker/">
        <template #description>
            帮助开发人员在任何地方构建、共享和运行应用程序
        </template>
    </card>
    <card title="Git相关" link="/git/">
        <template #description>
            一个快速高效的开源版本控制系统
        </template>
    </card>
    <card title="CMake相关" link="/CMake/">
        <template #description>
            构建C++代码的事实上的标准工具
        </template>
    </card>
    <card title="VitePress建站教程" link="/VitePress/">
        <template #description>
            通过VitePress快速生成静态站点的教程
        </template>
    </card>
    <card title="部署网站至服务器" link="/WebsiteToServer/">
        <template #description>
            将VitePress网站部署到Ubuntu服务器的教程
        </template>
    </card>
</template>