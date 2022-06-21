<template>
  <PagePane left>
    <PaneHeader>
      <template v-slot:title>{{$t('todos')}}</template>
    </PaneHeader>
    <PaneBody>
      <div class="q-pa-md">
        {{$t('todos')}}
      </div>
    </PaneBody>
    <PaneFooter>
      <div class="q-ma-sm">
        {{$t('todos')}}
      </div>
    </PaneFooter>
  </PagePane>
</template>

<script setup>
import PagePane from '../~Global/Panes/PagePane'
import PaneBody from '../~Global/Panes/PaneBody'
import PaneFooter from '../~Global/Panes/PaneFooter'
import PaneHeader from '../~Global/Panes/PaneHeader'

</script>


<style lang="scss" scoped>

</style>