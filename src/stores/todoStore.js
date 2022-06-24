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
    todos: [],
    selectedTodo: null,
    id: 0
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
          };
        } else {
          return item;
        }
      })

      //after updating remove selected todo
      this.selectedTodo = null;
    },
    /**
     * 
     * @param id 
     */
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    /**
     * 
     * @param todo 
     */
    addTodo(text) {
      this.todos = [
        {
          name: text,
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

