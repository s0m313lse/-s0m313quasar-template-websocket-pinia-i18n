import todoController from "./todoController.mjs"

export default function ( data ) {
  console.log('server control switch value is: ' + JSON.stringify(data.code))
  switch(data.code) {
    case 'handshake':
      return init()
      break
    case 'todo':
      return (todoController(data.data))
      break
    default:
      console.error('server socketController switch reached default state')
      break
  }
}

function init() {
  console.log('into init sequence, load data here')
  const data =
    {
      code: 'init_store',
      data: {
        action: 'load_todos',
        payload: {
          todos: 
          [
            {
              completed:false,
              created_at:1655927287975,
              text:'Set autofocus on todo dialogs',
              user:'admin',
              id: 0
            }, {
              completed:false,
              created_at:1655927396516,
              text:'Fix dialog background mask color',
              user:'admin',
              id: 1
            }, {
              completed:false,
              created_at:1655927508848,
              text:'Reactive text sizes in q-selects',
              user:'admin',
              id: 2
            }, {
              completed:false,
              created_at:1655927608848,
              text:'Add user auth with jwt',
              user:'admin',
              id: 3 
            }, {
              completed:false,
              created_at:1655927708848,
              text:'Add websocket heartbeats',
              user:'admin',
              id: 4
            }
          ]
        }

      }
    }
  console.log('server action load todos')
  return data
}