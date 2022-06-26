<template>
  <q-page padding>
    <div>
      {{ trans }}
    </div>
  </q-page>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const trans = computed(() => t('event_driven'))

</script>
