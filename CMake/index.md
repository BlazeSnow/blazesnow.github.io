---
lastUpdated: 2025-02-13T11:33:00+8:00
---

# 前言 | CMake相关

> CMake是一个开源的跨平台自动化建构系统，用来管理软件建置的程序，并不依赖于某特定编译器，并可支持多层目录、多个应用程序与多个函数库。 它用配置文件控制建构过程（build process）的方式和Unix的make相似，只是CMake的配置文件取名为CMakeLists.txt。CMake并不直接建构出最终的软件，而是产生标准的建构档（如Unix的Makefile或Windows Visual C++的projects/workspaces），然后再依一般的建构方式使用。这使得熟悉某个集成开发环境（IDE）的开发者可以用标准的方式建构他的软件，这种可以使用各平台的原生建构系统的能力是CMake和SCons等其他类似系统的区别之处。 CMake配置文件（CMakeLists.txt）可设置源代码或目标程序库的路径、产生适配器（wrapper）、还可以用任意的顺序建构可执行文件。CMake支持in-place建构（二进档和源代码在同一个目录树中）和out-of-place建构（二进档在别的目录里），因此可以很容易从同一个源代码目录树中建构出多个二进档。CMake也支持静态与动态程序库的建构。
>
> “CMake”这个名字是“Cross platform Make”的缩写。虽然名字中含有“make”，但是CMake和Unix上常见的make系统是分开的，而且更为高阶。它可与原生建置环境结合使用，例如：make、ninja、苹果公司的Xcode与微软的Microsoft Visual Studio。

官方网站：<https://cmake.org/>

本章主要介绍```Windows```系统的```CMake```，C编译器采用```MinGW-w64```，部分场景需使用```MSVC```，代码编辑器采用```VScode```
