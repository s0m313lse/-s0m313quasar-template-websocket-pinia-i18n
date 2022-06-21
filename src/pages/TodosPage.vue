<template>
  <q-page style="position:relative; overflow:hidden;">
    <TodoList />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import TodoList from '../components/Todos/TodoList.vue'

export default defineComponent({
  name: 'TodosPage',

  components: {
    TodoList
    // TodoPane
  }
})
</script>
