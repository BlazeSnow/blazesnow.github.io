<script setup>
import card from "./card.vue"
</script>

<template>
    <card title="原生安卓" link="/Android/">
        <template #description>
            原生安卓是指由谷歌公司开发的、
            未经过手机制造商或移动运营商深度定制的安卓操作系统版本
        </template>
    </card>
    <card title="Nodejs相关" link="/Nodejs/">
        <template #description>
            Node.js®是一个免费、开源、跨平台的JavaScript运行时环境
        </template>
    </card>
    <card title="Docker相关" link="/Docker/">
        <template #description>
            Docker帮助开发人员在任何地方构建、共享、
            运行和验证应用程序
        </template>
    </card>
    <card title="Git相关" link="/git/">
        <template #description>
            Git是一个免费的开源分布式版本控制系统，
            旨在快速高效地处理从小到大的所有项目
        </template>
    </card>
    <card title="CMake相关" link="/CMake/">
        <template #description>
            CMake是构建C++代码的事实上的标准，
            它是管理软件构建过程的强大、全面的解决方案
        </template>
    </card>
    <card title="VitePress建站教程" link="/VitePress/">
        <template #description>
            通过VitePress和GitHub Pages生成静态站点的教程
        </template>
    </card>
    <card title="部署网站至服务器" link="/WebsiteToServer/">
        <template #description>
            将VitePress建成的网站通过GitHub部署到Ubuntu服务器上
        </template>
    </card>
</template>