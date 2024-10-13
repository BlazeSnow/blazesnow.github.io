---
lastUpdated: 2024-9-16T11:35:00+8:00
---

# 安装vcpkg

> 对于Windows用户，Visual Studio的MSVC（Microsoft Visual C++ 编译器）是C++开发所需的编译器。

## 安装MSVC编译器

1. 前往```Visual Studio```官网：<https://visualstudio.microsoft.com/zh-hans/downloads/>
2. 下载安装包：```VisualStudioSetup.exe```
3. 安装并打开```Visual Studio Installer```
4. 选择```使用C++的桌面开发```负载
5. 前往语言包选项，选择```英语```，避免```MSVC```在```VSCode```中乱码报错
6. 安装

## 安装git

前往```Git相关```：[点击此处跳转](/git/安装Git)

## 安装vcpkg

1. 按下```Windows徽标```+```X```
2. 选择```终端管理员```
3. 前往目标位置，建议放置于磁盘根目录：```cd D:/```
4. 下载vcpkg：```git clone https://github.com/microsoft/vcpkg.git```
5. 打开vcpkg根目录：```cd vcpkg```
6. 运行安装脚本：```./bootstrap-vcpkg.bat```
7. 设置系统环境变量```D:/vcpkg```，参见```Windows相关```：[点击此处跳转](/Windows/设置环境变量)