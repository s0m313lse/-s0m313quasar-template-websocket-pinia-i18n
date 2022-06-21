<template>
  <PagePane left>
    <PaneHeader>
      <template v-slot:title>{{$t('options')}}</template>
    </PaneHeader>
    <PaneBody>
      <div class="ss-pane">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
    </PaneBody>
    <PaneFooter>
      <div class="q-ma-sm">
        {{$t('options')}}
      </div>
    </PaneFooter>
  </PagePane>
</template>

<script setup>
import PagePane from './~Global/Panes/PagePane'
import PaneBody from './~Global/Panes/PaneBody'
import PaneFooter from './~Global/Panes/PaneFooter'
import PaneHeader from './~Global/Panes/PaneHeader'

import LocaleSwitcher from './LocaleSwitcher'
import ThemeSwitcher from './ThemeSwitcher'

</script>


<style lang="scss" scoped>

</style>