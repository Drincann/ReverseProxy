# 正向/反向代理服务器

## 构建

  ```shell
  npm run build
  ```

## 使用

- 配置 `./src/config`

  ```ts
  export interface ProxyConfig {
    // 服务端口
    servicePort: number;
    // 映射关系
    mapping: { host: string; target: string }[]
  }
  ```

- 运行

  运行 ts

  ```shell
  npm run ts-start
  ```

  或运行构建的 js

  ```shell
  npm run start
  ```
