---
lastUpdated: 2024-11-24T12:51:00+8:00
---

# 自动化脚本 | Ubuntu相关

> 本文针对当前登陆用户的自动化脚本

## 查看自动化脚本

```crontab -l```

## 编辑自动化脚本

```crontab -e```

## 自动化脚本规则

| 分钟  | 小时  |  日   |  月   | 星期几 |             命令              |
| :---: | :---: | :---: | :---: | :----: | :---------------------------: |
|   0   |   2   |   *   |   *   |  mon   | ```cd /var && ./autoapt.sh``` |

## 自动化脚本举例

```sh
# 每天2点更新apt
0 2 * * * apt update && apt full-upgrade -y

# 每小时21分git pull并写入log文件
21 * * * * cd /var/example && /usr/bin/git pull origin main >>/var/auto.log 2>&1

# 每小时23分执行example.sh并写入log文件
23 * * * * cd /var/example && ./example.sh >>/var/auto.log 2>&1

# 每周一0时0分转移log并清空log文件
0 0 * * mon cp /var/auto.log /var/auto.log.$(date +\%Y-\%m-\%d) && /usr/bin/truncate -s 0 /var/auto.log
```