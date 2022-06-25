<template>
  <PagePane left>
    <PaneHeader>
      <template v-slot:title>{{$t('todos')}}</template>
    </PaneHeader>
    <PaneBody>
      <div class="q-pa-md">
        <div class="q-gutter-md" style="margin-left:.2rem;">
          <app-btn @click="todoStore.showCreateTodo = true"
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
    </PaneBody>
    <PaneFooter>
      <div class="q-ma-sm">
       <span>{{$t('you_have')}}</span>
       {{ todoStore.todos.length }}
       <span v-if="todoStore.todos.length == 1">{{$t('todo')}}</span>
       <span v-else >{{$t('todos')}}</span> .
      </div>
    </PaneFooter>
  </PagePane>
  <AppDialog v-model="todoStore.showCreateTodo" persistent
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
  </AppDialog>
</template>

<script setup>
import { ref } from 'vue'
import { date } from 'quasar'
import AppBtn from '../~Global/Buttons/AppBtn'
import AppDialog from '../~Global/Dialogs/AppDialog'
import NothingHere from '../~Global/NothingHere'
import PagePane from '../~Global/Panes/PagePane'
import PaneBody from '../~Global/Panes/PaneBody'
import PaneFooter from '../~Global/Panes/PaneFooter'
import PaneHeader from '../~Global/Panes/PaneHeader'
import TodoItem from './TodoItem'

import { useTodoStore } from '../../stores/todoStore'
const todoStore = useTodoStore()

const createTodoText = ref("")

const addTodo = () => {
  todoStore.addTodo(createTodoText.value)
  createTodoText.value = ''
}

</script>

