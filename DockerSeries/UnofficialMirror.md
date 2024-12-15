---
lastUpdated: 2024-12-15T17:34:00+8:00
---

# 非官方镜像 | Docker系列

> 该项目使用了```tech-shrimp/docker_image_pusher```
>
> 来源：<https://github.com/tech-shrimp/docker_image_pusher>

## 镜像地址

私人的命名空间：```registry.cn-hangzhou.aliyuncs.com/blazesnow/```

## 检测连通性

```docker run registry.cn-hangzhou.aliyuncs.com/blazesnow/hello-world```

输出以下内容时，连通性正常：

```txt
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

## 目前可用的镜像

- registry.cn-hangzhou.aliyuncs.com/blazesnow/hello-world
- registry.cn-hangzhou.aliyuncs.com/blazesnow/vsftpd
- registry.cn-hangzhou.aliyuncs.com/blazesnow/sftp
- registry.cn-hangzhou.aliyuncs.com/blazesnow/webdav
- registry.cn-hangzhou.aliyuncs.com/blazesnow/samba
- registry.cn-hangzhou.aliyuncs.com/blazesnow/alist
- registry.cn-hangzhou.aliyuncs.com/blazesnow/nfs-server-alpine
- registry.cn-hangzhou.aliyuncs.com/blazesnow/minecraft-server
- registry.cn-hangzhou.aliyuncs.com/blazesnow/adguardhome
- registry.cn-hangzhou.aliyuncs.com/blazesnow/vaultwarden_server
- registry.cn-hangzhou.aliyuncs.com/blazesnow/filecodebox