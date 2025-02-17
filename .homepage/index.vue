<script setup>
import card from "./card.vue"
</script>

<template>
  <h2>
    系统：操作系统相关
  </h2>
  <card title="Windows" link="/Windows/">
    <template #description>
      Windows操作系统是微软以图形用户界面为主推出的一系列专有商业软件操作系统
    </template>
  </card>
  <card title="Ubuntu" link="/Ubuntu/">
    <template #description>
      Ubuntu是基于Debian，以桌面应用为主的Linux发行版
    </template>
  </card>
  <card title="DNS加密" link="/DNSEncryption/">
    <template #description>
      加密DNS通过对查询和响应进行加密，确保数据在传输过程中不被窃听或篡改
    </template>
  </card>
  <h2>
    服务器：使用服务器完成操作
  </h2>
  <card title="Docker系列" link="/DockerSeries/">
    <template #description>
      Docker Compose是容器编排的得力助手，用简洁YAML文件管理多容器应用
    </template>
  </card>
  <card title="搭建内网穿透服务" link="/FrpClientAndServer/">
    <template #description>
      使用fatedier/frp在Windows客户端和Ubuntu服务端上搭建frp内网穿透服务
    </template>
  </card>
  <card title="Nginx" link="/Nginx/">
    <template #description>
      Nginx是一款HTTP Web服务器
    </template>
  </card>
  <h2>
    更多内容
  </h2>
  <card title="原生安卓" link="/Android/">
    <template #description>
      Android是一个基于Linux核心与其他开源软件的开放源代码的移动操作系统
    </template>
  </card>
  <card title="Nodejs" link="/Nodejs/">
    <template #description>
      Node.js是跨平台、开源的JavaScript运行环境
    </template>
  </card>
  <card title="Docker" link="/Docker/">
    <template #description>
      Docker是一个开放源代码的开放平台软件，用于开发、交付和运行应用
    </template>
  </card>
  <card title="Git" link="/Git/">
    <template #description>
      Git是一个分布式版本控制软件
    </template>
  </card>
  <card title="Clang" link="/Clang/">
    <template #description>
      Clang是一个C、C++、Objective-C和Objective-C++编程语言的编译器前端
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
  <h2>
    关于
  </h2>
  <card title="更新日志" link="/CHANGELOG/">
    <template #description>
      本网站的更新日志
    </template>
  </card>
  <card title="关于本站" link="/about">
    <template #description>
      本网站的更多信息
    </template>
  </card>
  <card title="网站状态" link="https://blazesnow.statuspage.io/" target="_blank">
    <template #description>
      查看本网站的运行状态及可用域名
    </template>
  </card>
</template>