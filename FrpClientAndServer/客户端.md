---
lastUpdated: 2025-01-21T08:10:00+8:00
---

# 客户端 | 搭建内网穿透服务

## 获取文件

1. 前往```fatedier/frp```下载页面：<https://github.com/fatedier/frp/releases>
2. 下载：```frp_版本号_windows_amd64.zip```
3. 解压至空闲位置，例如：```D:\frp```
4. 保留```frpc.exe```和```frpc.toml```

## 配置文件

1. 前往目录：```D:\frp```
2. 修改文件：```frpc.toml```

### ```frpc.toml```

```toml{3}
serverAddr = "此处修改为服务器ip地址"
serverPort = 7000
auth.token = "此处设置连接密码"

[[proxies]]
name = "此处设置自定义备注名"
type = "tcp"
localIP = "127.0.0.1"
localPort = 此处修改为本地端口号
remotePort = 此处修改为远程端口号

[[proxies]]
name = "此处设置自定义备注名"
type = "udp"
localIP = "127.0.0.1"
localPort = 此处修改为本地端口号
remotePort = 此处修改为远程端口号
```

## 开始运行

1. 按下```Windows徽标```+```X```
2. 点击```终端管理员```
3. 前往工作目录：```cd D:\frp```
4. 开始运行：```./frpc -c ./frpc.toml```
5. 显示以下内容时即运行成功，关闭终端即断开连接

```ansi
start frpc service for config file [./frpc.toml]
try to connect to server...
login to server success, get run id [此处为id]
proxy added: [此处为自定义备注名]
[此处为自定义备注名] start proxy success
```