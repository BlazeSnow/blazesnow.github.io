---
lastUpdated: 2025-01-03T17:24:00+8:00
---

# 安装C++运行库 | Windows

> Visual C++可再发行程序包安装Microsoft C和C++（MSVC）运行时库。
> 许多使用Microsoft C和C++工具生成的应用程序都需要这些库。
> 如果你的应用使用这些库，则必须在安装该应用之前在目标系统上安装Microsoft Visual C++可再发行程序包。
> 可再发行程序包体系结构必须与应用的目标体系结构相匹配。
> 可再发行程序包版本必须至少与用于生成应用的MSVC生成工具集一样新。

官方网站：<https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist>

## 64位

```bash
winget install Microsoft.VCRedist.2015+.x64
winget install Microsoft.VCRedist.2013.x64
winget install Microsoft.VCRedist.2012.x64
winget install Microsoft.VCRedist.2010.x64
winget install Microsoft.VCRedist.2008.x64
winget install Microsoft.VCRedist.2005.x64
```

## 32位

```bash
winget install Microsoft.VCRedist.2015+.x86
winget install Microsoft.VCRedist.2013.x86
winget install Microsoft.VCRedist.2012.x86
winget install Microsoft.VCRedist.2010.x86
winget install Microsoft.VCRedist.2008.x86
winget install Microsoft.VCRedist.2005.x86
```

## ARM

```bash
winget install Microsoft.VCRedist.2022.arm64
winget install Microsoft.VCRedist.2015+.arm64
```