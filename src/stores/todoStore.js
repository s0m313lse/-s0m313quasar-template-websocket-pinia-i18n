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
        user:'admin',
        id: 0
      }, {
        completed:false,
        created_at:1655927396516,
        text:'Model data',
        user:'admin',
        id: 1
      }, {
        completed:false,
        created_at:1655927508848,
        text:'Design components',
        user:'admin',
        id: 2
      }, {
        completed:false,
        created_at:1655927608848,
        text:'Code Quasar app',
        user:'admin',
        id: 3 
      }, {
        completed:false,
        created_at:1655927708848,
        text:'Deploy to users',
        user:'admin',
        id: 4
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
      this.showUpdateTodo = false
      this.selectedTodo = null
    },
    /**
     * 
     * @param id 
     */
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
      this.showDeleteTodo = false
      this.selectedTodo = null  
        },
    /**
     * 
     * @param todo 
     */
    addTodo(text) {
      this.showCreateTodo = false
      this.todos = [
        {
          text: text,
          id: this.id++,
          user: 'user',
          created_at: Date.now(),
          completed: false
    
        },
        ...this.todos
      ]
    },
  },
})

