import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '项目',
    items: [
      {
        text: 'IPAbuyer',
        link: 'https://ipa.blazesnow.com/',
        target: '_blank'
      },
      {
        text: 'PowerPlan',
        link: 'https://powerplan.blazesnow.com/',
        target: '_blank'
      },
      {
        text: 'Git Repo Sync',
        link: 'https://gitreposync.blazesnow.com/',
        target: '_blank'
      },
      {
        text: 'Todo4Agent',
        link: 'https://todo4agent.blazesnow.com/',
        target: '_blank'
      },
      {
        text: 'MessagesEncrypter',
        link: '/messages/',
        activeMatch: '/messages/'
      },
      {
        text: 'WOWS-IME',
        link: '/wows/',
        activeMatch: '/wows/'
      },
      {
        text: 'ComposeBuilder',
        link: '/composebuilder/',
        activeMatch: '/composebuilder/'
      },
      {
        text: 'ImagePorter',
        link: '/imageporter/',
        activeMatch: '/imageporter/'
      },
      {
        text: 'OneDriveHosts',
        link: '/onedrivehosts/',
        activeMatch: '/onedrivehosts/'
      },
    ]
  },
  {
    text: '内容',
    activeMatch: '/windows/',
    items: [
      {
        text: 'Docker系列',
        link: '/dockerseries/',
        activeMatch: '/dockerseries/'
      },
      {
        text: '我的世界服务器',
        link: '/mc/',
        activeMatch: '/mc/'
      },
      {
        text: 'Windows',
        link: '/windows/',
        activeMatch: '/windows/'
      },
      {
        text: 'Ubuntu',
        link: '/ubuntu/',
        activeMatch: '/ubuntu/'
      },
      {
        text: 'DNS加密',
        link: '/dns/',
        activeMatch: '/dns/'
      },
      {
        text: '远程链路',
        link: '/remote/',
        activeMatch: '/remote/'
      },
      {
        text: 'Nodejs',
        link: '/nodejs/',
        activeMatch: '/nodejs/'
      },
      {
        text: 'Docker',
        link: '/docker/',
        activeMatch: '/docker/'
      }
    ]
  },
  {
    text: '关于',
    activeMatch: '/changelog/',
    items: [
      {
        text: '更新日志',
        link: '/changelog/',
        activeMatch: '/changelog/'
      },
      {
        text: '关于本站',
        link: '/about'
      },
      {
        text: '停止支持及弃用',
        link: '/deprecated/'
      },
      {
        text: '网站状态',
        link: 'https://status.blazesnow.com/',
        target: '_blank',
      },
    ]
  },
]
