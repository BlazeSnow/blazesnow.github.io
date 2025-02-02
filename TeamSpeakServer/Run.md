---
lastUpdated: 2024-9-24T15:37:00+8:00
---

# 开始运行 | 搭建TeamSpeak服务器

## 试运行

1. 打开目录：```cd /var/ts```
2. 试运行：```./ts3server_startscript.sh start```
3. 终端输出内容应当报错：TeamSpeak 3 server could not start，并要求同意条款

## 同意条款

1. 新建同意条款文件：```touch .ts3server_license_accepted```

## 运行

1. 打开运行脚本：```./ts3server_startscript.sh start```

## 记录TeamSpeak关键内容

运行服务器后，记录终端输出的以下内容：

```txt{5,6,17}
------------------------------------------------------------------
                      I M P O R T A N T
------------------------------------------------------------------
               Server Query Admin Account created
         loginname= "此处为管理员", password= "此处为密码"
         apikey= "此处为开发用API"
------------------------------------------------------------------


------------------------------------------------------------------
                      I M P O R T A N T
------------------------------------------------------------------
      ServerAdmin privilege key created, please use it to gain
      serveradmin rights for your virtualserver. please
      also check the doc/privilegekey_guide.txt for details.

       token=此处为管理员身份密钥
------------------------------------------------------------------
```

## 使用TeamSpeak客户端连接服务器

1. 使用客户端连接，```服务器别名或地址```处填写服务器ip地址
2. 输入管理员身份密钥token，成为服务器管理员