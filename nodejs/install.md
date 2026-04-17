---
lastUpdated: 2026-03-16T14:08:00+8:00
---

# 安装Nodejs | Nodejs

1. 按下`Windows徽标`+`X`
2. 点击弹出窗口中的`终端管理员`
3. 输入并回车：

```shell
winget.exe install --id "OpenJS.NodeJS.LTS" --exact
```

## 修改PowerShell执行策略

```shell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

## 检查安装是否成功

```shell
node -v
npm -v
```

## 卸载Nodejs

```shell
winget.exe uninstall --id "OpenJS.NodeJS.LTS" --exact

Set-ExecutionPolicy Undefined -Scope CurrentUser -Force
Set-ExecutionPolicy Undefined -Scope LocalMachine -Force
Get-ExecutionPolicy -List
```
