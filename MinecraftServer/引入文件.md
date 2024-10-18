---
lastUpdated: 2024-8-11T17:26:00+8:00
---


# 引入文件 | 搭建我的世界服务器

1. 打开我的世界服务器官网：<https://www.minecraft.net/zh-hans/download/server>
2. 找到```Download minecraft_server.版本号.jar```
3. 右键单击下载按钮，复制链接
4. 在Ubuntu服务器中，使用管理员账户
5. 前往var目录：```cd /var```
6. 新建mc文件夹：```mkdir mc```
7. 进入mc目录：```cd mc```
8. 下载服务端jar：```wget 链接```
9. 新建运行脚本：```touch run.sh```
10. 运行脚本提权：```chmod 700 run.sh```
11. 编辑运行脚本：```nano run.sh```

## run.sh

```sh
java -Xmx1024M -Xms1024M -jar server.jar nogui
```