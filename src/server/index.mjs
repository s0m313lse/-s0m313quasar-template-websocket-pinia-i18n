import chalk from 'chalk'
import express from 'express'
import history from 'connect-history-api-fallback'
import serveStatic from 'serve-static'
import path from 'path';
import {fileURLToPath} from 'url';

import socket from './socket.mjs'

const basename = path.basename(fileURLToPath(import.meta.url));
console.log('basename is: ' + basename)
const __dirname = path.dirname(basename)
console.log('directory-name 👉️', __dirname);


const port = process.env.PORT || 8080

const app = express()
socket()
try{
  app.use(history())
  app.use(serveStatic(__dirname + '/dist/spa'))
  app.listen(port)
  console.log(chalk.yellow('express server listening on port: ' + port))
}

catch (error) {
  console.error(chalk.red('express server failed to mount'))
  console.error(error)
}
