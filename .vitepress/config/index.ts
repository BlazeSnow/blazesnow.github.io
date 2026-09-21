import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidebar'
import { themeConfig } from './theme'

export default defineConfig({
  //网页语言
  lang: 'zh-CN',
  //网页标题
  title: 'BlazeSnow帮助网站',
  //网页描述
  description: 'BlazeSnow帮助网站，专注于分享知识。',
  //网页标题
  titleTemplate: ':title | BlazeSnow帮助网站',
  //头文件配置
  head: [
    //网页logo
    ['link',
      { rel: 'icon', href: '/logo.ico' }
    ],
    //代码字体预加载，消除“慢半拍”的字体闪烁
    ['link',
      { rel: 'preload', href: '/fonts/monaspace-neon.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }
    ],
    //谷歌分析
    ['script',
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-JTXXPWS3MD', async: '' }
    ],
    ['script', {},
      `window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-JTXXPWS3MD');`
    ],
  ],
  //网页地图
  sitemap: {
    hostname: 'https://www.blazesnow.com/'
  },
  //markdown配置
  markdown: {
    //显示行号
    lineNumbers: true,
  },
  //主题配置
  themeConfig: {
    ...themeConfig,
    nav,
    sidebar
  }
})
