<template>
  <header class="pane-header q-header
  q-layout__section--marginal bg-accent absolute
  full-width">
    <div class="q-toolbar pane-toolbar">
      <div class="absolute-left q-ma-xs">
        <slot name="buttons-left"></slot>
      </div>
      <div class="text-size-16 text-marginal text-bold
      absolute-center-horizontal q-pl-none"
      style="flex:1 1 auto;text-align: center;">
        <slot name="title"></slot>
      </div>
      <div class="absolute-right q-ma-xs">
        <slot name="buttons-right"></slot>
      </div>
    </div>
  </header>
</template>
