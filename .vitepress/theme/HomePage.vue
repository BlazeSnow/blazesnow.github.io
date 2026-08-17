<script setup>
import HomeCard from "./HomeCard.vue"
</script>

<template>
  <h2>
    特色内容
  </h2>
  <div class="group">
    <HomeCard title="PowerPlan" link="/powerplan/" icon-src="/icon/powerplan.ico">
      <template #description>
        本程序针对 Windows 系统的电源计划，帮助用户快速切换电源计划。
      </template>
    </HomeCard>
    <HomeCard title="MessagesEncrypter" link="/messages/" icon-src="/icon/messagesencrypter.ico">
      <template #description>
        MessagesEncrypter 是一款面向 Windows 桌面端的本地公钥消息加密工具，用于在聊天、邮件或其他不可信渠道中传递敏感文本。
      </template>
    </HomeCard>
    <HomeCard title="IPAbuyer" link="/ipa/" icon-src="/icon/ipabuyer.ico">
      <template #description>
        刚刚拿到 iPhone，受折磨于反复按下锁屏键购入 App；还是担心小众优质 App 被下架？使用 IPAbuyer，将 App 统统收入囊中！
      </template>
    </HomeCard>
    <HomeCard title="WOWS-IME" link="/wows/" icon-src="/icon/wows-ime.ico">
      <template #description>
        本程序针对游戏《战舰世界》的中文输入法的配置文件，目的为修订配置文件以支持更多的中文输入法。
      </template>
    </HomeCard>
    <HomeCard title="ComposeBuilder" link="/composebuilder/" icon="docker">
      <template #description>
        ComposeBuilder 是一个用于快速生成 docker-compose.yml 的工具。
      </template>
    </HomeCard>
    <HomeCard title="ImagePorter" link="/imageporter/" icon="docker">
      <template #description>
        ImagePorter 是一个用于同步 Docker 镜像的 Docker 镜像。
      </template>
    </HomeCard>
    <HomeCard title="OneDriveHosts" link="/onedrivehosts/" icon="microsoftonedrive">
      <template #description>
        通过指定 OneDrive 的网站的 hosts，实现在封锁 OneDrive 的 ip 地址的区域使用 OneDrive。
      </template>
    </HomeCard>
    <HomeCard title="我的世界服务器部署指南" link="/mc/" icon-src="/icon/minecraft.ico">
      <template #description>
        使用 systemd 托管 Minecraft:Java Edition 多人游戏服务器。
      </template>
    </HomeCard>
  </div>
  <h2>
    Docker 系列
  </h2>
  <div class="group">
    <HomeCard title="语音服务器 TeamSpeak" link="/dockerseries/teamspeak/" icon="teamspeak">
      <template #description>
        用水晶般透亮明晰的声音与您的队友跨平台交流，体验军用级安全性、无延迟的性能和无与伦比的可靠性和正常运行时间。
      </template>
    </HomeCard>
    <HomeCard title="版本管理服务器 Gitea" link="/dockerseries/gitea/" icon="gitea">
      <template #description>
        出色的自托管选项，为团队和开发人员带来高效率，同时也简化了从计划到生产的操作。
      </template>
    </HomeCard>
    <HomeCard title="智能家居中枢 Home Assistant" link="/dockerseries/homeassistant/" icon="homeassistant">
      <template #description>
        把本地控制和隐私放在首位的开源家庭自动化。由世界各地的工匠和 DIY 爱好者社区提供动力。
      </template>
    </HomeCard>
    <HomeCard title="家庭域名服务器 AdGuard Home" link="/dockerseries/adguardhome/" icon="adguard">
      <template #description>
        AdGuard Home 是一种基于网络的广告和跟踪器拦截解决方案。
      </template>
    </HomeCard>
    <HomeCard title="端口转发服务器 Frp" link="/dockerseries/frps/" icon-src="/icon/frp.svg">
      <template #description>
        Frp 采用 C/S 模式，通过访问暴露在服务器上的端口，反向代理到处于内网的服务。
      </template>
    </HomeCard>
    <HomeCard title="文件列表服务器 OpenList" link="/dockerseries/openlist/" icon-src="/icon/openlist.svg">
      <template #description>
        一个支持多种存储的文件列表程序，使用 Gin 和 SolidJS。
      </template>
    </HomeCard>
    <HomeCard title="音乐服务器 Navidrome" link="/dockerseries/navidrome/" icon-src="/icon/navidrome.svg">
      <template #description>
        Navidrome 允许您通过现代 Web UI 和广泛的第三方兼容移动应用程序从任何地方享受您的音乐收藏。
      </template>
    </HomeCard>
    <HomeCard title="证书申请器 Certbot" link="/dockerseries/certbot/" icon="letsencrypt">
      <template #description>
        Certbot 是一个免费的开源软件工具，可以自动在手动管理的网站上使用 Let's Encrypt 证书来启用 HTTPS。
      </template>
    </HomeCard>
    <HomeCard title="容器可视化管理 Portainer" link="/dockerseries/portainer/" icon="portainer">
      <template #description>
        Portainer 提供了一个企业级的容器管理平台。
      </template>
    </HomeCard>
  </div>
  <h2>
    更多内容
  </h2>
  <div class="group">
    <HomeCard title="Windows" link="/windows/" icon="windows">
      <template #description>
        Windows 操作系统是微软以图形用户界面为主推出的一系列专有商业软件操作系统。
      </template>
    </HomeCard>
    <HomeCard title="Ubuntu" link="/ubuntu/" icon="ubuntu">
      <template #description>
        Ubuntu 是基于 Debian，以桌面应用为主的 Linux 发行版。
      </template>
    </HomeCard>
    <HomeCard title="DNS 加密" link="/dns/" icon-src="/icon/dns.svg">
      <template #description>
        DNS 加密可以保护用户的上网隐私，防止 DNS 查询被窃听、篡改或跟踪。
      </template>
    </HomeCard>
  </div>
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
