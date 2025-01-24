<script setup>
import card from "./card.vue"
</script>

<template>
    <card title="原生安卓" link="/Android/" description="由谷歌开发的、未经过深度定制的安卓版本" />

    <card title="Nodejs相关" link="/Nodejs/" description="Node.js 是一个开源的JavaScript运行时环境" />

    <card title="Docker相关" link="/Docker/" description="帮助开发人员在任何地方构建、共享和运行应用程序" />

    <card title="Git相关" link="/git/" description="一个快速高效的开源版本控制系统" />

    <card title="CMake相关" link="/CMake/" description="构建C++代码的事实上的标准工具" />

    <card title="VitePress建站教程" link="/VitePress/" description="通过VitePress快速生成静态站点的教程" />

    <card title="部署网站至服务器" link="/WebsiteToServer/" description="将VitePress网站部署到Ubuntu服务器的教程" />
</template>