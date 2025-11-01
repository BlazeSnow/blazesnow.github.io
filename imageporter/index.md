---
lastUpdated: false
---

# ImagePorter

## 软件说明

ImagePorter是一个用于同步Docker镜像的Docker镜像，将docker.io、ghcr.io、gcr.io等仓库的镜像同步至设定的目的地仓库。

## 使用说明

> [!TIP]
> 推荐使用Docker Compose部署本软件

1. 创建应用目录：`mkdir -p /srv/imageporter`
2. 进入应用目录：`cd /srv/imageporter`
3. 创建`docker-compose.yml`文件
4. 创建`.env`文件
5. 创建`images.json`文件
6. 运行本软件：`docker compose up -d`

### `docker-compose.yml`

```yml
services:
  imageporter:
    image: imageporter/imageporter:dev
    container_name: imageporter
    restart: no
    volumes:
      - ./images.json:/app/images.json:ro
    env_file:
      - .env
```

### `.env`

> [!TIP]
> 此处标注的可选值均为默认值

```env
TZ="Asia/Shanghai"                # 可选：时区
CRON="0 0 * * *"                  # 可选：运行计划
DISABLE_FIRSTRUN="false"          # 可选：启动时运行一次
DEFAULT_PLATFORM="linux/amd64"    # 可选：镜像默认平台
SOURCE_REGISTRY=""                # 可选：源仓库
SOURCE_USERNAME=""                # 可选：源仓库用户名
SOURCE_PASSWORD=""                # 可选：源仓库密码
TARGET_REGISTRY="ghcr.io"         # ⚠️必选：目标仓库
TARGET_USERNAME="blazesnow"       # ⚠️必选：目标仓库用户名
TARGET_PASSWORD="PASSWORD"        # ⚠️必选：目标仓库密码
```

### `images.json`

```json
[
    {
        "source": "hello-world:latest",
        "target": "ghcr.io/blazesnow/hello-world:latest",
        "platform": "linux/amd64"
    },
    {
        "source": "busybox:latest",
        "target": "ghcr.io/blazesnow/busybox:latest",
        "platform": "linux/amd64"
    }
]
```

## 镜像的命名方式

### 源仓库的镜像

`images.json`的`source`

### 目标仓库的镜像

`images.json`的`target`

### 镜像平台

`images.json`的`platform`，若为空，取`.env`的`DEFAULT_PLATFORM`

## 运行逻辑

1. 获取`.env`中的`SOURCE_REGISTRY`和`TARGET_REGISTRY`并登录
2. 获取镜像列表
3. 比较`target`的值有无重复
4. 比较源镜像和目标镜像的`digest`值，若相同则跳过同步
5. 使用`Crane`同步镜像

## 许可证

本软件使用 MIT 许可证

### 第三方软件许可证

- Crane 遵守其原有的许可证
- Supercronic 遵守其原有的许可证
- 所有未提及的第三方软件均遵守其原有的许可证
