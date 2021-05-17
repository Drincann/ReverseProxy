import http from 'http'
import config from './config.json'
import { getProxyMap } from './util/getProxyMap'
import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer({})
const mapping: Map<string, string> = getProxyMap(config)

http.createServer(async (req, res) => {
  const hostname = req.headers.host
  if (hostname && mapping.has(hostname)) {
    proxy.web(req, res, { target: mapping.get(hostname) }, err => {
      if (err) {
        console.log(err)
      }
    })
  }
}).listen(config.servicePort)