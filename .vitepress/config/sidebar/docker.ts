import type { DefaultTheme } from 'vitepress'

export const docker: DefaultTheme.Sidebar = {
  '/docker/': {
    base: '/docker',
    items: [
      { text: '前言', link: '/' },
      { text: '安装Docker', link: '/install' },
      { text: '安装IO发行版', link: '/installio' },
      { text: '安装CE发行版', link: '/installce' },
      { text: '运行Docker', link: '/systemctl' },
      { text: 'Docker换源', link: '/mirror' },
      { text: '管理镜像', link: '/image' },
      { text: '管理容器', link: '/container' },
      { text: '容器镜像服务', link: '/mirrorservice' },
      { text: '传递镜像', link: '/transfer' },
      { text: 'Compose文件', link: '/compose' },
      { text: '清理缓存', link: '/prune' },
    ]
  }
}
