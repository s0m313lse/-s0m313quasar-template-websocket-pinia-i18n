import { Notify } from 'quasar'
import { defineStore } from 'pinia'
import { date } from 'quasar'

// export interface Todo {
//   name: string
//   id: number
//   user: string
//   created_at: string
//   completed: boolean
// }
// interface State {
//   todos: Todo[] | []
//   selectedTodo: Todo | null
//   id : number
// }


export const useTodoStore = defineStore('todostore', {
  // convert to a function
  state: () => ({
    todos: [
      {
        completed:false,
        created_at:1655927287975,
        text:'Create wireframes',
        user:'hoke',
        id: 90
      }, {
        completed:false,
        created_at:1655927396516,
        text:'Model data',
        user:'hoke',
        id: 91
      }, {
        completed:false,
        created_at:1655927508848,
        text:'Design components',
        user:'hoke',
        id: 92
      }, {
        completed:false,
        created_at:1655927608848,
        text:'Code Quasar app',
        user:'hoke',
        id: 93 
      }, {
        completed:false,
        created_at:1655927708848,
        text:'Deploy to users',
        user:'admin',
        id: 94
      }
    ],
    selectedTodo: null,
    showCreateTodo: false,
    showUpdateTodo: false,
    showDeleteTodo: false,
    id: 4
  }),

  actions: {
  /**
  * 
  * @param id
  */
  getTodoByID(id) {
    // console.log('pinia action get todo by id')
    return this.todos.find(item => item.id === id)
  },
  /**
  * 
  * @param data 
  */
  completeTodo(id) {
     console.log('pinia action complete todo')
    //  console.log('id is: ' + JSON.stringify(id))
     let c
     this.todos = this.todos.map(item => {
       if (item.id === id) {
         const v = item.completed
         c = item.completed
           ? 'Todo Uncompleted!'
           : 'Todo Completed!'
         return {
           ...item,
           completed: !v
         }
       } else {
         return item
       }
      })
      return {status: 'success', data: c}

    },
    /**
     * 
     * @param data 
     */
    updateTodo(data) {
      this.todos = this.todos.map(item => {
        if (item.id === data.id) {
          return {
            ...item,
            text: data.text
          }
        } else {
          return item
        }
      })
      console.log('pinia action update todo')
      return {status: 'success', data: 'Todo updated'}
    },
    /**
     * 
     * @param id 
     */
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
      console.log('pinia action delete todo')
      return {status: 'success', data: 'Todo deleted!'}
    },
    /**
     * 
     * @param [todos] 
     */
     loadTodos(data) {
      this.todos = data.todos
      console.log('pinia action load todos')
      return {status: 'success', data: 'Todo data loaded!'}
    },
    /**
     * 
     * @param todo 
     */
     createTodo(todo) {
      this.showCreateTodo = false
      this.todos = [
        todo,
        ...this.todos
      ]
      console.log('pinia action create todo')
      return {status: 'success', data: 'Todo added!'}
    }
  }
})

