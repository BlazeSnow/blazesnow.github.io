<script setup>
import card from "./card.vue"
import status from "./status.vue"
</script>

<template>
  <h2>
    特色内容
  </h2>
  <div class="group">
    <card title="PowerPlan" link="/powerplan/" icon-src="/icon/powerplan.ico">
      <template #description>
        本程序针对Windows系统的电源计划，帮助用户快速切换电源计划。
      </template>
    </card>
    <card title="IPAbuyer" link="/ipa/" icon-src="/icon/ipabuyer.ico">
      <template #description>
        刚刚拿到iPhone，受折磨于反复按下锁屏键购入App；还是担心小众优质App被下架？使用IPAbuyer，将App统统收入囊中！
      </template>
    </card>
    <card title="WOWS-IME" link="/wows/" icon-src="/icon/wows-ime.ico">
      <template #description>
        本程序针对游戏《战舰世界》的中文输入法的配置文件，目的为修订配置文件以支持更多的中文输入法。
      </template>
    </card>
    <card title="ComposeBuilder" link="/composebuilder/" icon="docker">
      <template #description>
        ComposeBuilder是一个用于快速生成docker-compose.yml的工具。
      </template>
    </card>
    <card title="ImagePorter" link="/imageporter/" icon="docker">
      <template #description>
        ImagePorter是一个用于同步Docker镜像的Docker镜像。
      </template>
    </card>
    <card title="OneDriveHosts" link="/onedrivehosts/" icon="microsoftonedrive">
      <template #description>
        通过指定OneDrive的网站的hosts，实现在封锁OneDrive的ip地址的区域使用OneDrive。
      </template>
    </card>
  </div>
  <h2>
    Docker系列
  </h2>
  <div class="group">
    <card title="语音服务器 TeamSpeak" link="/dockerseries/teamspeak/" icon="teamspeak">
      <template #description>
        用水晶般透亮明晰的声音与您的队友跨平台交流，体验军用级安全性、无延迟的性能和无与伦比的可靠性和正常运行时间。
      </template>
    </card>
    <card title="版本管理服务器 Gitea" link="/dockerseries/gitea/" icon="gitea">
      <template #description>
        出色的自托管选项，为团队和开发人员带来高效率，同时也简化了从计划到生产的操作。
      </template>
    </card>
    <card title="智能家居中枢 Home Assistant" link="/dockerseries/homeassistant/" icon="homeassistant">
      <template #description>
        把本地控制和隐私放在首位的开源家庭自动化。由世界各地的工匠和DIY爱好者社区提供动力。
      </template>
    </card>
    <card title="家庭域名服务器 AdGuard Home" link="/dockerseries/adguardhome/" icon="adguard">
      <template #description>
        AdGuard Home是一种基于网络的广告和跟踪器拦截解决方案。
      </template>
    </card>
    <card title="我的世界服务器 Minecraft Server" link="/dockerseries/minecraftserver/" icon="minecraft">
      <template #description>
        Minecraft:Java Edition多人游戏服务器。
      </template>
    </card>
    <card title="端口转发服务器 Frp" link="/dockerseries/frps/" icon="wireguard">
      <template #description>
        Frp采用C/S模式，通过访问暴露在服务器上的端口，反向代理到处于内网的服务。
      </template>
    </card>
    <card title="文件列表服务器 OpenList" link="/dockerseries/openlist/" icon="alist">
      <template #description>
        一个支持多种存储的文件列表程序，使用Gin和SolidJS。
      </template>
    </card>
    <card title="音乐服务器 Navidrome" link="/dockerseries/navidrome/" icon-src="/icon/navidrome.svg">
      <template #description>
        Navidrome允许您通过现代Web UI和广泛的第三方兼容移动应用程序从任何地方享受您的音乐收藏。
      </template>
    </card>
    <card title="证书申请器 Certbot" link="/dockerseries/certbot/" icon-src="/icon/certbot.svg">
      <template #description>
        Certbot是一个免费的开源软件工具，可以自动在手动管理的网站上使用Let 's Encrypt证书来启用HTTPS。
      </template>
    </card>
    <card title="容器可视化管理 Portainer" link="/dockerseries/portainer/" icon="portainer">
      <template #description>
        Portainer提供了一个企业级的容器管理平台。
      </template>
    </card>
  </div>
  <h2>
    更多内容
  </h2>
  <div class="group">
    <card title="Windows" link="/windows/" icon="windows">
      <template #description>
        Windows操作系统是微软以图形用户界面为主推出的一系列专有商业软件操作系统。
      </template>
    </card>
    <card title="Ubuntu" link="/ubuntu/" icon="ubuntu">
      <template #description>
        Ubuntu是基于Debian，以桌面应用为主的Linux发行版。
      </template>
    </card>
    <card title="DNS加密" link="/dns/" icon="nextdns">
      <template #description>
        DNS加密可以保护用户的上网隐私，防止DNS查询被窃听、篡改或跟踪。
      </template>
    </card>
  </div>
  <status />
</template>

<style scoped>
.group {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .group {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .group {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
