# MessagesEncrypter Message Format v1

本文档记录 MessagesEncrypter 的标准 Base64 JSON 密文包格式。

本文档为 `ver = 1` 的正式格式定义。同一 `ver` 的字段语义应保持兼容。

`ver = 1` 仅定义 RSA 消息加密格式。

## 外层编码

密文包面向复制和粘贴传输，外层使用 Base64 编码。

解码流程：

1. 对用户输入进行 `Trim()`。
2. 按 Base64 解码得到 UTF-8 JSON。
3. 按本文档定义解析 JSON 字段。

## JSON 结构

字段名使用小写短字段，减少复制传输体积。

```json
{
  "ver": 1,
  "ek": "<base64>",
  "nonce": "<base64>",
  "tag": "<base64>",
  "ct": "<base64>"
}
```

## 公共字段

| 字段 | 类型 | 必需 | 说明 |
| --- | --- | --- | --- |
| `ver` | number | 是 | 消息格式版本。当前固定为 `1`。 |
| `ek` | string | 是 | 被封装的 AES-256-GCM 会话密钥。 |
| `nonce` | string | 是 | AES-GCM nonce，Base64 编码，原始长度 12 字节。 |
| `tag` | string | 是 | AES-GCM authentication tag，Base64 编码，原始长度 16 字节。 |
| `ct` | string | 是 | AES-GCM ciphertext，Base64 编码。 |

## 算法

- 使用接收方 RSA 公钥通过 OAEP-SHA256 封装随机生成的 AES-256-GCM 会话密钥。
- 使用 AES-256-GCM 加密 UTF-8 明文。

字段约束：

| 字段 | 说明 |
| --- | --- |
| `ek` | 必须存在。内容为 RSA-OAEP-SHA256 加密后的 32 字节 AES 会话密钥，Base64 编码。 |

## AES-GCM

所有算法最终都使用 AES-256-GCM 加密正文。

| 参数 | 值 |
| --- | --- |
| Key length | 32 bytes |
| Nonce length | 12 bytes |
| Tag length | 16 bytes |
| Plaintext encoding | UTF-8 |
| AAD | 无 |

`ver = 1` 暂不启用 AAD。`ver`、`ek`、`nonce` 等字段被篡改时，通常会在字段校验、RSA-OAEP 解封装或 AES-GCM 认证阶段失败。

## 示例

### RSA

```json
{
  "ver": 1,
  "ek": "BASE64_RSA_ENCRYPTED_AES_KEY",
  "nonce": "BASE64_12_BYTE_NONCE",
  "tag": "BASE64_16_BYTE_TAG",
  "ct": "BASE64_CIPHERTEXT"
}
```

## 解密校验要求

解密时必须进行以下校验：

1. `ver` 必须等于 `1`。
2. 密文包必须提供 `ek`、`nonce`、`tag`、`ct`。
3. `ek`、`nonce`、`tag`、`ct` 必须是合法 Base64。
4. `nonce` 解码后必须为 12 字节。
5. `tag` 解码后必须为 16 字节。
6. 未知字段应忽略，不应导致解密失败。
7. AES-GCM 认证失败时，必须统一视为解密失败。

## 修订记录

| 日期 | 版本 | 说明 |
| --- | --- | --- |
| 2026-05-31 | v1 final | 定稿 RSA Base64 JSON 结构。 |
