<template>
  <q-page style="position:relative; overflow:hidden;">
    <AppOptionsPane />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import AppOptionsPane from '../components/Settings/AppOptionsPane'

export default defineComponent({
  name: 'OptionsPage',

  components: {
    AppOptionsPane
  }
})
</script>
