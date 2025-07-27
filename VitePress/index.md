---
lastUpdated: 2025-07-03T12:38:00+8:00
description: 如何使用VitePress搭建一个静态网站
---

# VitePress建站教程

## 前言

> VitePress，由Vite和Vue驱动的静态站点生成器，将Markdown变成优雅的文档，只需几分钟。
>
> GitHub Pages是GitHub提供的一个网页寄存服务，于2008年推出。可以用于存放静态网页，包括博客、项目文档甚至整本书。一般GitHub Pages的网站使用github.io的子域名，但是用户也可以使用第三方域名。

本章介绍使用`VitePress`和`GitHub Pages`建立一个网站

`VitePress`官方网站：<https://vitepress.dev/zh/>

> [!TIP]
> 本章需要准备一个GitHub账户：<https://github.com/signup>

## 安装环境

### 安装Git

1. 打开网站：<https://git-scm.com/downloads/>
2. 下载并安装
3. 按下`Windows徽标`+`X`
4. 选择`终端`
5. 输入`git -v`
6. 若正常显示版本号则安装成功

### 安装Nodejs

1. 打开官方网站：<https://nodejs.org/zh-cn>
2. 下载并安装
3. 按下`Windows徽标`+`I`
4. 搜索：`Powershel`
5. 打开：`允许本地PowerShell脚本在不签名的情况下运行`
6. 开启开关：`更改执行策略，以允许本地PowerShell脚本在未签名的情况下运行。远程脚本需要签名。`
7. 按下`Windows徽标`+`X`
8. 点击弹出窗口中的`终端`
9. 输入：`node -v`
10. 如果正常显示版本号则成功，如果不正常就重新安装
11. 输入：`npm -v`
12. 如果正常显示版本号则成功，如果不正常就重新安装

### 安装VitePress

1. 创建并进入工作目录，如`C:\用户名.github.io`
2. 右键空白位置，选择`在终端中打开`
3. 建立Git仓库：`git init`
4. npm换源：`npm config set registry https://registry.npmmirror.com`
5. 安装VitePress：`npm add -D vitepress`

## 运行向导

1. 输入`npx vitepress init`
2. 大致流程如下：

```ansi{7,10}
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./
│
◇  Site title:
│  此处填写网页名称
│
◇  Site description:
│  此处填写网页简介
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
└  Done! Now run npm run docs:dev and start writing.
```

## 运行网站

1. 输入`npm run docs:dev`
2. 随后点击输出内容的`http://localhost:5173`访问网站
3. 访问结束后，回到`终端`
4. 按下`Ctrl`+`C`结束网站

## 配置文件

1. 回到文件夹根目录
2. 新建以下文件或文件夹：

```ansi
│ .gitignore               # GitHub忽略文件
│
└─.github
   └─workflows
      └─GitHubPages.yaml   # GitHub Actions文件
```

### `.gitignore`

```txt
# VitePress的dev文件夹
.vitepress/cache/

# VitePress的build文件夹
.vitepress/dist/

# npm文件夹
node_modules/
```

### `GitHubPages.yml`

<<< @/.github/workflows/GitHubPages.yml

## 检查文件

```ansi
│  .gitignore                 # GitHub忽略文件
│  api-examples.md            # markdown文件->api-examples.html
│  index.md                   # markdown文件->首页
│  markdown-examples.md       # markdown文件->markdown-examples.html
│  package-lock.json          # npm配置文件
│  package.json               # npm配置文件
│
├─.github
│  └─workflows
│     └─GitHubPages.yml       # GitHub Actions文件
│
├─.vitepress                  # Vitepress配置文件夹
│  │  config.mts              # Vitepress配置文件
│  │
│  └─cache                    # Vitepress的dev文件夹
└─node_modules                # npm文件夹
```

## 发布网站

1. 新建GitHub仓库：<https://github.com/new>
2. 仓库名称为：`用户名.github.io`
3. 进入仓库设置
4. 侧边栏选择`Pages`
5. 找到`Build and deployment`的`Source`
6. 从`Deploy from a branch`修改为`GitHub Actions`
7. 前往工作目录并打开终端命令行
8. 添加远程仓库：`git remote add origin https://github.com/用户名/用户名.github.io`
9. 检测本地的远程仓库配置：`git remote -v`
10. 推送代码，建议使用图形化软件GitHub Desktop：<https://github.com/apps/desktop>
11. 将工作目录`C:\用户名.github.io`使用`add existing repository`添加到`GitHub Desktop`中
12. 推送仓库，并等待GitHub Actions运行完毕
13. 访问`https://用户名.github.io`即可

## 进阶操作

- 编辑更多的网站信息，前往官方网站：<https://vitepress.dev/zh/>
- 将网站部署至服务器：[部署网站至服务器](/WebsiteToServer/)
