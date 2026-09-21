import type { DefaultTheme } from 'vitepress'

//主题配置中除导航栏和侧边栏外的部分
export const themeConfig: DefaultTheme.Config = {
  //左上角logo
  logo: '/logo.ico',
  //右边的小目录
  aside: true,
  //右边的小目录
  outline: [2, 4],
  outlineTitle: '本篇目录',
  //切换深色或浅色模式提示
  darkModeSwitchLabel: '切换深色或浅色模式',
  //切换至浅色模式提示
  lightModeSwitchTitle: '切换至浅色模式',
  //切换至深色模式提示
  darkModeSwitchTitle: '切换至深色模式',
  //目录按钮文字
  sidebarMenuLabel: '目录',
  //回到顶部文字
  returnToTopLabel: '回到顶部',
  //是否在markdown中的外部链接旁显示外部链接图标
  externalLinkIcon: false,
  //上一篇下一篇
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
  },
  //搜索内容显示本地化
  search: {
    //用自带的搜索功能
    provider: 'local',
    //其他选项
    options: {
      locales: {
        root: {
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              displayDetails: '显示文章的详细内容',
              resetButtonTitle: '清除内容',
              backButtonTitle: '返回',
              noResultsText: '没有找到',
              footer: {
                selectText: '选择',
                selectKeyAriaLabel: '选择',
                navigateText: '切换',
                navigateUpKeyAriaLabel: '向上',
                navigateDownKeyAriaLabel: '向下',
                closeText: '关闭',
                closeKeyAriaLabel: '关闭',
              }
            }
          }
        }
      }
    }
  },
  notFound: {
    title: '页面未找到',
    quote: '抱歉，没有找到您需要的页面',
    linkLabel: '回到首页',
    linkText: '回到首页',
    code: '404',
  },
  //页脚编辑页面
  editLink: {
    text: "在 GitHub 上查看此页",
    pattern: 'https://github.com/BlazeSnow/blazesnow.github.io/blob/main/:path'
  },
  //最近更新时间
  lastUpdated: {
    text: '最近更新时间',
    formatOptions: {
      localeMatcher: undefined,
      weekday: undefined,
      era: undefined,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: undefined,
      hour12: false,
      timeZoneName: "shortOffset",
      formatMatcher: undefined,
      timeZone: "Asia/Chongqing",
      forceLocale: undefined,
    }
  },
  //主页页脚
  footer: {
    message: '网站内容采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC BY-SA 4.0</a> 协议。'
      + '<br>' + '网站源代码采用 <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">GNU AGPL v3.0</a> 协议。',
    copyright: 'Copyright © 2024-2026 <a href="https://github.com/BlazeSnow" target="_blank">BlazeSnow</a>.'
  }
}
