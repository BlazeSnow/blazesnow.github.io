---
lastUpdated: 2025-07-08T19:32:00+8:00
---

# 安装C++运行库 | Windows

> Visual C++ 可再发行程序包安装 Microsoft C 和 C++ (MSVC) 运行时库。 许多使用 Microsoft C 和 C++ 工具生成的应用程序都需要这些库。 如果你的应用使用这些库，则必须在安装该应用之前在目标系统上安装 Microsoft Visual C++ 可再发行程序包。

官方网站：<https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist>

## 64位

1. 按下`Windows徽标`+`X`
2. 选中`终端管理员`
3. 输入并回车：

```shell
winget install Microsoft.VCRedist.2015+.x64
winget install Microsoft.VCRedist.2013.x64
winget install Microsoft.VCRedist.2012.x64
winget install Microsoft.VCRedist.2010.x64
winget install Microsoft.VCRedist.2008.x64
winget install Microsoft.VCRedist.2005.x64
```

## 32位

1. 按下`Windows徽标`+`X`
2. 选中`终端管理员`
3. 输入并回车：

```shell
winget install Microsoft.VCRedist.2015+.x86
winget install Microsoft.VCRedist.2013.x86
winget install Microsoft.VCRedist.2012.x86
winget install Microsoft.VCRedist.2010.x86
winget install Microsoft.VCRedist.2008.x86
winget install Microsoft.VCRedist.2005.x86
```

## UWP

1. 按下`Windows徽标`+`X`
2. 选中`终端管理员`
3. 输入并回车：

```shell
winget install Microsoft.VCLibs.Desktop.14
```

## ARM

1. 按下`Windows徽标`+`X`
2. 选中`终端管理员`
3. 输入并回车：

```shell
winget install Microsoft.VCRedist.2015+.arm64
```
