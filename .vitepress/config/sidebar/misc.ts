import type { DefaultTheme } from 'vitepress'

//较短的独立分区：更新日志、DNS加密、远程链路、Nodejs、我的世界服务器
export const changelog: DefaultTheme.Sidebar = {
  '/changelog/': {
    base: '/changelog',
    items: [
      { text: '更新日志', link: '/' },
      { text: '2026年', link: '/2026' },
      { text: '2025年', link: '/2025' },
      { text: '2024年', link: '/2024' },
    ]
  }
}

export const dns: DefaultTheme.Sidebar = {
  '/dns/': {
    base: '/dns',
    items: [
      { text: '前言', link: '/' },
      { text: 'Windows设备', link: '/windows' },
      { text: 'Android设备', link: '/android' },
      { text: 'Apple设备', link: '/apple' },
      { text: 'DNS大全', link: '/collection' }
    ]
  }
}

export const remote: DefaultTheme.Sidebar = {
  '/remote/': {
    base: '/remote',
    items: [
      { text: '前言', link: '/' },
      { text: 'frp', link: '/frp' },
      { text: 'Caddy', link: '/caddy' },
      { text: 'Certbot', link: '/certbot' }
    ]
  }
}

export const nodejs: DefaultTheme.Sidebar = {
  '/nodejs/': {
    base: '/nodejs',
    items: [
      { text: '前言', link: '/' },
      { text: '安装Nodejs', link: '/install' },
      { text: '引入npm', link: '/init' },
      { text: 'npm管理包', link: '/manage' },
      { text: 'npm后缀', link: '/parameter' },
      { text: 'npm配置文件', link: '/npmrc' },
      { text: 'npm换源', link: '/mirror' },
      { text: 'npm代理', link: '/proxy' },
      { text: 'npm缓存', link: '/cache' },
    ]
  }
}

export const mc: DefaultTheme.Sidebar = {
  '/mc/': {
    base: '/mc',
    items: [
      { text: '部署指南', link: '/' },
      { text: '备份指南', link: '/backup' }
    ]
  }
}
