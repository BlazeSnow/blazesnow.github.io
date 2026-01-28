---
lastUpdated: false
---

# ImagePorter

![Docker Pulls](https://img.shields.io/docker/pulls/imageporter/imageporter?style=for-the-badge)
![Docker Image Size](https://img.shields.io/docker/image-size/imageporter/imageporter?style=for-the-badge)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/imageporter/imageporter/main?style=for-the-badge)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/imageporter/imageporter/publish.yml?style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/imageporter/imageporter?style=for-the-badge)

## 一、软件说明

ImagePorter 是一个用于同步 Docker 镜像的 Docker 镜像，将 docker.io、ghcr.io、gcr.io 等仓库的镜像同步至设定的目的地仓库。

## 二、运行前准备

1. 创建应用目录：`mkdir -p /srv/imageporter`
2. 进入应用目录：`cd /srv/imageporter`
3. 创建文件：`accounts.json`
4. 创建文件：`images.json`

### `accounts.json`

```json
[
    {
        "username": "blazesnow",
        "password": "PASSWORD",
        "registry": "registry.cn-hangzhou.aliyuncs.com"
    },
    {
        "username": "blazesnow",
        "password": "PASSWORD",
        "registry": "docker.io"
    }
]
```

### `images.json`

```json
[
    {
        "source": "hello-world:latest",
        "target": "registry.cn-hangzhou.aliyuncs.com/blazesnow/hello-world:latest"
    },
    {
        "source": "busybox:latest",
        "target": "registry.cn-hangzhou.aliyuncs.com/blazesnow/busybox:latest"
    }
]
```

## 三、使用 Docker run 运行一次

```shell
cd /srv/imageporter

docker run --rm \
        -e "TZ=Asia/Shanghai" \
        -e "RUN_ONCE=true" \
        -e "DRY_RUN=false" \
        -v "./images.json:/app/images.json:ro" \
        -v "./accounts.json:/app/accounts.json:ro" \
        imageporter/imageporter:latest
```

## 四、使用 Docker Compose 运行定时同步

> [!TIP]
> 推荐使用 Docker Compose 部署本软件

1. 进入应用目录：`cd /srv/imageporter`
2. 创建文件：`docker-compose.yml`
3. 运行本软件：`docker compose up -d`
4. 查看日志：`docker logs imageporter -f`

### `docker-compose.yml`

```yml
services:
  imageporter:
    image: imageporter/imageporter:latest
    container_name: imageporter
    restart: no
    volumes:
      - ./images.json:/app/images.json:ro
      - ./accounts.json:/app/accounts.json:ro
    environment:
      TZ: "Asia/Shanghai"
      CRON: "0 0 * * *"
      RUN_ONCE: "false"
      DRY_RUN: "false"
      SLEEP_TIME: "5"
      RETRY_DELAY_TIME: "5"
```

## 五、环境变量设计说明

1. TZ：设定时区。
2. CRON：定时任务。
3. RUN_ONCE：运行本镜像时，是否忽略定时任务，并运行一次后退出。
4. DRY_RUN：跳过 Crane 的同步操作，注意，本变量不可用于验证登录情况。
5. SLEEP_TIME：同步一次镜像后的等待时间
6. RETRY_DELAY_TIME：同步失败后重试的等待时间

## 六、镜像的命名方式

### 源仓库的镜像

images.json 的 source

### 目标仓库的镜像

images.json 的 target

## 七、运行逻辑

1. 获取 accounts.json 中的仓库及账户密码
2. 使用 Crane 进行登录
3. 获取镜像列表
4. 比较 target 的值有无重复
5. 比较源镜像和目标镜像的 digest 值，若相同则跳过同步
6. 使用 Crane 同步镜像

## 八、许可证

本软件使用 MIT 许可证

### 第三方软件许可证

- Crane 遵守其原有的许可证
- Supercronic 遵守其原有的许可证
- 所有未提及的第三方软件均遵守其原有的许可证
