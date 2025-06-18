---
lastUpdated: 2025-06-18T17:57:00+8:00
description: 在Windows系统中安装C++运行库
---

# 安装C++运行库 | Windows

> Visual C++ 可再发行程序包安装 Microsoft C 和 C++ (MSVC) 运行时库。 许多使用 Microsoft C 和 C++ 工具生成的应用程序都需要这些库。 如果你的应用使用这些库，则必须在安装该应用之前在目标系统上安装 Microsoft Visual C++ 可再发行程序包。 可再发行程序包体系结构必须与应用的目标体系结构相匹配。 可再发行程序包版本必须至少与用于生成应用的 MSVC 生成工具集一样新。

官方网站：<https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist>

## 64位

```powershell
winget install Microsoft.VCRedist.2015+.x64
winget install Microsoft.VCRedist.2013.x64
winget install Microsoft.VCRedist.2012.x64
winget install Microsoft.VCRedist.2010.x64
winget install Microsoft.VCRedist.2008.x64
winget install Microsoft.VCRedist.2005.x64
```

## 32位

```powershell
winget install Microsoft.VCRedist.2015+.x86
winget install Microsoft.VCRedist.2013.x86
winget install Microsoft.VCRedist.2012.x86
winget install Microsoft.VCRedist.2010.x86
winget install Microsoft.VCRedist.2008.x86
winget install Microsoft.VCRedist.2005.x86
```

## UWP

```powershell
winget install Microsoft.VCLibs.Desktop.14
```

## ARM

```powershell
winget install Microsoft.VCRedist.2015+.arm64
```
