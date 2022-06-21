<template>
  <q-scroll-area class="pane-body fit bg-page">
    <div class="pane-header-spacer" style="height: 3rem;"></div>
    <div class="pane-body-content">
      <slot />
    </div>
        <div class="pane-footer-spacer" style="height: 3rem;"></div>
  </q-scroll-area>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PaneBody'
})
</script>
