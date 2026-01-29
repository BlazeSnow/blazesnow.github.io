---
lastUpdated: false
---

# ComposeBuilder

## 一、软件介绍

ComposeBuilder 是一个用于快速生成 docker-compose.yml 的工具。它提供图形化流程，帮助用户为多个镜像逐项配置容器名称、重启策略、端口映射或网桥、挂载卷/目录、环境变量与健康检查。

## 二、使用方式

打开 <https://composebuilder.blazesnow.com> 使用本工具

## 三、本地部署

> [!TIP]
> 推荐使用Docker Compose运行本软件

1. 使用下述的Docker Compose或Docker run方式运行本工具
2. 访问 <http://localhost> 使用本工具

### Docker Compose

```yml
services:
  composebuilder:
    image: composebuilder/composebuilder:latest
    container_name: composebuilder
    restart: no
    ports:
      - 80:80
```

### Docker

```shell
docker run --name composebuilder --restart no -p 80:80 composebuilder/composebuilder:latest
```
