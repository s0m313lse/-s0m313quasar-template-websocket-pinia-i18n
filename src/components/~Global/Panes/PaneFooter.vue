<template>
  <div class="pane-footer absolute-bottom bg-primary">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PaneFooter'
})
</script>