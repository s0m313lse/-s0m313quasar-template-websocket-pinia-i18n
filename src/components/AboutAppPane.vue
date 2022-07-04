<template>
  <page-pane full-width>
    <pane-header>
      <template v-slot:title>{{$t('about_app')}}</template>
    </pane-header>
    <pane-body>
      <div class="q-pa-md column items-center">
        <p>{{$t('boilerplate')}}</p>
        <p>{{$t('helping')}}</p>
        <p>{{$t('instant_network')}}</p>
        <p>{{$t('fast_dev')}}</p>
        <p>
          {{$t('built_on')}}
          <a target="_blank" rel="noopener noreferrer" href="https://quasar.dev">Quasar</a>
          {{$t('built_on2')}} {{$t('front_end')}}
          <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/api/composition-api-setup">Composition API</a>
          {{$t('of')}}
          <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org">Vue3</a>
          {{$t('and_uses')}}
          <a target="_blank" rel="noopener noreferrer" href="https://pinia.vuejs.org">Pinia</a>
          {{$t('state_management')}}{{$t('servers_built')}}
          <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org">Node v14</a>
          {{$t('and')}}
          <a target="_blank" rel="noopener noreferrer" href="https://expressjs.com">Express</a>, 
          {{$t('also_provides')}}
          <a target="_blank" rel="noopener noreferrer" href="https://npmjs.com/package/ws">websocket API</a>.
        </p>

      </div>
    </pane-body>
    <pane-footer>
      <div class="q-ma-sm">
        {{$t('about_app')}}
      </div>
    </pane-footer>
  </page-pane>
</template>

<script setup>

</script>


<style lang="scss" scoped>

</style>