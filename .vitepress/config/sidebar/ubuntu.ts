import type { DefaultTheme } from 'vitepress'

export const ubuntu: DefaultTheme.Sidebar = {
  '/ubuntu/': {
    base: '/ubuntu',
    items: [
      {
        text: '系统',
        items: [
          { text: '前言', link: '/' },
          { text: '安装Ubuntu', link: '/install' },
          { text: '检查磁盘类型', link: '/parted' },
          { text: '安装分区推荐', link: '/partition' },
          { text: '安装SSH', link: '/ssh' },
          { text: 'SSH超级用户权限', link: '/sshsuperuser' },
          { text: '查看硬件配置', link: '/hardware' },
          { text: '管理防火墙', link: '/firewall' },
        ]
      },
      {
        text: '时间',
        items: [
          { text: '同步系统时间', link: '/synctime' },
          { text: '双系统的时间差', link: '/systemtimedifference' },
        ]
      },
      {
        text: '文件处理',
        items: [
          { text: '命令行处理文件夹', link: '/terminalfolders' },
          { text: '命令行处理文件', link: '/terminalfile' },
          { text: '文件权限', link: '/chmod' },
          { text: '修改文件所有者', link: '/chown' },
          { text: '压缩文件', link: '/tar' },
          { text: '下载文件', link: '/curl' },
        ]
      },
      {
        text: '包管理',
        items: [
          { text: 'apt', link: '/apt' },
          { text: 'apt换源', link: '/aptmirror' },
          { text: 'dpkg', link: '/dpkg' },
        ]
      },
      { text: '自动化脚本', link: '/crontab' },
      { text: '激活UbuntuPro', link: '/ubuntupro' },
      { text: '无法更新SnapStore', link: '/updatesnapstore' },
    ]
  }
}
