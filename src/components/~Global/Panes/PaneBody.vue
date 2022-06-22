<template>
  <q-scroll-area
  @scroll="onScroll" 
  ref="scrollAreaRef"
  class="pane-body fit bg-page">
    <div class="pane-header-spacer" style="height: 3rem;"></div>
    <div class="pane-body-content">
      <slot />
    </div>
        <div class="pane-footer-spacer" style="height: 3rem;"></div>
  </q-scroll-area>
</template>

<script>
import { ref, onActivated } from 'vue'

export default ({
  name: 'PaneBody',
  setup() {
    const scrollAreaRef = ref(null)
    let scrollPos = ref(0)

    const onScroll= (info => {
      scrollPos.value = info.verticalPosition
    })

    // onActivated = (() => {
    //   scrollAreaRef.value.setScrollPosition( 'vertical', scrollRef.value)
    // })

    return {
      onScroll,
      scrollAreaRef,
      scrollPos
    }
  }
})
</script>
