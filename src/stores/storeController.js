import todoController from './todoController'
import { useTodoStore } from './todoStore'
const todoStore = useTodoStore()


export default function ( data ) {
  // console.log('client controller switch value is: ' + JSON.stringify(data.code))
  switch(data.code) {
    case 'init_store':
      return loadTodos(data.data.payload)
      break
    case 'todo':
      return todoController(data.data)
      break
    default:
      console.error('client socketController switch reached default state')
      return {status: 'error', data: 'client socketController switch reached default state'}
      break
  }
}

function loadTodos(data) {
  // console.log('client action load todos')
  // console.log('payload is: ' + JSON.stringify(data))
  return todoStore.loadTodos(data)
}