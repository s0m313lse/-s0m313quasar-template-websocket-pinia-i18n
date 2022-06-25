<template>
<q-item  class="column bg-backdrop app-list-item"
  :class="{ 'bg-green': props.todo.completed}">
  <div class="row"
    :class="{ 'done': props.todo.completed}"
  >
    <q-item-section avatar>
      <q-checkbox
        v-model="todoStore.todos[index].completed" 
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
        {{$t('created_by')}} {{ props.todo.user }} {{$t('at')}} {{  timeString(props.todo.created_at) }} {{$t('on')}} {{  dayString(props.todo.created_at) }}
      </i></small></q-item-label>
    </q-item-section>
  </div>
</q-item>
<AppDialog v-model="todoStore.showDeleteTodo" persistent
  :label="$t('delete')"
  @submit="todoStore.deleteTodo(todoStore.selectedTodo.id)"
>
  {{$t('are_you_sure')}} {{todoStore.selectedTodo.text}} ?
  <template v-slot:buttons>
    <app-btn @click="todoStore.showDeleteTodo = false"
      color="negative"
      :label="$t('cancel')"
      v-close-popup
    />
    <app-btn type="submit"
      color='positive' 
      :label="$t('delete')"
    />
  </template>
</AppDialog>
<AppDialog v-model="todoStore.showUpdateTodo" persistent
  :label="$t('edit')"
  @submit="todoStore.updateTodo(todoStore.selectedTodo)"
>
  <q-input v-model="todoStore.selectedTodo.text"
    :label="$t('edit')"
  />
  <template v-slot:buttons>
    <app-btn @click="todoStore.showUpdateTodo = false"
      color="negative"
      :label="$t('cancel')"
      v-close-popup
    />
    <app-btn type="submit"
      color='positive' 
      :label="$t('edit')"
    />
  </template>
</AppDialog>
</template>

<script setup>
import { date } from 'quasar'
import AppBtn from '../~Global/Buttons/AppBtn'
import AppDialog from '../~Global/Dialogs/AppDialog'

import { useTodoStore } from '../../stores/todoStore'
const todoStore = useTodoStore()

const props = defineProps({
  todo: Object,
  index: Number
})

const setSelectedTodo = (index, type) => {
  todoStore.selectedTodo = todoStore.todos[index]
  if(type === 'update') todoStore.showUpdateTodo = true
  if(type === 'delete') todoStore.showDeleteTodo = true
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