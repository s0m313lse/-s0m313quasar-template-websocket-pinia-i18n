<template>
<q-item  class="column bg-backdrop app-list-item"
  :class="{ 'bg-green': props.todo.completed}">
  <div class="row"
    :class="{ 'done': props.todo.completed}"
  >
    <q-item-section avatar>
      <q-checkbox
        v-model="completed"
        @click="completeTodo(props.todo.id)"
        color="secondary" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ props.todo.text }}</q-item-label>
    </q-item-section>
    <div class="row">
      <q-btn flat round dense
        @click="setSelectedTodo(props.index, 'update')"
        icon="edit"
        color="secondary"
      />
      <q-btn flat round dense
        @click="setSelectedTodo(props.index, 'delete')"
        icon="delete"
        color="negative"
      />
    </div>
  </div>
  <div class="row">
    <q-item-section>
      <q-item-label><small><i>
        {{$t('created_by')}} {{ props.todo.user }} 
        {{$t('at')}} {{  timeString(props.todo.created_at) }}
        {{$t('on')}} {{  dayString(props.todo.created_at) }}
      </i></small></q-item-label>
    </q-item-section>
  </div>
</q-item>
<app-dialog v-model="showDeleteTodo" persistent
  :label="$t('delete')"
  @submit="deleteTodo(todoStore.selectedTodo.id)"
>
  {{$t('are_you_sure')}} {{todoStore.selectedTodo.text}} ?
  <template v-slot:buttons>
    <app-btn @click="showDeleteTodo = false"
      color="negative"
      :label="$t('cancel')"
      v-close-popup
    />
    <app-btn type="submit"
      color='positive' 
      :label="$t('delete')"
    />
  </template>
</app-dialog>
<app-dialog v-model="showUpdateTodo" persistent
  :label="$t('edit')"
  @submit="updateTodo(todoStore.selectedTodo)"
>
  <q-input v-model="todoStore.selectedTodo.text"
    :label="$t('edit')"
  />
  <template v-slot:buttons>
    <app-btn @click="showUpdateTodo = false"
      color="negative"
      :label="$t('cancel')"
      v-close-popup
    />
    <app-btn type="submit"
      color='positive' 
      :label="$t('edit')"
    />
  </template>
</app-dialog>
</template>

<script setup>
import { computed, getCurrentInstance, ref } from 'vue'
import { date } from 'quasar'

import { useTodoStore } from '../../stores/todoStore'

const { proxy } = getCurrentInstance()
const socket = proxy.$socket

const todoStore = useTodoStore()

const props = defineProps({
  todo: Object,
  index: Number
})

const showDeleteTodo = ref(false)
const showUpdateTodo = ref(false)

const completed = computed(() => {
  return todoStore.getTodoByID(props.todo.id).completed
})

const setSelectedTodo = (index, type) => {
  todoStore.selectedTodo = todoStore.todos[index]
  if(type === 'update') showUpdateTodo.value = true
  if(type === 'delete') showDeleteTodo.value = true
}

const completeTodo = (id) => {
  socket.send(JSON.stringify(
    {
      code: 'todo',
      data: {
        action: 'complete',
        payload: id
      }
    }
  ))
}

const deleteTodo = (id) => {
  showDeleteTodo.value = false
  todoStore.selectedTodo = null  
  socket.send(JSON.stringify(
    {
      code: 'todo',
      data: {
        action: 'delete',
        payload: id
      }
    }
  ))
}

const updateTodo = (todo) => {
  showUpdateTodo.value = false
  todoStore.selectedTodo = null  
  socket.send(JSON.stringify(
    {
      code: 'todo',
      data: {
        action: 'update',
        payload: todo
      }
    }
  ))
}

const timeString = function(timestamp) {
  return date.formatDate(timestamp,'h')+':'+date.formatDate(timestamp, 'mm a')
}

const dayString = function(timestamp) {
  return date.formatDate(timestamp,'D MMMM YYYY')
}
</script>

<style lang="scss" scoped>
.done{
  .q-item__label{
    text-decoration: line-through;
  }
}
</style>