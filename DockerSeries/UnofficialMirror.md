---
lastUpdated: 2024-12-20T22:03:00+8:00
---

# 非官方镜像 | Docker系列

> 项目地址：<https://github.com/BlazeSnow/docker_image_pusher>

::: info 免责条款
使用本项目，风险由用户自行承担。本项目不确保无瑕疵且适用于特定用途，用户对数据安全、合规性等全权负责。镜像仅依其现有状况提供，不附带任何明示或暗示的担保。在使用过程中，因镜像产生的一切后果，均与提供者无关。
:::

## 检测连通性

```docker run --rm registry.cn-hangzhou.aliyuncs.com/blazesnow/hello-world```

输出以下内容时，连通性正常：

```ansi
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.
```

## 使用方法

> 此处以nginx为例

### 拉取镜像

```docker pull registry.cn-hangzhou.aliyuncs.com/blazesnow/nginx```

### ```compose.yml```

```yml
services:
  nginx:
    # 修改前
    image: nginx
    # 修改后
    image: registry.cn-hangzhou.aliyuncs.com/blazesnow/nginx
```

## 目前可用的镜像

<<< @/DockerSeries/UnofficialMirror.txt{yaml}