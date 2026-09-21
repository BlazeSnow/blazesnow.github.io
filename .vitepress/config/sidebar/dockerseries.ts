import type { DefaultTheme } from 'vitepress'

export const dockerseries: DefaultTheme.Sidebar = {
  '/dockerseries/': {
    base: '/dockerseries',
    items: [
      {
        text: '前言',
        collapsed: true,
        items: [
          { text: '前言', link: '/' },
          { text: '命名卷', link: '/volumes/' },
          { text: '网络', link: '/networks/' },
          { text: '维护服务', link: '/maintain' },
        ]
      },
      {
        text: '文件服务器',
        collapsed: true,
        items: [
          { text: 'FTP', link: '/ftp/' },
          { text: 'Webdav', link: '/webdav/' },
          { text: 'SMB', link: '/smb/' }
        ]
      },
      { text: '文件列表服务器', link: '/openlist/' },
      { text: '端口转发服务端', link: '/frps/' },
      { text: '端口转发客户端', link: '/frpc/' },
      { text: '家庭域名服务器', link: '/adguardhome/' },
      { text: '密码服务器', link: '/vaultwarden/' },
      { text: '智能家居中枢', link: '/homeassistant/' },
      { text: '语音服务器', link: '/teamspeak/' },
      { text: '音乐服务器', link: '/navidrome/' },
      { text: '容器可视化管理', link: '/portainer/' },
      { text: '版本管理服务器', link: '/gitea/' },
      { text: '证书申请器', link: '/certbot/' },
    ]
  }
}
