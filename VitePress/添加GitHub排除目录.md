---
lastUpdated: 2024-6-26T22:17:00+8:00
---

# 添加GitHub排除目录 | VitePress建站教程

1. 回到文件夹根目录
2. 新建文件```.gitignore```
3. 输入下面的内容

::: info 检查目录
如果```.vitepress/```在```doc```目录中，请修改内容为```doc/.vitepress/cache/```
:::

```text
#VitePress的缓存目录
.vitepress/cache/

#VitePress的输出目录
.vitepress/dist/

#Nodejs目录
node_modules/

#编辑器目录
.vscode/
.idea/
```