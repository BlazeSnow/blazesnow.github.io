# Nodejs相关

> Node.js是一个开源的、跨平台的JavaScript运行环境，
> 它允许开发者在服务器端使用JavaScript来编写高性能的网络应用程序。
> Node.js诞生于2009年，由Ryan Dahl开发，基于Chrome的V8 JavaScript引擎构建。
> 其设计采用了事件驱动、非阻塞I/O模型，这使得它特别适合于构建可扩展的、高并发的实时应用，
> 比如聊天应用、在线游戏、实时数据分析系统等。

## 安装Nodejs

1. 打开官网：<https://nodejs.org>
2. 下载安装程序
3. 根据提示安装
4. 检查安装是否成功
    - 按下```Windows徽标```+```X```
    - 点击弹出窗口中的```终端管理员```
    - 输入：
        ```shell
        node -v
      ```
    - 再输入：
         ```shell
         npm -v
         ```
5. 如果正常显示版本号则成功，如果不正常就重新安装

## NCU

> ncu 是 npm-check-updates 的命令行缩写，它是一个非常实用的npm工具，
> 用于帮助用户检查和管理Node.js项目的依赖包版本。该工具能够扫描项目的 package.json 文件，
> 对比其中列出的所有依赖包当前版本与npm仓库中的最新版本，从而发现哪些包可以被更新。

### 安装

1. 按下```Windows徽标```+```X```
2. 点击弹出窗口中的```终端管理员```
3. 输入：
    ```shell
    npm install -g npm-check-updates
    ```
4. 检查安装是否成功：
    ```shell
    ncu -v
    ```
5. 如果正常显示版本号则成功，如果不正常就重新安装

### 运行

1. 按下```Windows徽标```+```X```
2. 点击弹出窗口中的```终端管理员```
3. 运行ncu检查哪些依赖可以更新：
    ```shell
    ncu
    ```

4. 安装更新：
    ```shell
    npm install
    ```