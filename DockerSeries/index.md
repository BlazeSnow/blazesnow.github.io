---
lastUpdated: 2024-11-24T21:45:00+8:00
---

# 前言 | Docker系列

> 在云原生时代，Docker Compose是容器编排的得力助手。它用简洁YAML文件管理多容器应用，涵盖启动、网络、资源等设置。本教程专为初涉容器化或有经验者打造，以清晰步骤与实例，助你掌握其精髓，高效编排应用。

## 系统要求

本教程建立于Ubuntu系统，Ubuntu桌面版与服务器版均可，主要使用SSH连接到Ubuntu系统并执行命令。请提前准备Ubuntu系统并使用SSH连接。

## 安装Docker

1. 卸载其他版本Docker：```for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done```
2. 前往var目录：```cd /var```
3. 下载Docker安装脚本：```curl -fsSL https://get.docker.com -o install-docker.sh```
4. 使用安装脚本安装Docker：```sudo sh install-docker.sh --mirror Aliyun```或```sudo sh install-docker.sh --mirror AzureChinaCloud```
5. 验证安装：```docker version```

## 创建工作目录

> 建议创建一个独立的工作目录，例如```/var/example```，专门用于存放相关内容。如此一来，在执行容器的启动与停止操作时，方能确保整个过程顺利无阻，避免因目录混乱或权限问题而引发异常，保障容器化应用稳定运行。

1. 前往var目录：```cd /var```
2. 创建工作目录：```mkdir example```（建议为每一个服务起一个独特的名称）
3. 进入工作目录：```cd example```
4. 创建compose文件：```touch compose.yml```

## 开放端口

> 依据Compose文件中设定的```ports```配置项，在服务器端精准开启与之对应的端口，以确保容器化应用能够与外部网络进行顺畅通信，充分发挥其功能与服务，保障业务流程的正常运转与数据交互的无缝对接。

- 使用ufw：```ufw allow 80```
- 使用云服务：前往云服务商处设置

## 数据文件夹

> 依照Compose文件里的```volumes```配置详情，于指定工作目录之中精准创建对应的文件及文件夹，从而为容器内数据的持久化存储与共享构建稳固基础，有力保障容器化应用运行时数据的完整性与可用性。

Docker compose在启动时会自动创建数据文件夹，并将数据存储在其中，但是，如果有相关的配置文件，可能需要手动进行配置。