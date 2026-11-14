import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { dirname, extname, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../.output/public')
const port = Number(process.env.PORT || 4174)
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2' }

try { await stat(resolve(root, 'index.html')) } catch {
  console.error('Сначала выполните npm run generate.')
  process.exit(1)
}
const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method || '')) { response.writeHead(405); response.end(); return }
  try {
    const pathname = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname)
    let file = resolve(root, `.${pathname}`)
    if (file !== root && !file.startsWith(root + sep)) { response.writeHead(403); response.end(); return }
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html')
    const content = await readFile(file)
    response.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream', 'Content-Length': content.length, 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-cache' })
    response.end(request.method === 'HEAD' ? undefined : content)
  } catch { response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); response.end('Страница не найдена') }
})
server.listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}`))
server.on('error', error => { console.error(error.message); process.exit(1) })
process.on('SIGINT', () => server.close(() => process.exit(0)))
