export default function (data) {
  console.log('server todo switch value is: ' + JSON.stringify(data.action))
  switch(data.action) {
    case 'create':
      console.log('todo action create')
      return createTodo(data.payload)
      break
    case 'complete':
      console.log('todo action complete')
      return completeTodo(data.payload)
      break
    case 'delete':
      console.log('todo action delete')
      return deleteTodo(data.payload)
      break
      case 'update':
        console.log('todo action update')
        return updateTodo(data.payload)
        break
    default:
      console.error('server todoController switch reached default state')
      break
  }
}
let id = 40

function createTodo(data) {
  const newTodo = 
    {
      code: 'todo',
      data: {
        action: 'create',
        payload: {
          text: data.text,
          id: id++,
          user: data.user,
          created_at: Date.now(),
          completed: false
        }
      }
    }
  console.log('server action create todo')
  return newTodo
}

function completeTodo(id) {
  const msg = {
    code: 'todo',
    data: {
      action: 'complete',
      payload: {
        id: id,
      }
    }  
  }
  console.log('server action complete todo')
  return msg
}

function deleteTodo(id) {
  const msg = {
    code: 'todo',
    data: {
      action: 'delete',
      payload: {
        id: id,
      }
    }  
  }
  console.log('server action delete todo')
  return msg
}

function updateTodo(todo) {
  console.log('server update todo is: ' + JSON.stringify(todo))
  const msg = {
    code: 'todo',
    data: {
      action: 'update',
      payload: {
        todo: todo,
      }
    }  
  }
  console.log('server action update todo')
  return msg
}
