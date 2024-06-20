---
lastUpdated: '2024-6-20 11:48'
---

# npm后缀

## -g

```-g```或```--global```代表全局，此时npm会对全局包进行管理

::: info 全局包位置
```%AppData%\Roaming\npm\node_modules```
:::

## -D

```-D```或```--dev```代表开发环境，此时npm会将包标记为用于开发环境

## -S

```-S```或```--save```代表包是项目运行时所必需的

::: info ```npm add```
```npm add``` ```<name>```相当于执行```npm install -S``` ```<name>```
:::