---
title: 自动化脚本 | Ubuntu
lastUpdated: 2025-08-06T14:26:00+8:00
description: 使用crontab在Ubuntu中设置定时任务和自动化脚本的方法。
---

# <TitleIcon icon="ubuntu" /> 自动化脚本

> 本文针对当前登陆用户的自动化脚本

## 查看自动化脚本

```bash
crontab -l
```

## 编辑自动化脚本

```bash
crontab -e
```

## 自动化脚本举例

```shell
0 2 * * * /bin/sh /srv/autoapt.sh
```

## 自动化脚本规则

| 分钟  | 小时  |  日   |  月   | 星期几 |           命令            |
| :---: | :---: | :---: | :---: | :----: | :-----------------------: |
|   0   |   2   |   *   |   *   |   *    | `/bin/sh /srv/autoapt.sh` |
