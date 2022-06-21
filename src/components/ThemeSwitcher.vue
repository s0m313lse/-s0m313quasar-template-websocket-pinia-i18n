<template>
  <div>
    <q-select v-model="currentTheme"
      class="bg-medium select-item oak-content"
      :options="getThemeLabels()"
      :label="$t('app_theme')"
      @update:model-value="setTheme()"/>


    <q-select v-model="currentTextSize"
      class="bg-medium select-item oak-content"
      :options="getTextSizes()"
      :label="$t('text_size')"
      @update:model-value="setTextSize()"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CssDict from '../css/CssDict'

const showList = ref(false)
const currentTheme = ref('Default')
const currentTextSize = ref('Medium')

const reverseThemeLookup = {}

Object.keys(CssDict.themes).forEach((i) => {
  reverseThemeLookup[CssDict.themes[i].label] = i
})

const reverseTextSizeLookup = {}

Object.keys(CssDict.text_sizes).forEach((i) => {
  reverseTextSizeLookup[CssDict.text_sizes[i].label] = i
})

const getThemeLabels = () => {
  return (Object.keys(CssDict.themes)).map( i => {
    return CssDict.themes[i].label
  })
}

const getTextSizes = () => {
  return (Object.keys(CssDict.text_sizes)).map( i => {
    return CssDict.text_sizes[i].label
  })
}

const setTheme = () => {
  console.log('set Theme fired')
  document.body.setAttribute('data-theme', reverseThemeLookup[currentTheme.value])
}

const setTextSize = () => {
  console.log('set TextSize clicked')
  document.body.setAttribute('data-text-size', reverseTextSizeLookup[currentTextSize.value])
}

</script>

<style lang="scss" scoped>

</style>