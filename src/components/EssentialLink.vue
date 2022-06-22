<template>
  <q-item class="text-size-16 essential-link text-primary"
    clickable
    :to="link"
  >
    <div class="row nowrap">
      <div
        style="margin-right:.5rem;"
        v-if="icon"
        avatar
      >
        <q-icon :name="icon" color="primary"/>
      </div>
  
      <div>
        <div>{{ $t(title) }}</div>
      </div>
    </div>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
