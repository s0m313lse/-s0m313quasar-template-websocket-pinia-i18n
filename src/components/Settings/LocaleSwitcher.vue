<template>
    <div>
      <q-select v-model="appStore.locale.label"
        class="bg-medium app-list-item"
        style="width:8rem;padding-left:1rem;"
        :options="appStore.getLocales()"
        :label="$t('language')"
        @update:model-value="$i18n.locale=appStore.getLocaleCode(appStore.locale.label); appStore.setLocale(appStore.locale.label)"/>
    </div>
</template>

<script setup>
import { useAppStore } from '../../stores/appStore'

const appStore = useAppStore()

</script>

<style lang="scss" scoped>

</style>