<template>
    <div>
      <q-select v-model="currentLocale"
        class="bg-medium app-list-item"
        style="width:8rem;padding-left:1rem;"
        :options="getLocaleLabels()"
        :label="$t('language')"
        @update:model-value="$i18n.locale=reverseLocaleLookup[currentLocale]"/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import LocaleDict from '../i18n/LocaleDict'

const reverseLocaleLookup = {}

Object.keys(LocaleDict).forEach((i) => {
  reverseLocaleLookup[LocaleDict[i].label] = i
})

const currentLocale = ref('US English')

const getLocaleLabels = () => {
  return (Object.keys(LocaleDict)).map( i => {
    return LocaleDict[i].label
  })
}

</script>

<style lang="scss" scoped>

</style>