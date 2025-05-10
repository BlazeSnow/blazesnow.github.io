---
lastUpdated: 2025-04-04T23:03:00+8:00
---

# 安装.NET | Windows

> .NET是一个免费的、跨平台的、开源开发人员平台，用于构建许多不同类型的应用程序。

官方网站：<https://dotnet.microsoft.com/zh-cn/download/dotnet>

## .NET桌面运行时

> .NET桌面运行时（```DesktopRuntime```）使用户能够运行现有Windows桌面应用程序（包括```Runtime```）

```powershell
winget install Microsoft.DotNet.DesktopRuntime.9
winget install Microsoft.DotNet.DesktopRuntime.8
winget install Microsoft.DotNet.DesktopRuntime.7
winget install Microsoft.DotNet.DesktopRuntime.6
winget install Microsoft.DotNet.DesktopRuntime.5
winget install Microsoft.DotNet.DesktopRuntime.3_1
```

## ASP.NET核心运行时

> ASP.NET核心运行时（```AspNetCore```）使你能够运行现有的Web/服务器应用程序（不包括```Runtime```）

```powershell
winget install Microsoft.DotNet.AspNetCore.9
winget install Microsoft.DotNet.AspNetCore.8
winget install Microsoft.DotNet.AspNetCore.7
winget install Microsoft.DotNet.AspNetCore.6
winget install Microsoft.DotNet.AspNetCore.5
winget install Microsoft.DotNet.AspNetCore.3_1
winget install Microsoft.DotNet.AspNetCore.3_0
winget install Microsoft.DotNet.AspNetCore.2_2_402
winget install Microsoft.DotNet.AspNetCore.2_2
winget install Microsoft.DotNet.AspNetCore.2_1
```

## .NET运行时

> .NET运行时（```Runtime```）仅包含运行控制台应用所需的组件

```powershell
winget install Microsoft.DotNet.Runtime.9
winget install Microsoft.DotNet.Runtime.8
winget install Microsoft.DotNet.Runtime.7
winget install Microsoft.DotNet.Runtime.6
winget install Microsoft.DotNet.Runtime.5
winget install Microsoft.DotNet.Runtime.3_1
```

## 软件开发工具包

> 软件开发工具包（```SDK```）包括使用命令行工具和任何编辑器生成和运行.NET应用程序所需的一切内容（包括```DesktopRuntime```、```AspNetCore```和```Runtime```）

```powershell
winget install Microsoft.DotNet.SDK.9
winget install Microsoft.DotNet.SDK.8
winget install Microsoft.DotNet.SDK.7
winget install Microsoft.DotNet.SDK.6
winget install Microsoft.DotNet.SDK.5
winget install Microsoft.DotNet.SDK.3_1
```
