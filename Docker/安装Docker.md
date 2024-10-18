---
lastUpdated: 2024-10-18T18:50:00+8:00
---

# 安装Docker

> 优先以官方文档为准：<https://docs.docker.com/engine/install/ubuntu/>

## 设置apt中的Docker存储库

1. ```sudo apt-get update```
2. ```sudo apt-get install ca-certificates curl```
3. ```sudo install -m 0755 -d /etc/apt/keyrings```
4. ```sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc```
5. ```sudo chmod a+r /etc/apt/keyrings/docker.asc```
6. 
```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
7. ```sudo apt-get update```

## 安装Docker

```sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin```

## 验证安装

```sudo docker run hello-world```