---
title: npm后缀 | Nodejs
lastUpdated: 2025-02-13T09:42:00+8:00
description: npm install命令常用后缀参数（-S/-D/-g等）的详解与使用场景。
---

# <TitleIcon icon="nodedotjs" /> npm后缀

## -g

`-g`或`--global`代表全局，此时npm会对全局包进行管理

> [!NOTE]
> 全局包的安装位置：`%AppData%\Roaming\npm\node_modules`

## -D

`-D`或`--dev`代表开发环境，此时npm会将包标记为用于开发环境

## -S

`-S`或`--save`代表包是项目运行时所必需的

> [!NOTE]
> `npm add <name>`相当于执行`npm install -S <name>`
