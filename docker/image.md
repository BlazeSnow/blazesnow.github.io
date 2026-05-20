---
title: 管理镜像 | Docker
lastUpdated: 2024-8-29T22:24:00+8:00
description: Docker镜像的搜索、拉取、查看和删除等管理操作。
---

# <TitleIcon icon="docker" /> 管理镜像

## 拉取镜像

```bash
docker pull 镜像名称
```

## 查看本地镜像

```bash
docker images
```

## 镜像重命名

```bash
docker tag 旧名称（或镜像id） 新名称
```

## 推送镜像

```bash
docker push 镜像名称
```

## 删除本地镜像

```bash
docker rmi 镜像名称
```

## 启动镜像

```bash
docker run 镜像名称
```
