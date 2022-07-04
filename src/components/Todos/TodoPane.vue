<template>
  <page-pane left>
    <pane-header>
      <template v-slot:title>{{$t('todos')}}</template>
    </pane-header>
    <pane-body>
      <div class="q-pa-md">
        <div class="q-gutter-md" style="margin-left:.2rem;">
          <app-btn @click="showCreateTodo = true"
            color='primary' 
            :label="$t('add_todo')"
            full-width
          />
        </div>
      </div>
      <div class="q-pa-md">
        <div class="q-gutter-md"
          v-if="todoStore.todos.length"
        >
          <q-list>
            <todo-item  class="column bg-backdrop app-list-item"
              v-for="(item, index) in todoStore.todos" 
              :key="index"
              :todo="item"
              :index="index"
            />
          </q-list>
        </div>
        <div class="q-gutter-md"
          v-else
        >
          <nothing-here
            icon="star"
             label="No Todos"
          />
        </div>
      </div>
    </pane-body>
    <pane-footer>
      <div class="q-ma-sm">
       <span>{{$t('you_have')}}</span>
       {{ todoStore.todos.length }}
       <span v-if="todoStore.todos.length == 1">{{$t('todo')}}</span>
       <span v-else >{{$t('todos')}}</span> .
      </div>
    </pane-footer>
  </page-pane>
  <app-dialog v-model="showCreateTodo" persistent
    :label="$t('add_todo')"
    @submit="addTodo()"
  >
    <q-input v-model="createTodoText"
     :label="$t('add_todo')" 
     lazy-rules
     :rules="[ val => val && val.length > 0 ||
       $t('enter_name')]"
    />

    <template v-slot:buttons>
      <app-btn @click="todoStore.showCreateTodo = false"
        color="negative"
        :label="$t('cancel')"
        v-close-popup
      />
      <app-btn type="submit"
        color='positive' 
        :label="$t('add_todo')"
      />
    </template>
  </app-dialog>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
import TodoItem from './TodoItem'

import { useTodoStore } from '../../stores/todoStore'
import controller from '../../stores/storeController'
const { proxy } = getCurrentInstance()
const socket = proxy.$socket

const todoStore = useTodoStore()

const createTodoText = ref("")
const showCreateTodo = ref(false)

const addTodo = () => {
  const payload = {code: 'todo',
    data: {
      action: 'create',
      payload: {
        user: 'user',
        text: createTodoText.value
      }
    }
  }
  socket.send(JSON.stringify(payload))
  showCreateTodo.value = false
  createTodoText.value = ''
}

</script>
