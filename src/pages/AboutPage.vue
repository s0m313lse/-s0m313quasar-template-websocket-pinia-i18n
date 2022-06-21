<template>
  <q-page style="position:relative; overflow:hidden;">
    <AboutAppPane />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import AboutAppPane from '../components/AboutAppPane.vue'

export default defineComponent({
  name: 'AboutPage',

  components: {
    AboutAppPane
  }
})
</script>
