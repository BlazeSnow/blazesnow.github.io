---
lastUpdated: 2024-9-15T16:49:00+8:00
---

# vcpkg添加库

> 此篇以fmt_x64-windows库作为示例

## 安装MSVC编译器

1. 前往Visual Studio官网：<https://visualstudio.microsoft.com/zh-hans/downloads/>
2. 下载Visual Studio Installer：```VisualStudioSetup.exe```
3. 安装并打开Visual Studio Installer
4. 选择```使用C++的桌面开发```负载并安装

## 安装git

前往```Git相关```：[点击此处跳转](/Git相关/安装Git)

## 安装vcpkg

1. 按下```Windows徽标```+```X```
2. 选择```终端管理员```
3. 前往放置vcpkg的文件夹内，建议放置于：```cd D:/```
4. 下载vcpkg：```git clone https://github.com/microsoft/vcpkg.git```
5. 打开vcpkg根目录：```cd vcpkg```
6. 运行安装脚本：```./bootstrap-vcpkg.bat```
7. 设置系统环境变量```D:/vcpkg```，参见```Windows相关```：[点击此处跳转](/Windows相关/设置环境变量)

## 安装库

1. 按下```Windows徽标```+```X```
2. 选择```终端管理员```
3. 安装fmt_x64-windows：```vcpkg install fmt:x64-windows```

## 修改项目的```CMakeLists.txt```

```cmake{5,11,14,17,20}
# 设置CMake的最低版本要求
cmake_minimum_required(VERSION 3.29)

# 设置项目名称
project(项目名称)

# 设置C++标准
set(CMAKE_CXX_STANDARD 23)

# 设置fmt的位置
set(fmt_DIR "D:/vcpkg/packages/fmt_x64-windows/share/fmt")

# 查找fmt库
find_package(fmt CONFIG REQUIRED)

# 添加可执行文件
add_executable(项目名称 main.cpp)

# 链接fmt库
target_link_libraries(test PRIVATE fmt::fmt)
```

## 修改项目的编译器

1. 在VSCode的左侧边栏中找到CMake
2. ```配置```->```切换工具包```
3. 切换为```MSVC```编译器：```Visual Studio Community 2022 Release - amd64```
4. 删除build目录：```rm -r build```
5. 重新生成build