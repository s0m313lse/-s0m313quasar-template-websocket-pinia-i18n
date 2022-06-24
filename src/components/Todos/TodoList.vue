<template>
  <PagePane left>
    <PaneHeader>
      <template v-slot:title>{{$t('todos')}}</template>
    </PaneHeader>
    <PaneBody>
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
          v-if="todo_list.length"
        >
          <q-list>
            <q-item  class="column bg-backdrop app-list-item"
              v-for="(item, index) in todo_list" 
              :key="index"
              :class="{ 'bg-green': item.completed}">
              <div class="row"
                :class="{ 'done': item.completed}"
              >
                <q-item-section avatar>
                  <q-checkbox
                    v-model="item.completed" 
                    color="secondary" />
                </q-item-section>
        
                <q-item-section>
                  <q-item-label>{{ item.text }}</q-item-label>
                </q-item-section>
    
                <div class="row">
                  <q-btn flat round dense
                    @click="onShowUpdateTask(index)"
                    icon="edit"
                    color="secondary"
                  />
                  <q-btn flat round dense
                    @click="onShowDeleteTask(index)"
                    icon="delete"
                    color="negative"
                  />
                </div>
    
                <q-item-section>
                  <button @click="todoStore.removeTodo(item.id)">{{ $t('delete') }}</button>
                </q-item-section>
              </div>
              <div class="row">
                <q-item-section>
                  <q-item-label><small><i>
                    Created by {{ item.user }} at {{  timeString(item.created_at) }} on {{  dayString(item.created_at) }}
                  </i></small></q-item-label>
                </q-item-section>
              </div>
            </q-item>
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
        {{$t('todos')}}
      </div>
    </PaneFooter>
  </PagePane>
  <AppDialog v-model="showCreateTodo" persistent
    :label="$t('add_todo')"
    @submit="onSubmitCreate"
  >
    <q-input v-model="createTodoText"
     :label="$t('add_todo')" 
     lazy-rules
     :rules="[ val => val && val.length > 0 ||
       'Please enter a name']"
    />

    <template v-slot:buttons>
      <app-btn @click="showCreateTodo = false"
        color="negative"
        :label="$t('cancel')"
        v-close-popup
      />
      <app-btn type="submit"
        color='positive' 
        :label="$t('add_todo')"
        :disable="!addTodoForm.name"
      />
    </template>
  </AppDialog>

  <AppDialog v-model="showDeleteTodo" persistent
    :label="$t('delete')"
    @submit="onSubmitDelete"
  >
    Are you sure you want to delete {{deleteTodoText}}?

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
  </AppDialog>

  <AppDialog v-model="showUpdateTodo" persistent
    :label="$t('edit')"
    @submit="onSubmitUpdate"
  >
    <q-input v-model="updateTodoText"
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
  </AppDialog>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { date } from 'quasar'
import AppBtn from '../~Global/Buttons/AppBtn'
import AppDialog from '../~Global/Dialogs/AppDialog'
import NothingHere from '../~Global/NothingHere'
import PagePane from '../~Global/Panes/PagePane'
import PaneBody from '../~Global/Panes/PaneBody'
import PaneFooter from '../~Global/Panes/PaneFooter'
import PaneHeader from '../~Global/Panes/PaneHeader'

import { useTodoStore } from '../../stores/todoStore'

let addTodoForm = reactive({
  name: String
})

const timeString = function(timestamp) {
  return date.formatDate(timestamp,'h')+':'+date.formatDate(timestamp, 'mm a')
}

const dayString = function(timestamp) {
  return date.formatDate(timestamp,'Do MMMM')
}

// this gets cut out

const onSubmitCreate = () => {
  console.log('addTodoForm: ' + JSON.stringify(addTodoForm))
  createNewTodo()
}

const onShowDeleteTask = (index) => {
  deleteTodoText.value = todo_list.value[index].text
  showDeleteTodo.value = true
  selectedIndex.value = index
}

const onSubmitDelete = () => {
  console.log('showDeleteTodo is: ' + JSON.stringify(showDeleteTodo))
  deleteTask()
}

const onShowUpdateTask = (index) => {
    console.log('showUpdate index is: ' + JSON.stringify(index))
  updateTodoText.value = todo_list.value[index].text
  selectedIndex.value = index
  showUpdateTodo.value = true
}

const onSubmitUpdate = () => {
  console.log('showUpdate index is: ' + JSON.stringify(selectedIndex.value))
  todo_list.value[selectedIndex.value].text = updateTodoText.value
  showUpdateTodo.value = false
  selectedIndex.value = null
}

const showCreateTodo = ref(false)
const showUpdateTodo = ref(false)
const showDeleteTodo = ref(false)
const createTodoText = ref("")
const updateTodoText = ref("")
const deleteTodoText = ref("")
const selectedIndex = ref(null)
const todo_list = ref([
  {
    completed:false,
    created_at:1655927287975,
    text:'Buy Bananas',
    user:'user'
  }, {
    completed:false,
    created_at:1655927296516,
    text:'Eat Bananas',
    user:'user'
  }, {
    completed:false,
    created_at:1655927308848,
    text:'Poo Bananas',
    user:'user'
  }  
])

const createNewTodo = () => {
  todo_list.value = [
    ...todo_list.value,
    {
      text: createTodoText.value,
      completed: false,
      user: 'user',
      created_at: Date.now()
    }
  ]
  createTodoText.value = ''
  showCreateTodo.value = false
  console.log('showCreateTodo.value is ' + JSON.stringify(showCreateTodo.value))
}

const deleteTask = () => {
  const index = selectedIndex.value
  const  temp = [
    ...todo_list.value.slice(0,index),
    ...todo_list.value.slice(index+1, todo_list.value.length )
  ]
  console.log('temp is ' + JSON.stringify(temp))
  todo_list.value = temp
  showDeleteTodo.value = false
  selectedIndex.value = null
}
// end cut out


// get the store
const todoStore = useTodoStore()

// let label= "label me"

// subscribe to changes on store
// .....
// when the selected todo is set, update the form
// to display the selected todo, if it is set to
// null, then the form fields will be cleared
todoStore.$subscribe((value) => {
  if (value.events.key === 'selectedTodo') {
    const event = value.events;
    if (event.newValue === null) {
      item.value = { name: '' }
    } else {
      item.value.name = event.newValue.name;
    }
  }
})

// ref for holding form values
const item = ref({ name: '' })
const confirm = ref(false)
const get_locale_text = (key) => {return 'locale_txt'}

/**
 * - gets values from form
 * - calls method on store to add student
 * - clears form values
 */
const addTodo = () => {
  todoStore.addTodo(item.value);
  item.value = { name: '' }
};

/**
 * - sets store property selectedTodo
 * - updates input form fields with values
 */
const setSelectedTodo = (todo) => {
  todoStore.selectedTodo = todo;
}

/**
 * - gets form values
 * - gets id from selectedTodo
 * - calls updateTodo method on store
 */
const updateTodo = () => {
//   const { name } = item.value;
  const id = todoStore.selectedTodo?.id || 0
  todoStore.updateTodo({ ...item.value, id });
}

const deleteTodo = (index) => {
  todoStore.removeTodo(index)   
}


</script>


<style scoped lang="scss">

.done{
  .q-item__label{
    text-decoration: line-through;
  }
}
</style>
