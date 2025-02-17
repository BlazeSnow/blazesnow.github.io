---
lastUpdated: 2024-11-8T21:59:00+8:00
---

# Docker换源 | Docker

## Docker信息

```docker info```

## Docker换源

1. 转到```/etc/docker```目录：```cd /etc/docker```
2. 新建配置文件：```touch daemon.json```
3. 编辑配置文件：```nano daemon.json```
4. 检验配置文件：```sudo systemctl daemon-reload```
5. 重启docker：```sudo systemctl restart docker```

### ```daemon.json```

```json
{
    "registry-mirrors": ["镜像源地址"]
}
```

## 镜像源获取地址推荐

- 阿里云镜像加速器：<https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors>
- 华为云镜像加速器：<https://console.huaweicloud.com/swr/#/swr/dashboard>