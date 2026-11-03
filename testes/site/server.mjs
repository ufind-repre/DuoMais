import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root = path.resolve(fileURLToPath(new URL('./dist/',import.meta.url)));
const port = Number(process.env.PORT || 4173);
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.ttf':'font/ttf','.woff2':'font/woff2'};
http.createServer(async (request,response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    const target = path.resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
    if(target !== root && !target.startsWith(root + path.sep)) {response.writeHead(403);response.end('Forbidden');return;}
    const body = await readFile(target);
    response.writeHead(200,{'Content-Type':mime[path.extname(target)] || 'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});
    response.end(body);
  } catch {response.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});response.end('Página não encontrada');}
}).listen(port,'127.0.0.1',() => console.log(`DuoMais: http://127.0.0.1:${port}`));
