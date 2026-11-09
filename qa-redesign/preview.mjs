import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.svg':'image/svg+xml','.ttf':'font/ttf','.txt':'text/plain; charset=utf-8'};
http.createServer(async (request, response) => {
  try {
    const requested = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const resource = requested === '/' ? '/index.html' : requested;
    if (!['/index.html','/styles.css','/app.js'].includes(resource) && !resource.startsWith('/assets/')) {response.writeHead(404);response.end();return;}
    const target = path.resolve(root, '.' + resource);
    if (!target.startsWith(root + path.sep)) {response.writeHead(403);response.end();return;}
    const content = await readFile(target);
    response.writeHead(200, {'Content-Type':mime[path.extname(target)] || 'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    response.end(content);
  } catch {response.writeHead(404);response.end();}
}).listen(4173, '127.0.0.1', () => console.log('DuoMais: http://127.0.0.1:4173/'));
