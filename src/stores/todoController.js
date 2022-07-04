import { useTodoStore } from './todoStore'
const todoStore = useTodoStore()


export default function ( data ) {
  console.log('todo controller switch value is: ' + JSON.stringify(data.action))
  switch(data.action) {
    case 'complete':
      // console.log('client action complete todo')
      return todoStore.completeTodo(data.payload.id)
    case 'create':
      // console.log('client action create todo')
      return todoStore.createTodo(data.payload)
      break
    case 'delete':
      // console.log('client action delete todo')
      return todoStore.deleteTodo(data.payload.id)
      break
    case 'update':
      // console.log('client action update todo')
      return todoStore.updateTodo(data.payload.todo)
      break
    default:
      console.error('client todoController.js switch reached default state')
      return {status: 'error', data: 'client todoController switch reached default state'}
      break
  }
}
