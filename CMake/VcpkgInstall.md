---
lastUpdated: 2024-9-16T11:35:00+8:00
---

# vcpkg添加库 | CMake

> 此篇以```fmt```库作为示例：<https://github.com/fmtlib/fmt>

## 安装库

1. 按下```Windows徽标```+```X```
2. 选择```终端管理员```
3. 安装fmt：```vcpkg install fmt```

## 修改VSCode配置

### 引入vcpkg目录

1. 在项目根目录新建文件夹```.vscode```
2. 新建文件```settings.json```
3. 加入以下内容：

#### ```settings.json```

```json
{
    "cmake.configureArgs": [
        "-DCMAKE_TOOLCHAIN_FILE=D:/vcpkg/scripts/buildsystems/vcpkg.cmake"
    ]
}
```

### 修改项目的```CMakeLists.txt```

```cmake{11,17}
# 设置CMake的最低版本要求
cmake_minimum_required(VERSION 3.29)

# 设置项目名称
project(项目名称)

# 设置C++标准
set(CMAKE_CXX_STANDARD 23)

# 查找fmt库
find_package(fmt CONFIG REQUIRED)

# 添加可执行文件
add_executable(项目名称 main.cpp)

# 链接fmt库
target_link_libraries(test PRIVATE fmt::fmt)
```

### 修改编译器为MSVC

1. 在VSCode的左侧边栏中找到CMake
2. ```配置```->```切换工具包```
3. 切换为```MSVC```编译器：```Visual Studio Community 2022 Release - amd64```
4. 删除build目录：```rm -r build```
5. 重新生成build