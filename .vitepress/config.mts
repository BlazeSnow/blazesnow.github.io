import { defineConfig } from 'vitepress'

export default defineConfig({
	//网页语言
	lang: 'zh-CN',
	//网页标题
	title: 'BlazeSnow帮助网站',
	//网页描述
	description: 'BlazeSnow帮助网站',
	//头文件配置
	head: [
		//网页logo
		['link',
			{ rel: 'icon', href: '/logo.ico' }
		],
	],
	//用JavaScript块加载界面，减少带宽
	metaChunk: true,
	sitemap: {
		hostname: 'https://www.blazesnow.com/'
	},
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
		//右边的小目录
		aside: true,
		//右边的小目录
		outline: {
			//右边的小目录认H几
			level: [1, 4],
			//右边的小目录的文字
			label: "此篇目录",
		},
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
		// notFound: {
		// 	title: '页面未找到',
		// 	quote: '抱歉，没有找到您需要的页面',
		// 	linkLabel: '回到主页',
		// 	linkText: '回到主页',
		// 	code: '404',
		// },
		nav: [
			{
				text: '主页',
				link: '/'
			},
			{
				text: '系统',
				items: [
					{
						text: 'Windows相关',
						link: '/Windows相关/',
						activeMatch: '/Windows相关/'
					},
					{
						text: 'DNS加密',
						link: '/DNS加密/',
						activeMatch: '/DNS加密/'
					},
					{
						text: 'Ubuntu相关',
						link: '/Ubuntu相关/',
						activeMatch: '/Ubuntu相关/'
					},
					{
						text: '原生安卓',
						link: '/原生安卓/WiFi感叹号',
						activeMatch: '/原生安卓/'
					},
				]
			},
			{
				text: '开发者',
				items: [
					{
						text: 'Nodejs相关',
						link: '/Nodejs相关/',
						activeMatch: '/Nodejs相关/'
					},
					{
						text: 'Docker相关',
						link: '/Docker相关/',
						activeMatch: '/Docker相关/'
					},
					{
						text: 'Git相关',
						link: '/Git相关/',
						activeMatch: '/Git相关/'
					},
					{
						text: 'CMake相关',
						link: '/CMake相关/',
						activeMatch: '/CMake相关/'
					},
				]
			},
			{
				text: '服务器',
				items: [
					{
						text: 'Docsify建站教程',
						link: '/Docsify建站教程/',
						activeMatch: '/Docsify建站教程/'
					},
					{
						text: 'VitePress建站教程',
						link: '/VitePress建站教程/安装Nodejs',
						activeMatch: '/VitePress建站教程/'
					},
					{
						text: '部署网站至服务器',
						link: '/部署网站至服务器/',
						activeMatch: '/部署网站至服务器/'
					},
					{
						text: '搭建我的世界服务器',
						link: '/搭建我的世界服务器/',
						activeMatch: '/搭建我的世界服务器/'
					},
					{
						text: '部署Bitwarden密码服务',
						link: '/部署Bitwarden密码服务/',
						activeMatch: '/部署Bitwarden密码服务/'
					},
				]
			},
			{
				text: '关于',
				items: [
					{
						text: '更新日志',
						link: '/更新日志/',
						activeMatch: '/更新日志/'
					},
					{
						text: '关于本站',
						link: '/about'
					}
				]
			}
		],
		sidebar: {
			'/更新日志/': [
				{
					text: '更新日志',
					items: [
						{ text: '2024年8月', link: '/更新日志/' },
						{ text: '2024年7月', link: '/更新日志/2024年7月' },
						{ text: '2024年6月', link: '/更新日志/2024年6月' },
						{ text: '2024年5月', link: '/更新日志/2024年5月' },
					]
				}
			],
			'/Windows相关/': [
				{
					text: 'Windows相关',
					items: [
						{ text: '前言', link: '/Windows相关/' },
						{
							text: '系统',
							collapsed: true,
							items: [
								{ text: '更新Windows', link: '/Windows相关/更新Windows' },
								{ text: '系统修复', link: '/Windows相关/系统修复' },
								{ text: '系统重新安装', link: '/Windows相关/系统重新安装' },
								{ text: '查看蓝屏文件', link: '/Windows相关/查看蓝屏文件' },
							]
						},
						{
							text: '运行库',
							collapsed: true,
							items: [
								{ text: '安装C++运行库', link: '/Windows相关/安装C++运行库' },
								{ text: '安装.NET', link: '/Windows相关/安装.NET' },
							]
						},
						{
							text: '文件资源管理器',
							collapsed: true,
							items: [
								{ text: '显示后缀名和隐藏文件', link: '/Windows相关/显示后缀名和隐藏文件' },
								{ text: '创建App的快捷方式', link: '/Windows相关/创建App的快捷方式' },
								{ text: '重启文件资源管理器', link: '/Windows相关/重启文件资源管理器' },
								{ text: '删除新建文件类型', link: '/Windows相关/删除新建文件类型' },
								{ text: '删除右键菜单项', link: '/Windows相关/删除右键菜单项' },
								{ text: '修复桌面图标', link: '/Windows相关/修复桌面图标' },
							]
						},
						{
							text: '网络',
							collapsed: true,
							items: [
								{ text: '应用最新TLS', link: '/Windows相关/应用最新TLS' },
							]
						},
						{ text: '磁盘清理', link: '/Windows相关/磁盘清理' },
						{ text: '系统配置', link: '/Windows相关/系统配置' },
						{ text: '清理软件卸载残留', link: '/Windows相关/清理软件卸载残留' },
						{ text: '计算哈希值', link: '/Windows相关/计算哈希值' }
					]
				}
			],
			'/DNS加密/': [
				{
					text: 'DNS加密',
					items: [
						{ text: '前言', link: '/DNS加密/' },
						{ text: 'Windows设备：DOH', link: '/DNS加密/Windows设备：DOH' },
						{ text: 'Windows设备：模板', link: '/DNS加密/Windows设备：模板' },
						{ text: 'Android设备：DOT', link: '/DNS加密/Android设备：DOT' },
						{ text: 'Apple设备：DOH', link: '/DNS加密/Apple设备：DOH' },
						{ text: 'DNS大全', link: '/DNS加密/DNS大全' }]
				}
			],
			'/Nodejs相关/': [
				{
					text: 'Nodejs相关',
					items: [
						{ text: '前言', link: '/Nodejs相关/' },
						{ text: '安装Nodejs', link: '/Nodejs相关/安装Nodejs' },
						{ text: '引入npm', link: '/Nodejs相关/引入npm' },
						{ text: '管理npm包', link: '/Nodejs相关/管理npm包' },
						{ text: 'npm后缀', link: '/Nodejs相关/npm后缀' },
						{ text: 'npm换源', link: '/Nodejs相关/npm换源' },
					]
				}
			],
			'/Ubuntu相关/': [
				{
					text: 'Ubuntu相关',
					items: [
						{ text: '前言', link: '/Ubuntu相关/' },
						{
							text: '系统',
							collapsed: true,
							items: [
								{ text: '安装Ubuntu', link: '/Ubuntu相关/安装Ubuntu' },
								{ text: '检查磁盘类型', link: '/Ubuntu相关/检查磁盘类型' },
								{ text: '安装分区推荐', link: '/Ubuntu相关/安装分区推荐' },
							]
						},
						{
							text: '时间',
							collapsed: true,
							items: [
								{ text: '同步系统时间', link: '/Ubuntu相关/同步系统时间' },
								{ text: '双系统的时间差8小时', link: '/Ubuntu相关/双系统的时间差8小时' },
							]
						},
						{
							text: '文件处理',
							collapsed: true,
							items: [
								{ text: '命令行处理文件夹', link: '/Ubuntu相关/命令行处理文件夹' },
								{ text: '命令行处理文件', link: '/Ubuntu相关/命令行处理文件' },
								{ text: '文件权限', link: '/Ubuntu相关/文件权限' },
								{ text: '修改文件所有者', link: '/Ubuntu相关/修改文件所有者' },
								{ text: '压缩文件', link: '/Ubuntu相关/压缩文件' },
								{ text: '下载文件', link: '/Ubuntu相关/下载文件' },
							]
						},
						{
							text: '包管理',
							collapsed: true,
							items: [
								{ text: 'apt', link: '/Ubuntu相关/apt' },
								{ text: 'apt换源', link: '/Ubuntu相关/apt换源' },
								{ text: 'dpkg', link: '/Ubuntu相关/dpkg' },
							]
						},
						{ text: '无法更新SnapStore', link: '/Ubuntu相关/无法更新SnapStore' },
						{ text: 'Server安装桌面', link: '/Ubuntu相关/Server安装桌面' },
					]
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
			'/VitePress建站教程/': [
				{
					text: 'VitePress建站教程',
					items: [
						{ text: '安装Nodejs', link: '/VitePress建站教程/安装Nodejs' },
						{ text: '安装git', link: '/VitePress建站教程/安装git' },
						{ text: '安装VitePress', link: '/VitePress建站教程/安装VitePress' },
						{ text: 'VitePress建站引导', link: '/VitePress建站教程/VitePress建站引导' },
						{ text: '运行网站', link: '/VitePress建站教程/运行网站' },
						{ text: '添加GitHub排除目录', link: '/VitePress建站教程/添加GitHub排除目录' },
						{ text: '添加GitHub部署文件', link: '/VitePress建站教程/添加GitHub部署文件' },
						{ text: '检查必须文件', link: '/VitePress建站教程/检查必须文件' },
						{ text: '发布网站', link: '/VitePress建站教程/发布网站' },
						{ text: '进阶操作', link: '/VitePress建站教程/进阶操作' }
					]
				}
			],
			'/部署网站至服务器/': [
				{
					text: '部署网站至服务器',
					items: [
						{ text: '前言', link: '/部署网站至服务器/' },
						{ text: '安装环境', link: '/部署网站至服务器/安装环境' },
						{ text: '引入仓库', link: '/部署网站至服务器/引入仓库' },
						{ text: '配置nginx', link: '/部署网站至服务器/配置nginx' },
						{ text: '维护网站', link: '/部署网站至服务器/维护网站' },
						{ text: 'ICP备案', link: '/部署网站至服务器/ICP备案' },
					]
				}
			],
			'/Docker相关/': [
				{
					text: 'Docker相关',
					items: [
						{ text: '前言', link: '/Docker相关/' },
						{ text: '运行Docker', link: '/Docker相关/运行Docker' },
						{ text: 'Docker换源', link: '/Docker相关/Docker换源' },
						{ text: '管理镜像', link: '/Docker相关/管理镜像' },
						{ text: '管理容器', link: '/Docker相关/管理容器' },
						{ text: '容器镜像服务', link: '/Docker相关/容器镜像服务' },
					]
				}
			],
			'/Git相关/': [
				{
					text: 'Git相关',
					items: [
						{ text: '前言', link: '/Git相关/' },
						{ text: '安装Git', link: '/Git相关/安装Git' },
						{ text: '处理仓库', link: '/Git相关/处理仓库' },
						{ text: '处理远程仓库', link: '/Git相关/处理远程仓库' },
						{ text: '处理分支', link: '/Git相关/处理分支' },
						{ text: 'SSH连接仓库', link: '/Git相关/SSH连接仓库' },
					]
				}
			],
			'/CMake相关/': [
				{
					text: 'CMake相关',
					items: [
						{ text: '前言', link: '/CMake相关/' },
						{ text: '安装环境', link: '/CMake相关/安装环境' },
						{ text: '安装编辑器', link: '/CMake相关/安装编辑器' },
						{ text: '添加配置文件', link: '/CMake相关/添加配置文件' },
					]
				}
			],
			'/搭建我的世界服务器/': [
				{
					text: '搭建我的世界服务器',
					items: [
						{ text: '前言', link: '/搭建我的世界服务器/' },
						{ text: '安装环境', link: '/搭建我的世界服务器/安装环境' },
						{ text: '引入文件', link: '/搭建我的世界服务器/引入文件' },
						{ text: '开始运行', link: '/搭建我的世界服务器/开始运行' },
						{ text: '维护服务器', link: '/搭建我的世界服务器/维护服务器' },
					]
				}
			],
			'/部署Bitwarden密码服务/': [
				{
					text: '部署Bitwarden密码服务',
					items: [
						{ text: '前言', link: '/部署Bitwarden密码服务/' },
						{ text: '安装环境', link: '/部署Bitwarden密码服务/安装环境' },
						{ text: '拉取镜像', link: '/部署Bitwarden密码服务/拉取镜像' },
						{ text: '配置文件', link: '/部署Bitwarden密码服务/配置文件' },
						{ text: '开始运行', link: '/部署Bitwarden密码服务/开始运行' },
						{ text: '维护服务', link: '/部署Bitwarden密码服务/维护服务' },
					]
				}
			],
		},
		//上次更新于
		lastUpdated: {
			text: '上次更新时间',
			formatOptions: {
				localeMatcher: "best fit",
				weekday: undefined,
				era: undefined,
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
				second: undefined,
				hour12: false,
				timeZoneName: "long",
				formatMatcher: "best fit",
				timeZone: "Asia/Chongqing",
				forceLocale: true,
			}
		},
		//主页页脚
		footer: {
			message: '本网站以<a href="/gpl-3.0.txt" target="_blank">GNU General Public License v3.0</a>的条款发布。'
				+ '<br>'
				+ '<img src="/beian.png" alt="公安备案图标" style="display:inline-block; vertical-align:middle; width:18px; height:18px; margin-right:5px;">'
				+ '<a href="https://beian.mps.gov.cn/#/query/webSearch?code=44195202000104" rel="noreferrer" target="_blank">粤公网安备44195202000104号</a>。'
				+ '<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2024284878号</a>。',
			copyright: 'Copyright © 2024 <a href="https://github.com/BlazeSnow" target="_blank">BlazeSnow</a>. 保留所有权利。'
		},
		editLink: {
			pattern: 'https://github.com/blazesnow/blazesnow.github.io/tree/main/:path',
			text: '在GitHub上编辑此页面'
		}
	}
})