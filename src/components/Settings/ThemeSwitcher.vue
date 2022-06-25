<template>
  <div>
    <q-select v-model="appStore.theme.label"
      class="bg-medium app-list-item"
      style="width:8rem;padding-left:1rem;"
      :options="appStore.getThemes()"
      :label="$t('app_theme')"
      @update:model-value="appStore.setTheme(appStore.theme.label)"/>


    <q-select v-model="appStore.text_size.label"
      class="bg-medium app-list-item"
      style="width:8rem;padding-left:1rem;"
      :options="appStore.getTextSizes()"
      :label="$t('text_size')"
      @update:model-value="appStore.setTextSize(appStore.text_size.label)"/>
  </div>
</template>

<script setup>
import { useAppStore } from '../../stores/appStore'

const appStore = useAppStore()

</script>

<style lang="scss" scoped>

</style>