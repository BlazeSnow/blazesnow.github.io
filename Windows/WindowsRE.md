---
lastUpdated: 2025-08-04T07:54:00+8:00
description: 重新安装Windows系统的教程
---

# 创建恢复分区 | Windows

> 本文适用于恢复分区位于`C:\Recovery\WindowsRE\`或缺失恢复分区的计算机，磁盘需为`GUID分区表(GPT)`。

## 确认恢复分区状态

1. 按下`Windows徽标`+`X`
2. 选择`终端管理员`
3. 键入以下命令，查询恢复分区位置，记录分区号

```shell
reagentc /info
```

可能的输出结果，此时恢复分区位于磁盘0的分区3

```ansi
Windows RE 位置: \\?\GLOBALROOT\device\harddisk0\partition3\Recovery\WindowsRE
```

## 创建新的恢复分区

> 提前准备一个`NTFS`格式的分区，分区位置在`C盘`后，大小约为`1024MB`

1. 按下`Windows徽标`+`X`
2. 选择`终端管理员`
3. 键入以下命令：

```shell{14}
# 使用diskpart
diskpart

# 列出磁盘
list disk

# 选择磁盘0
select disk 0

# 列出分区状态
list partition

# 选择用作恢复分区的分区，如分区4
select partition 4

# 设置Windows恢复分区专用id
set id=de94bba4-06d1-4d40-a16a-bfd50179d6ac

# 设置分区为必需并隐藏
gpt attributes=0x8000000000000001

# 为分区临时分配盘符R
assign letter=R
```

## 获取恢复分区文件

> 此步骤用于获取文件`Winre.wim`，并存放至`R:\Recovery\WindowsRE\`。可直接从`Windows安装镜像.iso`中提取，一般位置为`Windows.iso\sources\install.wim\1\Recovery\`

1. 按下`Windows徽标`+`X`
2. 选择`终端管理员`
3. 键入以下命令：

```shell
# 在挂载为R盘的恢复分区内创建目录
mkdir R:\Recovery\WindowsRE

# 拷贝Winre.wim至恢复分区
Copy-Item -Path 'C:\Recovery\WindowsRE\Winre.wim' -Destination 'R:\Recovery\WindowsRE\'

# 确认Winre.wim存在
Get-ChildItem -Path "R:\Recovery\WindowsRE" -Force
```

## 启用新的恢复分区

> [!TIP]
> 设置完毕后，返回第一步，检查恢复分区位置，若为磁盘0的分区4则成功

1. 按下`Windows徽标`+`X`
2. 选择`终端管理员`
3. 键入以下命令：

```shell
# 禁用当前恢复分区
reagentc /disable

# 设置恢复分区
reagentc /setreimage /path R:\Recovery\WindowsRE

# 启用新的恢复分区
reagentc /enable
```

## 移除临时盘符

1. 按下`Windows徽标`+`X`
2. 选择`终端管理员`
3. 键入以下命令：

```shell{14}
# 再次使用diskpart
diskpart

# 列出磁盘
list disk

# 选择磁盘0
select disk 0

# 列出分区状态
list partition

# 选择用作恢复分区的分区，如分区4
select partition 4

# 移除此前设置的临时盘符
remove letter=R
```
