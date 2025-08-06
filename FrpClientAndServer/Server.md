---
lastUpdated: 2025-08-06T14:18:00+8:00
description: 搭建内网穿透服务的服务端配置
---

# 服务端 | 搭建内网穿透服务

## 开放端口

前往服务器安全组配置处，添加以下端口：

| 端口类型 |    端口    |  端口用途  |
| :------: | :--------: | :--------: |
|   TCP    |    7000    | 服务器连接 |
|   TCP    | 需要的端口 |   自定义   |
|   UDP    | 需要的端口 |   自定义   |

## 安装环境

### 安装screen

```bash
sudo apt install screen
```

## 获取文件

1. 前往`fatedier/frp`下载页面：<https://github.com/fatedier/frp/releases>
2. 下载：`frp_版本号_linux_amd64.tar.gz`
3. 解压至空闲位置，准备上传`frps`和`frps.toml`
4. 前往服务器终端
5. 前往srv目录：`cd /srv`
6. 新建工作目录：`mkdir frp`
7. 进入工作目录：`cd frp`
8. 上传`frps`和`frps.toml`

## 配置文件

1. 前往工作目录：`cd /srv/frp`
2. 可执行文件提权：`chmod 700 frps`
3. 修改配置文件：`nano frps.toml`

### `frps.toml`

```toml{2}
bindPort = 7000
auth.token = "此处设置连接密码"
```

## 开始运行

1. 前往工作目录：`cd /srv/frp`
2. 创建screen终端：`screen -S frp`
3. 开始运行：`./frps -c ./frps.toml`
4. 显示以下内容时即运行成功，可以退出SSH连接

```ansi
frps uses config file: ./frps.toml
frps tcp listen on 0.0.0.0:7000
frps started successfully
```

### 更多命令

- 查看screen会话：`screen -ls`
- 进入frp会话：`screen -r frp`
- 删除frp会话：`screen -X -S frp quit`
