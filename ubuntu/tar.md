---
lastUpdated: 2024-10-14T22:52:00+8:00
---

# 压缩文件 | Ubuntu

## tar

```bash
# 压缩
tar -czf 名称.tar.gz 目录名/

# 解压缩
tar -xzf 名称.tar.gz
```

### 常用参数

- `c`：压缩
- `x`：解压
- `f`：指定归档文件的名称（必须放在最后）
- `z`：`.tar.gz`或`.tgz`
- `j`：`.tar.bz2`
- `a`：自动选择解压方式

## zip

```bash
# 压缩
zip -r 名称.zip 目录名/

# 解压缩
unzip 名称.zip
```
