<script setup>
import card from "./card.vue"
import status from "./status.vue"
</script>

<template>
  <h2>
    特色内容
  </h2>
  <div class="group">
    <card title="Docker系列" link="/DockerSeries/">
      <template #description>
        Docker Compose是容器编排的得力助手，用简洁YAML文件管理多容器应用。
      </template>
    </card>
  </div>
  <h2>
    更多内容
  </h2>
  <div class="group">
    <card title="IPAbuyer" link="/ipa/">
      <template #description>
        刚刚拿到iPhone，受折磨于反复按下锁屏键购入App；还是担心小众优质App被下架？使用IPAbuyer，将App统统收入囊中！
      </template>
    </card>
    <card title="OneDriveHosts" link="/OneDriveHosts/">
      <template #description>
        通过指定OneDrive的网站的hosts，实现在封锁OneDrive的ip地址的区域使用OneDrive。
      </template>
    </card>
    <card title="Windows" link="/Windows/">
      <template #description>
        Windows操作系统是微软以图形用户界面为主推出的一系列专有商业软件操作系统。
      </template>
    </card>
    <card title="Ubuntu" link="/Ubuntu/">
      <template #description>
        Ubuntu是基于Debian，以桌面应用为主的Linux发行版。
      </template>
    </card>
    <card title="DNS加密" link="/DNSEncryption/">
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
