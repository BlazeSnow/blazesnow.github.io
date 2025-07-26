<script setup>
import card from "./card.vue"
import status from "./status.vue"
</script>

<template>
  <h2>
    系统：解决操作系统问题
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
  <card title="OneDriveHosts" link="/OneDriveHosts/">
    <template #description>
      通过指定OneDrive的网站的hosts，实现在封锁OneDrive的ip地址的区域使用OneDrive
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
      在Windows客户端和Ubuntu服务端上搭建内网穿透服务
    </template>
  </card>
  <card title="VitePress建站教程" link="/VitePress/">
    <template #description>
      通过VitePress和GitHub Pages生成静态站点
    </template>
  </card>
  <card title="部署网站至服务器" link="/WebsiteToServer/">
    <template #description>
      将VitePress建成的网站通过GitHub部署到Ubuntu服务器上
    </template>
  </card>
  <h2>
    更多内容
  </h2>
  <p>
    更多内容详见网页顶栏
  </p>
  <status></status>
</template>