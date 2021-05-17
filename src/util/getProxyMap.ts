export interface ProxyConfig {
  servicePort: number;
  mapping: { host: string; target: string }[]
}

export function getProxyMap(config: ProxyConfig): Map<string, string> {
  return config.mapping.reduce(
    (map, value) => map.set(value.host, value.target),
    new Map<string, string>()
  )
}