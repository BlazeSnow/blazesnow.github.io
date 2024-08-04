---
lastUpdated: 2024-8-4T12:52:00+8:00
---

# 运行Docker

## 安装Docker

- 较旧版本：```sudo apt install docker.io```
- 推荐使用：```sudo apt install docker-ce```

## 启动Docker

- 立即启动：```sudo systemctl start docker```
- 开机自启动：```sudo systemctl enable docker```

## 查看Docker状态

```sudo systemctl status docker```

## 查看Docker版本号

```docker version```

## 停止Docker

- 停止：```sudo systemctl stop docker```
- 关闭自启动：```sudo systemctl disable docker```