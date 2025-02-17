---
lastUpdated: 2025-02-16T12:55:00+8:00
---

# 安装环境 | CMake

## 安装MinGW-w64

1. 打开GitHub链接：<https://github.com/niXman/mingw-builds-binaries/releases>
2. 选择适合的版本，建议选择```x86_64-版本号-release-win32-seh-ucrt```
3. 下载并解压缩到```C:\```
4. 路径应为```C:\mingw64```
5. 设置系统环境变量```C:\mingw64\bin```，参见[设置环境变量](/Windows/EnvironmentVariables)
6. 按下```Windows徽标```+```X```
7. 点击```终端```
8. 输入```gcc -v```
9. 若显示版本号则安装成功

### MinGW-w64版本说明

- ```x86_64```：64位系统
- ```i686```：32位系统
- ```mcf```：特定编译器或编译环境的一种自定义配置选项
- ```posix```：可移植性和跨平台兼容性
- ```win32```：针对Windows操作系统进行了优化和定制
- ```msvcrt```：较旧的Microsoft Visual C++运行时库
- ```ucrt```：较新的Windows通用C运行时库

## 安装CMake

1. 打开软件官网：<https://cmake.org>
2. 下载：```Windows x64 Installer```
3. 安装```msi```安装包
4. 按下```Windows徽标```+```X```
5. 点击```终端```
6. 输入```cmake --version```
7. 若显示版本号则安装成功
8. 若未显示版本号，则需添加```CMake```的```bin```目录到系统```path```环境变量

## 安装VScode

1. 打开软件官网：<https://code.visualstudio.com>
2. 下载并安装
3. 安装以下插件：

- <https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans>
- <https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools>
- <https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools>
