---
lastUpdated: 2025-02-08T08:53:00+8:00
description: 对npm的配置文件的介绍
---

# npm配置文件 | Nodejs

> npm配置文件即`.npmrc`，用于配置npm的行为

## 级别

`.npmrc`的级别：项目＞用户＞全局

- 全局级别默认位置：`C:\Program Files\nodejs\node_modules\npm\.npmrc`
- 用户级别默认位置：`C:\Users\%USERNAME%\.npmrc`
- 项目级别默认位置：项目的根目录

## 编辑

1. 不建议编辑全局级别的配置文件，其会随着Nodejs的新版本安装而被覆盖
2. 需要对用户级别的配置文件进行修改时，输入：`npm config edit`
3. 需要对项目进行npm配置时，在项目内新建`.npmrc`文件即可
