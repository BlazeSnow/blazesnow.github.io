---
lastUpdated: 2025-02-17T10:23:00+8:00
---

# Clang

## 前言

> Clang（发音为/ˈklæŋ/类似英文单字clang） 是一个C、C++、Objective-C和Objective-C++编程语言的编译器前端。它采用了LLVM作为其后端，由LLVM2.6开始，一起发布新版本。它的目标是提供一个GNU编译器套装（GCC）的替代品，支持了GNU编译器大多数的编译设置以及非官方语言的扩展。作者是克里斯·拉特纳（Chris Lattner），在苹果公司的赞助支持下进行开发，而源代码许可是使用类BSD的伊利诺伊大学厄巴纳-香槟分校开源码许可。

官方网站：<https://clang.llvm.org/>

本章主要介绍```Windows```系统的```Clang```，并完成```HelloWorld```程序的编译和发行，C编译器采用```MSVC```，代码编辑器采用```Visual Studio Code```

## 安装环境

### 安装Clang

1. 打开Clang的GitHub下载界面：<https://github.com/llvm/llvm-project/releases>
2. 下载```clang+llvm-版本号-x86_64-pc-windows-msvc.tar.xz```
3. 解压缩至```C:\```目录下，最终路径如：```C:\clang+llvm-版本号-x86_64-pc-windows-msvc```
4. 按下```Windows徽标```+```R```
5. 输入并回车：```SystemPropertiesAdvanced```
6. 点击```环境变量```
7. 在下方的```系统变量```中双击```Path```
8. 点击```新建```
9. 输入```C:\clang+llvm-版本号-x86_64-pc-windows-msvc\bin```
10. 保存并关闭
11. 按下```Windows徽标```+```X```
12. 选择```终端```
13. 输入并回车：```clang++.exe --version```
14. 若显示以下内容则安装成功

```ansi
clang version 版本号
Target: x86_64-pc-windows-msvc
Thread model: posix
InstalledDir: C:\clang+llvm-版本号-x86_64-pc-windows-msvc\bin
```

### 安装MSVC

1. 前往官网：<https://visualstudio.microsoft.com/zh-hans/downloads/>
2. 下载社区版本并安装
3. 打开```Visual Studio Installer```
4. 选择```使用C++的桌面开发```负载
5. 前往语言包选项，选择```英语```，避免乱码
6. 安装

### 安装Visual Studio Code

1. 前往官网：<https://code.visualstudio.com>
2. 下载并安装
3. 安装插件：<https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd>

## 编写HelloWorld程序

1. 安装步骤完成后，建议重新启动计算机
2. 创建一个空的工作目录，如：```C:\HelloWorld```
3. 使用```Visual Studio Code```打开该目录
4. 新建文件```main.cpp```

### ```main.cpp```

```cpp
#include <cstdlib>
#include <iostream>

int main() {
  std::cout << "Hello World!" << std::endl;
  system("pause");
  return 0;
}
```

## 准备脚本

1. 新建文件```run.cmd```、```build.cmd```和```release.cmd```

### ```run.cmd```

```powershell
.\HelloWorld.exe
```

### ```build.cmd```

```powershell
clang++.exe -std=c++20 main.cpp -o HelloWorld.exe
```

### ```release.cmd```

```powershell
clang++.exe -O2 -DNDEBUG -std=c++20 main.cpp -o HelloWorld.exe
```

## 编译与运行

1. 在```Visual Studio Code```的顶栏中点击```查看```
2. 点击```终端```
3. 输入并回车，编译程序：```.\build.cmd```
4. 运行程序：```.\run.cmd```
5. 显示以下内容时成功：

```ansi
PS C:\HelloWorld> .\build.cmd

C:\HelloWorld>clang++.exe -std=c++20 main.cpp -o HelloWorld.exe

PS C:\HelloWorld> .\run.cmd

C:\HelloWorld>.\HelloWorld.exe
Hello World!
请按任意键继续. . .
```

## 发行程序

1. 输入并回车，发行程序：```.\release.cmd```
2. 显示以下内容时成功，此时可以分发```HelloWorld.exe```：

```ansi
PS C:\HelloWorld> .\release.cmd

C:\HelloWorld>clang++.exe -O2 -DNDEBUG -std=c++20 main.cpp -o HelloWorld.exe
```
