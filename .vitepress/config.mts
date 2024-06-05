import { defineConfigWithTheme } from 'vitepress'
import { ThemeConfig } from 'theme/index.ts'

export default defineConfigWithTheme<ThemeConfig>({
    //网页语言
    lang: 'zh-CN',
    //网页标题
    title: 'BlazeSnow帮助网站',
    //网页描述
    description: 'BlazeSnow帮助网站',
    //网页logo
    head: [['link', { rel: 'icon', href: '/logo.ico' }]],
    //用JavaScript块加载界面，减少带宽
    metaChunk: true,
    //MPA模式默认提供零JavaScript支持
    mpa: false,
    //默认主题将由用户的首选配色方案决定
    appearance: true,
    //markdown配置
    markdown: {
        //显示行号
        lineNumbers: true,
        //块状提示
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息'
        }
    },
    //主题配置
    themeConfig: {
        //左上角logo
        logo: '/logo.ico',
        //关闭右边的小目录留空
        aside: false,
        //关闭右边的小目录
        outline: false,
        //切换深色或浅色模式提示
        darkModeSwitchLabel: "切换深色或浅色模式",
        //切换至浅色模式提示
        lightModeSwitchTitle: "切换至浅色模式",
        //切换至深色模式提示
        darkModeSwitchTitle: "切换至深色模式",
        //目录按钮文字
        sidebarMenuLabel: "目录",
        //回到顶部文字
        returnToTopLabel: "回到顶部",
        //是否在markdown中的外部链接旁显示外部链接图标
        externalLinkIcon: true,
        //上一篇下一篇
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        //右上角GitHub图标
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/blazesnow'
            },
        ],
        //搜索内容显示本地化
        search: {
            //用自带的搜索功能
            provider: 'local',
            //其他选项
            options: {
                locales: {
                    root: {
                        translations: {
                            placeholder: '搜索文档',
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档',
                            },
                            modal: {
                                searchBox: {
                                    resetButtonTitle: '清除查询条件',
                                    resetButtonAriaLabel: '清除查询条件',
                                    cancelButtonText: '取消',
                                    cancelButtonAriaLabel: '取消'
                                },
                                startScreen: {
                                    recentSearchesTitle: '搜索历史',
                                    noRecentSearchesText: '没有搜索历史',
                                    saveRecentSearchButtonTitle: '保存至搜索历史',
                                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                                    favoriteSearchesTitle: '收藏',
                                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                                },
                                errorScreen: {
                                    titleText: '无法获取结果',
                                    helpText: '你可能需要检查你的网络连接'
                                },
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭',
                                    searchByText: '搜索提供者'
                                },
                                noResultsScreen: {
                                    noResultsText: '无法找到相关结果',
                                    suggestedQueryText: '你可以尝试查询',
                                    reportMissingResultsText: '你认为该查询应该有结果？',
                                    reportMissingResultsLinkText: '点击反馈'
                                }
                            }
                        }
                    }
                }
            }
        },
        nav: [
            { text: '主页', link: '/' },
        ],
        sidebar: [
            {
                text: '网站相关',
                collapsed: true,
                items: [
                    { text: '开始', link: '/README' },
                    { text: '更新日志', link: '/CHANGELOG' }
                ]
            },
            {
                text: 'Windows相关',
                collapsed: true,
                items: [
                    { text: '更新Windows', link: '/Windows相关/更新Windows' },
                    { text: '系统修复', link: '/Windows相关/系统修复' },
                    { text: '系统重新安装', link: '/Windows相关/系统重新安装' },
                    { text: '安装C++运行库', link: '/Windows相关/安装C++运行库' },
                    { text: '安装.NET', link: '/Windows相关/安装.NET' },
                    { text: '应用最新TLS', link: '/Windows相关/应用最新TLS' },
                    { text: '磁盘清理', link: '/Windows相关/磁盘清理' },
                    { text: '系统配置', link: '/Windows相关/系统配置' },
                    { text: '清理软件卸载残留', link: '/Windows相关/清理软件卸载残留' },
                    { text: '查看蓝屏文件', link: '/Windows相关/查看蓝屏文件' }
                ]
            },
            {
                text: 'DNS加密',
                collapsed: true,
                items: [
                    { text: '前言', link: '/DNS加密/' },
                    { text: 'Windows设备：DOH', link: '/DNS加密/Windows设备：DOH' },
                    { text: 'Android设备：DOT', link: '/DNS加密/Android设备：DOT' },
                    { text: 'Apple设备：DOH', link: '/DNS加密/Apple设备：DOH' },
                    { text: 'Apple设备：DOT', link: '/DNS加密/Apple设备：DOT' },
                    { text: 'DNS大全', link: '/DNS加密/DNS大全' }
                ]
            },
            {
                text: 'Nodejs相关',
                collapsed: true,
                items: [
                    { text: '安装Nodejs', link: '/Nodejs相关/安装Nodejs' },
                    { text: '安装和卸载包', link: '/Nodejs相关/安装和卸载包' },
                    { text: 'NCU', link: '/Nodejs相关/NCU' }
                ]
            },
            {
                text: 'Ubuntu相关',
                collapsed: true,
                items: [
                    { text: '安装Ubuntu', link: '/Ubuntu相关/安装Ubuntu' },
                    { text: 'apt', link: '/Ubuntu相关/apt' },
                    { text: 'dpkg', link: '/Ubuntu相关/dpkg' },
                    { text: '无法更新snap store', link: '/Ubuntu相关/无法更新snap store' },
                    { text: '双系统的时间差8小时', link: '/Ubuntu相关/双系统的时间差8小时' },
                    { text: 'Server安装桌面', link: '/Ubuntu相关/Server安装桌面' }
                ]
            },
            {
                text: '原生安卓',
                collapsed: true,
                items: [
                    { text: 'WiFi感叹号', link: '/原生安卓/WiFi感叹号' },
                    { text: '时间同步', link: '/原生安卓/时间同步' }
                ]
            },
            {
                text: 'Docsify建站教程',
                collapsed: true,
                items: [
                    { text: '前言', link: '/Docsify建站教程/' },
                    { text: '安装Nodejs', link: '/Docsify建站教程/安装Nodejs' },
                    { text: '安装Docsify', link: '/Docsify建站教程/安装Docsify' },
                    { text: '开始建网站', link: '/Docsify建站教程/开始建网站' },
                    { text: '填充index', link: '/Docsify建站教程/填充index' },
                    { text: '本地化css和js', link: '/Docsify建站教程/本地化css和js' },
                    { text: '运行网站', link: '/Docsify建站教程/运行网站' },
                    { text: '发布网站', link: '/Docsify建站教程/发布网站' },
                    { text: '进阶操作', link: '/Docsify建站教程/进阶操作' }
                ]
            },
            {
                text: 'VitePress建站教程',
                collapsed: true,
                items: [
                    { text: '安装环境', link: '/VitePress建站教程/安装环境' },
                    { text: '添加文件', link: '/VitePress建站教程/添加文件' },
                    { text: '运行网站', link: '/VitePress建站教程/运行网站' },
                    { text: '发布网站', link: '/VitePress建站教程/发布网站' },
                    { text: '进阶操作', link: '/VitePress建站教程/进阶操作' }
                ]
            },
        ],
        //上次更新于
        lastUpdated: {
            text: '上次更新时间',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'short'
            }
        },
        //主页页脚
        footer: {
            message: '此网站使用GNU General Public License v3.0',
            copyright: 'Copyright © 2024-present BlazeSnow'
        }
    }
})
