<template>
  <PagePane left>
    <pane-header>
      <template v-slot:title>{{$t('about_app')}}</template>
    </pane-header>
    <PaneBody>
      <div class="q-pa-md">
        <p>
          This app is a boilerplate starting point for developing your own great app.
        </p>
        <p>
          Helping you to develop superior user experiences with minimal
          configuration and overhead, this simple Todo List app packs a lot
          of features.
        </p>
        <p>
          Designed to provide a real time network of users connected via websockets,
          the app is entirely event driven.  Is is also designed to be responsive, scalable and secure.
        </p>
        <p>
          Designed for ease of development, the entire tech stack is written in JavaScript;
          one language to build servers, databases, and mobile views as well as the usual website scripting.
          Fast hot reloading with Vite speeds your develpment process and minimizes mistakes.
          Working code examples of the features allow you to get right into development rather than
          researching syntax.   
        </p>
        <p>
          The front end implements the Composition API of Vue3 and uses Pinia state management.  Servers are built using Node v14
          and Express, which also wraps the SocketIO API.
        </p>

      </div>
    </PaneBody>
    <PaneFooter>
      <div class="q-ma-sm">
        {{$t('about_app')}}
      </div>
    </PaneFooter>
  </PagePane>
</template>

<script setup>
import PagePane from './~Global/Panes/PagePane'
import PaneBody from './~Global/Panes/PaneBody'
import PaneFooter from './~Global/Panes/PaneFooter'
import PaneHeader from './~Global/Panes/PaneHeader'

</script>


<style lang="scss" scoped>

</style>