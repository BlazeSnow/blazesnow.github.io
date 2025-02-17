---
lastUpdated: 2024-9-16T11:30:00+8:00
---

# 添加配置文件 | CMake

1. 在项目文件夹中添加：```CMakeLists.txt```
2. ```CMake```插件将识别文件并在侧边栏启用```CMake```功能

## ```CMakeLists.txt```

```cmake{5,11}
# 设置CMake的最低版本要求
cmake_minimum_required(VERSION 3.29)

# 设置项目名称
project(项目名称)

# 设置C++标准
set(CMAKE_CXX_STANDARD 23)

# 添加可执行文件
add_executable(项目名称 main.cpp)
```