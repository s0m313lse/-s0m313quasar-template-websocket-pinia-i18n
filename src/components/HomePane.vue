<template>
  <page-pane full-width>
    <pane-header>
      <template v-slot:title>{{$t('event_driven')}}</template>
    </pane-header>

    <pane-body>
      <div class="q-pa-md row wrap">
        <div class="q-pa-md column items-center">
          <div>
            <img src="../assets/app_event_loop.svg"
            id="app_event_loop_svg">
          </div>
        </div>
        <div>
          <p>{{$t('home01')}}</p>
          <p>{{$t('home02')}}
            <br><br>
            <small>
              {{$t('home03')}}src/boot/vue_native_websocket.js, {{$t('home04')}} quasar.config.js
              <br>
              {{$t('home05')}}src/layouts/MainLayout.vue
              <br>
              {{$t('home06')}}src/components/Todos/TodoItem.vue
            </small>
          </p>
          <p>{{$t('home07')}}
            <br><br>
            <small>
              {{$t('home08')}}src/server/index.mjs
              <br>
              {{$t('home09')}}src/server
            </small>
          </p>
          <p>
            {{$t('home10')}}
            <br><br>
            <small>
              {{$t('home11')}}src/stores
              <br>
              {{$t('home12')}}src/stores
            </small>
          </p>
        </div>
      </div>
    </pane-body>
  </page-pane>
</template>

<script setup>

</script>


<style lang="scss" scoped>

</style>