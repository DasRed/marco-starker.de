import Router from '@koa/router';
import chalk from 'chalk';
import Koa from 'koa';
import compress from 'koa-compress';
import serve from 'koa-static';
import path from 'path';
import execute from '../build/execute.js';

await execute();

const port     = process.env.DASRED_DE_PORT ?? 7770;
const rootPath = process.cwd();
const router   = new Router();
const app      = new Koa();

app.use(compress());

app.use(serve(path.join(rootPath, 'public')))
   .use(serve(path.join(rootPath, '.')))
   .use(router.routes())
   .use(router.allowedMethods());

app.listen(port);
console.log(`dasred.de Server is listing at ${chalk.cyan(`http://localhost:${port}`)}`);
