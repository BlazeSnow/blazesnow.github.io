import { defineConfig } from 'vitepress'

export default defineConfig({
    //网页语言
    lang: 'zh-Hans',
    //网页标题
    title: 'BlazeSnow帮助网站',
    //网页描述
    description: 'BlazeSnow帮助网站',
    //头文件配置
    head: [
        //网页logo
        ['link',
            { rel: 'icon', href: '/logo.ico' }
        ]
    ],
    //用JavaScript块加载界面，减少带宽
    metaChunk: true,
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
    //生成sitemap
    sitemap: {
        hostname: 'https://blazesnow.com'
    },
    //主题配置
    themeConfig: {
        //左上角logo
        logo: '/logo.ico',
        //右边的小目录
        aside: false,
        //右边的小目录认H几
        outline: false,
        //右边的小目录的文字
        //outlineTitle: "此篇目录",
        //关掉语言自动路径
        i18nRouting: false,
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
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: 'Windows相关',
                link: '/Windows相关/更新Windows',
                activeMatch: '/Windows相关'
            },
            {
                text: 'DNS加密',
                link: '/DNS加密/',
                activeMatch: '/DNS加密'
            },
            {
                text: 'Nodejs相关',
                link: '/Nodejs相关/安装Nodejs',
                activeMatch: '/Nodejs相关'
            },
            {
                text: 'Ubuntu相关',
                link: '/Ubuntu相关/安装Ubuntu',
                activeMatch: '/Ubuntu相关'
            },
            {
                text: '更多',
                items: [
                    {
                        text: '原生安卓',
                        link: '/原生安卓/WiFi感叹号',
                        activeMatch: '/原生安卓'
                    },
                    {
                        text: 'Docsify建站教程',
                        link: '/Docsify建站教程/',
                        activeMatch: '/Docsify建站教程'
                    },
                    {
                        text: 'VitePress建站教程',
                        link: '/VitePress建站教程/安装环境',
                        activeMatch: '/VitePress建站教程'
                    },
                    {
                        text: '更新日志',
                        link: '/更新日志/',
                        activeMatch: '/更新日志'
                    },
                ]
            }
        ],
        sidebar: {
            '/更新日志/': [
                {
                    text: '更新日志',
                    items: [
                        { text: '2024年6月', link: '/更新日志/' },
                        { text: '2024年5月', link: '/更新日志/2024年5月' },
                    ]
                }
            ],
            '/Windows相关/': [
                {
                    text: 'Windows相关',
                    items: [
                        { text: '更新Windows', link: '/Windows相关/更新Windows' },
                        { text: '系统修复', link: '/Windows相关/系统修复' },
                        { text: '系统重新安装', link: '/Windows相关/系统重新安装' },
                        { text: '安装C++运行库', link: '/Windows相关/安装C++运行库' },
                        { text: '安装.NET', link: '/Windows相关/安装.NET' },
                        { text: '显示后缀名和隐藏文件', link: '/Windows相关/显示后缀名和隐藏文件' },
                        { text: '重启文件资源管理器', link: '/Windows相关/重启文件资源管理器' },
                        { text: '删除新建文件类型', link: '/Windows相关/删除新建文件类型' },
                        { text: '应用最新TLS', link: '/Windows相关/应用最新TLS' },
                        { text: '磁盘清理', link: '/Windows相关/磁盘清理' },
                        { text: '系统配置', link: '/Windows相关/系统配置' },
                        { text: '清理软件卸载残留', link: '/Windows相关/清理软件卸载残留' },
                        { text: '查看蓝屏文件', link: '/Windows相关/查看蓝屏文件' }]
                }
            ],
            '/DNS加密/': [
                {
                    text: 'DNS加密',
                    items: [
                        { text: '前言', link: '/DNS加密/' },
                        { text: 'Windows设备：DOH', link: '/DNS加密/Windows设备：DOH' },
                        { text: 'Android设备：DOT', link: '/DNS加密/Android设备：DOT' },
                        { text: 'Apple设备：DOH', link: '/DNS加密/Apple设备：DOH' },
                        { text: 'Apple设备：DOT', link: '/DNS加密/Apple设备：DOT' },
                        { text: 'DNS大全', link: '/DNS加密/DNS大全' }]
                }
            ],
            '/Nodejs相关/': [
                {
                    text: 'Nodejs相关',
                    items: [
                        { text: '安装Nodejs', link: '/Nodejs相关/安装Nodejs' },
                        { text: '安装和卸载包', link: '/Nodejs相关/安装和卸载包' },
                        { text: 'NCU', link: '/Nodejs相关/NCU' }]
                }
            ],
            '/Ubuntu相关/': [
                {
                    text: 'Ubuntu相关',
                    items: [
                        { text: '安装Ubuntu', link: '/Ubuntu相关/安装Ubuntu' },
                        { text: 'apt', link: '/Ubuntu相关/apt' },
                        { text: 'dpkg', link: '/Ubuntu相关/dpkg' },
                        { text: '无法更新SnapStore', link: '/Ubuntu相关/无法更新SnapStore' },
                        { text: '双系统的时间差8小时', link: '/Ubuntu相关/双系统的时间差8小时' },
                        { text: 'Server安装桌面', link: '/Ubuntu相关/Server安装桌面' }]
                }
            ],
            '/原生安卓/': [
                {
                    text: '原生安卓',
                    items: [
                        { text: 'WiFi感叹号', link: '/原生安卓/WiFi感叹号' },
                        { text: '时间同步', link: '/原生安卓/时间同步' }]
                }
            ],
            '/Docsify建站教程/': [
                {
                    text: 'Docsify建站教程',
                    items: [
                        { text: '前言', link: '/Docsify建站教程/' },
                        { text: '安装Nodejs', link: '/Docsify建站教程/安装Nodejs' },
                        { text: '安装Docsify', link: '/Docsify建站教程/安装Docsify' },
                        { text: '开始建网站', link: '/Docsify建站教程/开始建网站' },
                        { text: '填充index', link: '/Docsify建站教程/填充index' },
                        { text: '本地化css和js', link: '/Docsify建站教程/本地化css和js' },
                        { text: '运行网站', link: '/Docsify建站教程/运行网站' },
                        { text: '发布网站', link: '/Docsify建站教程/发布网站' },
                        { text: '进阶操作', link: '/Docsify建站教程/进阶操作' }]
                }
            ],
            'VitePress建站教程': [
                {
                    text: 'VitePress建站教程',
                    items: [
                        { text: '安装环境', link: '/VitePress建站教程/安装环境' },
                        { text: '添加文件', link: '/VitePress建站教程/添加文件' },
                        { text: '运行网站', link: '/VitePress建站教程/运行网站' },
                        { text: '发布网站', link: '/VitePress建站教程/发布网站' },
                        { text: '进阶操作', link: '/VitePress建站教程/进阶操作' }]
                }
            ],
        },
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
