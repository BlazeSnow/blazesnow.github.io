---
title: 删除新建文件类型 | Windows
lastUpdated: 2025-02-13T10:00:00+8:00
description: 删除Windows右键新建菜单中不需要的文件类型选项。
---

# <TitleIcon icon="windows" /> 删除新建文件类型

在文件资源管理器中右键新建文件内，有不需要的文件类型。本文以`markdown`文件为例：

> [!CAUTION]
> 警告：请勿随意修改注册表，对注册表的随意修改会导致不可预知的问题

1. 右键空白位置->`新建`->`markdown`文件
2. 记住文件的后缀名`.md`。若不显示后缀名，参见[显示后缀名和隐藏文件](/windows/extension)
3. 按下`Windows徽标`+`R`
4. 输入`regedit`并回车
5. 打开`HKEY_CLASSES_ROOT\.md`
6. 删除文件夹`ShellNew`
7. 重新启动文件资源管理器，参见[重启文件资源管理器](/windows/tskillexplorer)
