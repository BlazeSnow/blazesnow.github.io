---
lastUpdated: 2025-02-13T10:02:00+8:00
description: 清除Windows系统中多余的右键菜单项
---

# 删除右键菜单项 | Windows

> [!CAUTION]
> 警告：请勿随意修改注册表，对注册表的随意修改会导致不可预知的问题

## 桌面空白位置右键菜单项

1. 若需要删除的项目属于应用程序`abc`
2. 按下`Windows徽标`+`R`
3. 输入`regedit`并回车
4. 找到`HKEY_CLASSES_ROOT\Directory\Background\shell`
5. 在此文件夹内找到`abc`
6. 删除`abc`文件夹

## 文件夹右键菜单项

1. 若需要删除的项目属于应用程序`abc`
2. 按下`Windows徽标`+`R`
3. 输入`regedit`并回车
4. 找到`HKEY_CLASSES_ROOT\Directory\shell`
5. 在此文件夹内找到`abc`
6. 删除`abc`文件夹

## 文件右键菜单项

1. 若需要删除的项目属于应用程序`abc`
2. 按下`Windows徽标`+`R`
3. 输入`regedit`并回车
4. 找到`HKEY_CLASSES_ROOT\*\shell`
5. 在此文件夹内找到`abc`
6. 删除`abc`文件夹
7. 找到`HKEY_CLASSES_ROOT\*\shellex\ContextMenuHandlers`
8. 在此文件夹内找到`abc`
9. 删除`abc`文件夹
