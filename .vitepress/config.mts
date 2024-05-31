import {defineConfigWithTheme} from 'vitepress'
import type {ThemeConfig} from '.vitepress/theme/index.js'

export default defineConfigWithTheme<ThemeConfig>({
    lang: 'zh',//网页语言
    title: 'BlazeSnow帮助网站',//网页标题
    description: 'BlazeSnow帮助网站',//网页描述
    head: [['link', {rel: 'icon', href: 'public/logo.ico'}]],//网页logo
    metaChunk: true,//用JavaScript块加载界面，减少带宽
    appearance: true,//默认主题将由用户的首选配色方案决定
    themeConfig: {
        logo: 'public/logo.ico',
        aside: false,//将此值设置为left将在页面左侧渲染
        darkModeSwitchLabel: "切换深色或浅色模式",
        lightModeSwitchTitle: "切换至浅色模式",
        darkModeSwitchTitle: "切换至深色模式",
        sidebarMenuLabel: "目录",
        returnToTopLabel: "回到顶部",
        externalLinkIcon: true,
        docFooter: {
            prev: '上一篇', next: '下一篇'
        },
        socialLinks: [{icon: 'github', link: 'https://github.com/blazesnow'},],
        search: {
            provider: 'local'
        },
        nav: [{text: '主页', link: '/'},],
        sidebar: [{text: '开始', link: '/README'}, {text: '更新日志', link: '/CHANGELOG'}, {
            text: 'Windows相关', collapsed: true, items: [{text: '系统修复', link: '/Windows相关/系统修复'}, {
                text: '系统重新安装', link: '/Windows相关/系统重新安装'
            }, {text: '安装C++运行库', link: '/Windows相关/安装C++运行库'}, {
                text: '安装.NET', link: '/Windows相关/安装.NET'
            }, {text: '磁盘清理', link: '/Windows相关/磁盘清理'}, {
                text: '系统配置', link: '/Windows相关/系统配置'
            }, {text: '清理软件卸载残留', link: '/Windows相关/清理软件卸载残留'}, {
                text: '查看蓝屏文件', link: '/Windows相关/查看蓝屏文件'
            },]
        }, {
            text: 'DNS加密', collapsed: true, items: [{text: 'Windows设备：DOH', link: '/DNS加密/Windows设备：DOH'}, {
                text: 'Android设备：DOT', link: '/DNS加密/Android设备：DOT'
            }, {text: 'Apple设备：DOT', link: '/DNS加密/Apple设备：DOT'}, {text: 'DNS大全', link: '/DNS加密/DNS大全'},]
        }, {
            text: 'Nodejs相关', collapsed: true, items: [{text: '安装Nodejs', link: '/Nodejs相关/安装Nodejs'}, {
                text: 'NCU', link: '/Nodejs相关/NCU'
            }, {text: '安装和卸载包', link: '/Nodejs相关/安装和卸载包'},]
        }, {
            text: 'Docsify建站教程',
            collapsed: true,
            items: [{text: '安装Nodejs', link: '/Docsify建站教程/安装Nodejs'}, {
                text: '安装Docsify', link: '/Docsify建站教程/安装Docsify'
            }, {text: '开始建网站', link: '/Docsify建站教程/开始建网站'}, {
                text: '填充index', link: '/Docsify建站教程/填充index'
            }, {text: '本地化css和js', link: '/Docsify建站教程/本地化css和js'}, {
                text: '运行网站', link: '/Docsify建站教程/运行网站'
            }, {text: '发布网站', link: '/Docsify建站教程/发布网站'}, {
                text: '进阶操作', link: '/Docsify建站教程/进阶操作'
            },]
        }, {
            text: 'Ubuntu相关', collapsed: true, items: [{text: '安装Ubuntu', link: '/Ubuntu相关/安装Ubuntu'}, {
                text: 'apt', link: '/Ubuntu相关/apt'
            }, {text: 'dpkg', link: '/Ubuntu相关/dpkg'}, {
                text: '双系统的时间差8小时', link: '/Ubuntu相关/双系统的时间差8小时'
            }, {text: 'Server安装桌面', link: '/Ubuntu相关/Server安装桌面'},]
        }, {
            text: '原生安卓',
            collapsed: true,
            items: [{text: 'WiFi感叹号', link: '/原生安卓/WiFi感叹号'}, {text: '时间同步', link: '/原生安卓/时间同步'},]
        },],
    }
})
