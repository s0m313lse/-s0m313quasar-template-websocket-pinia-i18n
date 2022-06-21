<template>
  <q-item class="text-size-16"
    clickable
    :to="link"
  >
    <q-item-section
      style="margin:0rem;padding:0rem;"
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" color="primary"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ $t(title) }}</q-item-label>
    </q-item-section>
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
