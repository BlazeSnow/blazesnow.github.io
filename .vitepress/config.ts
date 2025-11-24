import { defineConfig } from 'vitepress'

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
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'Docker系列',
        link: '/DockerSeries/',
        activeMatch: '/DockerSeries/'
      },
      {
        text: 'Windows',
        link: '/Windows/',
        activeMatch: '/Windows/'
      },
      {
        text: '更多',
        activeMatch: '/Ubuntu/',
        items: [
          {
            text: 'IPAbuyer',
            link: '/ipa/',
            activeMatch: '/ipa/'
          },
          {
            text: 'Ubuntu',
            link: '/Ubuntu/',
            activeMatch: '/Ubuntu/'
          },
          {
            text: 'ImagePorter',
            link: '/imageporter/',
            activeMatch: '/imageporter/'
          },
          {
            text: 'OneDriveHosts',
            link: '/OneDriveHosts/',
            activeMatch: '/OneDriveHosts/'
          },
          {
            text: 'VitePress建站教程',
            link: '/VitePress/',
            activeMatch: '/VitePress/'
          },
          {
            text: '部署网站至服务器',
            link: '/WebsiteToServer/',
            activeMatch: '/WebsiteToServer/'
          },
          {
            text: 'DNS加密',
            link: '/DNSEncryption/',
            activeMatch: '/DNSEncryption/'
          },
          {
            text: 'Nodejs',
            link: '/Nodejs/',
            activeMatch: '/Nodejs/'
          },
          {
            text: 'Docker',
            link: '/Docker/',
            activeMatch: '/Docker/'
          }
        ]
      },
      {
        text: '关于',
        activeMatch: '/CHANGELOG/',
        items: [
          {
            text: '更新日志',
            link: '/CHANGELOG/',
            activeMatch: '/CHANGELOG/'
          },
          {
            text: '关于本站',
            link: '/about'
          },
          {
            text: '停止支持及弃用',
            link: '/Deprecated'
          },
          {
            text: '网站状态',
            link: 'https://blazesnow.statuspage.io/',
            target: '_blank',
          },
        ]
      },
    ],
    sidebar: {
      '/CHANGELOG/': [
        {
          text: '2025年',
          collapsed: true,
          items: [
            { text: '2025年11月', link: '/CHANGELOG/' },
            { text: '2025年10月', link: '/CHANGELOG/2025/10' },
            { text: '2025年9月', link: '/CHANGELOG/2025/9' },
            { text: '2025年8月', link: '/CHANGELOG/2025/8' },
            { text: '2025年7月', link: '/CHANGELOG/2025/7' },
            { text: '2025年6月', link: '/CHANGELOG/2025/6' },
            { text: '2025年5月', link: '/CHANGELOG/2025/5' },
            { text: '2025年4月', link: '/CHANGELOG/2025/4' },
            { text: '2025年3月', link: '/CHANGELOG/2025/3' },
            { text: '2025年2月', link: '/CHANGELOG/2025/2' },
            { text: '2025年1月', link: '/CHANGELOG/2025/1' },
          ],
        },
        {
          text: '2024年',
          collapsed: true,
          items: [
            { text: '2024年12月', link: '/CHANGELOG/2024/12' },
            { text: '2024年11月', link: '/CHANGELOG/2024/11' },
            { text: '2024年10月', link: '/CHANGELOG/2024/10' },
            { text: '2024年9月', link: '/CHANGELOG/2024/9' },
            { text: '2024年8月', link: '/CHANGELOG/2024/8' },
            { text: '2024年7月', link: '/CHANGELOG/2024/7' },
            { text: '2024年6月', link: '/CHANGELOG/2024/6' },
            { text: '2024年5月', link: '/CHANGELOG/2024/5' },
          ]
        },
      ],
      '/Windows/': [
        {
          text: '系统',
          items: [
            { text: '前言', link: '/Windows/' },
            { text: '更新', link: '/Windows/Update' },
            { text: '修复', link: '/Windows/Repair' },
            { text: '重新安装', link: '/Windows/Reinstall' },
          ]
        },
        {
          text: '运行库',
          items: [
            { text: '安装WinGet', link: '/Windows/WinGet' },
            { text: '安装C++运行库', link: '/Windows/VCRedist' },
            { text: '安装.NET', link: '/Windows/DotNet' },
            { text: '安装Java', link: '/Windows/Java' },
            { text: '安装Python', link: '/Windows/Python' },
            { text: '安装Nodejs', link: '/Windows/Nodejs' },
          ]
        },
        {
          text: '文件',
          items: [
            { text: '显示后缀名和隐藏文件', link: '/Windows/Extension' },
            { text: '创建快捷方式', link: '/Windows/Shortcuts' },
            { text: '重启文件资源管理器', link: '/Windows/RestartFileExplorer' },
            { text: '旧版右键菜单', link: '/Windows/OldRightClick' },
            { text: '删除新建文件类型', link: '/Windows/RemoveFileType' },
            { text: '删除右键菜单项', link: '/Windows/RemoveRightClickItem' },
            { text: '修复桌面图标', link: '/Windows/ClearIconCache' },
            { text: '计算哈希值', link: '/Windows/Hash' },
          ]
        },
        {
          text: '清理',
          items: [
            { text: '磁盘清理', link: '/Windows/Cleanmgr' },
            { text: '清除程序的卸载残留', link: '/Windows/RemoveUninstallRemnants' },
            { text: '清理微软商店残留', link: '/Windows/RemoveMicrosoftStoreRemnants' },
          ]
        },
        { text: '创建恢复分区', link: '/Windows/WindowsRE' },
        { text: '禁用快速启动', link: '/Windows/Hiberfil' },
        { text: '应用最新TLS', link: '/Windows/TLS' },
        { text: '查看蓝屏文件', link: '/Windows/BlueScreen' },
        { text: '系统配置', link: '/Windows/Msconfig' },
        { text: '设置环境变量', link: '/Windows/EnvironmentVariables' },
      ],
      '/DNSEncryption/': [
        { text: '前言', link: '/DNSEncryption/' },
        { text: 'Windows设备', link: '/DNSEncryption/Windows' },
        { text: 'Android设备', link: '/DNSEncryption/Android' },
        { text: 'Apple设备', link: '/DNSEncryption/Apple' },
        { text: 'DNS大全', link: '/DNSEncryption/Collection' }
      ],
      '/Nodejs/': [
        { text: '前言', link: '/Nodejs/' },
        { text: '安装Nodejs', link: '/Nodejs/Install' },
        { text: '引入npm', link: '/Nodejs/Init' },
        { text: 'npm管理包', link: '/Nodejs/Manage' },
        { text: 'npm后缀', link: '/Nodejs/Parameter' },
        { text: 'npm配置文件', link: '/Nodejs/Npmrc' },
        { text: 'npm换源', link: '/Nodejs/Mirror' },
        { text: 'npm代理', link: '/Nodejs/Proxy' },
        { text: 'npm缓存', link: '/Nodejs/Cache' },
      ],
      '/Ubuntu/': [
        {
          text: '系统',
          items: [
            { text: '前言', link: '/Ubuntu/' },
            { text: '安装Ubuntu', link: '/Ubuntu/Install' },
            { text: '检查磁盘类型', link: '/Ubuntu/Parted' },
            { text: '安装分区推荐', link: '/Ubuntu/Partition' },
            { text: '安装SSH', link: '/Ubuntu/SSH' },
            { text: 'SSH超级用户权限', link: '/Ubuntu/SSHSuperUser' },
            { text: '查看硬件配置', link: '/Ubuntu/Hardware' },
            { text: '管理防火墙', link: '/Ubuntu/Firewall' },
          ]
        },
        {
          text: '时间',
          items: [
            { text: '同步系统时间', link: '/Ubuntu/SyncTime' },
            { text: '双系统的时间差8小时', link: '/Ubuntu/SystemTimeDifference' },
          ]
        },
        {
          text: '文件处理',
          items: [
            { text: '命令行处理文件夹', link: '/Ubuntu/TerminalFolders' },
            { text: '命令行处理文件', link: '/Ubuntu/TerminalFile' },
            { text: '文件权限', link: '/Ubuntu/Chmod' },
            { text: '修改文件所有者', link: '/Ubuntu/Chown' },
            { text: '压缩文件', link: '/Ubuntu/Tar' },
            { text: '下载文件', link: '/Ubuntu/Curl' },
          ]
        },
        {
          text: '包管理',
          items: [
            { text: 'apt', link: '/Ubuntu/Apt' },
            { text: 'apt换源', link: '/Ubuntu/AptMirror' },
            { text: 'dpkg', link: '/Ubuntu/Dpkg' },
          ]
        },
        { text: '自动化脚本', link: '/Ubuntu/Crontab' },
        { text: '激活UbuntuPro', link: '/Ubuntu/UbuntuPro' },
        { text: '无法更新SnapStore', link: '/Ubuntu/UpdateSnapStore' },
      ],
      '/Docker/': [
        { text: '前言', link: '/Docker/' },
        { text: '安装Docker', link: '/Docker/Install' },
        { text: '安装IO发行版', link: '/Docker/InstallIO' },
        { text: '安装CE发行版', link: '/Docker/InstallCE' },
        { text: '运行Docker', link: '/Docker/Systemctl' },
        { text: 'Docker换源', link: '/Docker/Mirror' },
        { text: '管理镜像', link: '/Docker/Image' },
        { text: '管理容器', link: '/Docker/Container' },
        { text: '容器镜像服务', link: '/Docker/MirrorService' },
        { text: '传递镜像', link: '/Docker/Transfer' },
        { text: 'Compose文件', link: '/Docker/Compose' },
        { text: '清理缓存', link: '/Docker/Prune' },
      ],
      '/Git/': [
        { text: '前言', link: '/Git/' },
        { text: '安装Git', link: '/Git/Install' },
        { text: '处理仓库', link: '/Git/Repository' },
        { text: '处理远程仓库', link: '/Git/RemoteRepository' },
        { text: '处理分支', link: '/Git/Branches' },
      ],
      '/DockerSeries/': [
        {
          text: '前言',
          collapsed: true,
          items: [
            { text: '前言', link: '/DockerSeries/' },
            { text: '命名卷', link: '/DockerSeries/Volumes' },
            { text: '网络', link: '/DockerSeries/Networks' },
          ]
        },
        {
          text: '文件服务器',
          collapsed: true,
          items: [
            { text: 'FTP', link: '/DockerSeries/FTP' },
            { text: 'SFTP', link: '/DockerSeries/SFTP' },
            { text: 'Webdav', link: '/DockerSeries/Webdav' },
            { text: 'SMB', link: '/DockerSeries/SMB' },
            { text: 'NFS', link: '/DockerSeries/NFS' }
          ]
        },
        { text: '文件列表服务器', link: '/DockerSeries/OpenList' },
        { text: '端口转发服务端', link: '/DockerSeries/Frps' },
        { text: '端口转发客户端', link: '/DockerSeries/Frpc' },
        { text: '我的世界服务器', link: '/DockerSeries/MinecraftServer' },
        { text: '家庭域名服务器', link: '/DockerSeries/AdGuardHome' },
        { text: '密码服务器', link: '/DockerSeries/Vaultwarden' },
        { text: '文件快递柜', link: '/DockerSeries/FileCodeBox' },
        { text: '消息推送器', link: '/DockerSeries/Ntfy' },
        { text: '智能家居中枢', link: '/DockerSeries/HomeAssistant' },
        { text: '语音服务器', link: '/DockerSeries/TeamSpeak' },
        { text: '音乐服务器', link: '/DockerSeries/Navidrome' },
        { text: '容器可视化管理', link: '/DockerSeries/Portainer' },
        { text: '版本管理服务器', link: '/DockerSeries/Gitea' },
        { text: '证书申请器', link: '/DockerSeries/Certbot' },
      ]
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
      message: '本网站以<a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank">GNU Affero General Public License v3.0</a>的条款发布。'
        + '<br>'
        + '<img src="/beian.png" alt="公安备案图标" style="display:inline-block; vertical-align:middle; width:18px; height:18px; margin-right:5px;" >'
        + '<a href="https://beian.mps.gov.cn/#/query/webSearch?code=44195202000168" rel="noreferrer" target="_blank" >粤公网安备44195202000168号</a>。'
        + '<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2025413405号</a>。',
      copyright: 'Copyright © 2024-2025 <a href="https://github.com/BlazeSnow" target="_blank">BlazeSnow</a>. 保留所有权利。'
    }
  }
})