import chalk from 'chalk'
import { WebSocketServer } from 'ws'
import socketController from './socketController.mjs'

export default function () {
  try {
    const wss = new WebSocketServer({ port: 3000 })
    console.log(chalk.green('socket  server listening on port: 3000'))
    wss.on('connection', function connection(ws, _request, client) {
      console.log(chalk.blue.bold('Connection established'))
      ws.on('message', function message(data) {
        console.log(`Received message ${data} from user ${client}`)
        const msg = parse(data)
        wss.clients.forEach(function each(client) {
          // if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(socketController(msg)))
          // }
        })
      })
    })
  }
  
  catch {
    console.error(chalk.red('socket server failed to mount'))
    console.error(error)  }
}


function parse (data) {
  try {
    return JSON.parse(data)
  }
  catch {
    console.error('SocketServer message failed JSON parse')
  }
}
