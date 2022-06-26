<template>
<div style="position: relative;">

  <div class="row">
    <div class="click-flag"
       v-if="appStore.locale.value == 'fr'"
      @click="showFlags=true"
    >
      <img src="../../assets/flags/fr.svg"
        width="28" height="21"
      >
    </div>
    <div class="click-flag"
       v-if="appStore.locale.value == 'en-US'"
      @click="showFlags=true"
    >
      <img src="../../assets/flags/us.svg"
        width="28" height="21"
      >
    </div> 
  </div>

  <div v-if="showFlags"
    style="position: absolute; top: 0px; left: -12px;"
  >
    <div class="click-flag"
      @click="$i18n.locale = 'fr';submit('fr')">
      <img src="../../assets/flags/fr.svg"
        width="40" height="30"
      >
    </div>
    <div class="click-flag"
      @click="$i18n.locale = 'en-US';submit('en-US')">
      <img src="../../assets/flags/us.svg"
        width="40" height="30"
      >
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '../../stores/appStore'

const appStore = useAppStore()

const showFlags = ref(false)

const submit = (code) => {
  showFlags.value = false
  appStore.setLocale(code)
}

</script>

<style lang="scss" scoped>

.click-flag{
  cursor: pointer;
}
</style>