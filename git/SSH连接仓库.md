---
lastUpdated: 2024-8-9T14:25:00+8:00
---

# SSH连接仓库 | Git相关

## 获取SSH公钥

1. 输入：```ssh-keygen -t rsa -b 4096 -C "邮箱"```
2. 选择密钥文件保存位置（留空：默认）
3. 设置密码（留空：无密码）

## 上传SSH公钥到GitHub

1. 打开密钥文件保存位置，Linux默认为：```/root/.ssh```
2. 找到```id_rsa.pub```
3. 复制其所有内容
4. 打开GitHub的SSH设置页面：<https://github.com/settings/keys>
5. 新建一个```SSH key```并填入内容

## 检测公钥是否生效

1. 输入：```ssh -T git@github.com```
2. 若输出：```Hi 用户名! You've successfully authenticated, but GitHub does not provide shell access.```，则成功

## 切换本地仓库为SSH连接

1. 获取仓库SSH链接，如：```git@github.com:用户名/example.git```
2. 前往本地仓库
3. 输入：```git remote set-url origin git@github.com:用户名/example.git```