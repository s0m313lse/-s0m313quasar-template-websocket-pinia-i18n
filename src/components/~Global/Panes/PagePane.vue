<template>
    <div class="pane absolute fit"
      :class="panePositionClass"
    >
      <slot />
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps(
  ['left', 'right', 'full-width']
)

const panePositionClass = computed(() => {
  if ( typeof props.left !==  'undefined') {
    return 'pane-desktop-left'
  }
  else if ( typeof props.right !==  'undefined') {
    return 'pane-desktop-right'
  }
  else if ( typeof props.fullWidth !==  'undefined') {
    return 'pane-desktop-full-width'
  }
  else {
    return 'prop typeof error'
  }
})

</script>

<style lang="scss" scoped>

</style>