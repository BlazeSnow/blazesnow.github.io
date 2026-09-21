import type { DefaultTheme } from 'vitepress'

//base 拼接规则：base + link 直接相加，链接保留前导斜杠以支持指向分区首页
export const windows: DefaultTheme.Sidebar = {
  '/windows/': {
    base: '/windows',
    items: [
      {
        text: '系统',
        items: [
          { text: '前言', link: '/' },
          { text: '更新', link: '/update' },
          { text: '修复', link: '/repair' },
          { text: '重新安装', link: '/reinstall' },
        ]
      },
      {
        text: '运行库',
        items: [
          { text: '安装WinGet', link: '/winget' },
          { text: '安装C++运行库', link: '/vcredist' },
          { text: '安装WindowsApp运行库', link: '/windowsappsdk' },
          { text: '安装.NET', link: '/dotnet' },
          { text: '安装Java', link: '/java' },
          { text: '安装Python', link: '/python' },
          { text: '安装Nodejs', link: '/nodejs' },
        ]
      },
      {
        text: '文件',
        items: [
          { text: '显示后缀名和隐藏文件', link: '/extension' },
          { text: '重启文件资源管理器', link: '/tskillexplorer' },
          { text: '旧版右键菜单', link: '/oldrightclick' },
          { text: '修复桌面图标', link: '/iconcache' },
          { text: '计算哈希值', link: '/hash' },
        ]
      },
      { text: '磁盘清理', link: '/cleanmgr' },
      { text: '创建恢复分区', link: '/recovery' },
      { text: '禁用快速启动', link: '/hiberfil' },
      { text: '应用最新TLS', link: '/tls' },
      { text: '查看蓝屏文件', link: '/bluescreen' },
      { text: '设置环境变量', link: '/environment' },
    ]
  }
}
