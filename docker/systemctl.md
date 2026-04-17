---
lastUpdated: 2024-10-18T18:50:00+8:00
---

# 运行Docker | Docker

## 启动Docker

```bash
# 立即启动
sudo systemctl start docker
# 开机自启动
sudo systemctl enable docker
```

## 查看Docker状态

```bash
sudo systemctl status docker
```

## 查看Docker版本号

```bash
docker version
```

## 停止Docker

```bash
# 停止
sudo systemctl stop docker
# 关闭自启动
sudo systemctl disable docker
```
