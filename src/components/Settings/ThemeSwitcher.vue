<template>
  <div>
    <q-select v-model="themeLabel"
      class="bg-medium app-list-item"
      style="width:10rem;padding-left:1rem;"
      :options="themeOptions"
      :label="$t('app_theme')"
      @update:model-value="setTheme()"/>


    <q-select v-model="textSizeLabel"
      class="bg-medium app-list-item"
      style="width:10rem;padding-left:1rem;"
      :options="textSizeOptions"
      :label="$t('text_size')"
      @update:model-value="setTextSize()"/>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '../../stores/appStore'

const { t } = useI18n()
const appStore = useAppStore()

const themeLabel = ref(t(appStore.theme))
const textSizeLabel = ref(t(appStore.text_size))

const themeOptions = computed(() => {
  const temp = appStore.getThemes().map((i) => {
    return { label: t(i.value), value: i.value}
  })
      console.log('computed themes: ' + JSON.stringify(temp))
      return temp
})

const textSizeOptions = computed(() => {
  const temp = appStore.getTextSizes().map((i) => {
    return { label: t(i.value), value: i.value}
  })
      console.log('computed text sizes: ' + JSON.stringify(temp))
      return temp
})

const setTheme = () => {
  appStore.setTheme(themeLabel.value.value)
}

const setTextSize = () => {
  appStore.setTextSize(textSizeLabel.value.value)
}


watch(
  () => appStore.locale, 
  (v) => {
  themeLabel.value = t(appStore.theme)
  textSizeLabel.value = t(appStore.text_size)
})

</script>

<style lang="scss" scoped>

</style>