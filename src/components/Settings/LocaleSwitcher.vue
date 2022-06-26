<template>
    <div>
      <q-select v-model="labelValue"
        class="bg-medium app-list-item"
        style="width:10rem;padding-left:1rem;"
        :options="localeOptions"
        :option-value="value"
        :label="$t('language')"
        @update:model-value="setLocale()"/>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '../../stores/appStore'

const { locale } = useI18n( { useScope: 'global' } )
const appStore = useAppStore()

const labelValue = ref(appStore.locale.label)

const localeOptions = computed(() => appStore.getLocales())

const setLocale = () => {
  const v = labelValue.value.value
  appStore.setLocale(v)
  locale.value = v
}

watch(
  () => appStore.locale, 
  (v) => {
  console.log('into watch function')
  labelValue.value = appStore.locale.label
})

</script>

<style lang="scss" scoped>

</style>