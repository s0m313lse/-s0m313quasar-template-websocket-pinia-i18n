<template>
  <q-dialog
    transition-show="slide-up"
    transition-hide="slide-down"
    :maximized="$q.screen.lt.sm ? true : false"
  >
    <div class="q-pt-md flat restrain-rem">
      <q-form @submit="$emit ('submit')">
        <q-card class="app-dialog bg-backdrop">
          <q-card-section
            v-if="label"
          >
            <div class="text-dark text-size-16">
              {{ label }}
            </div>
          </q-card-section>
  
          <q-card-section class="q-pt-none">
            <slot />
          </q-card-section>
  
          <q-card-actions align="right" class="text-primary">
            <slot name="buttons"></slot>
          </q-card-actions>
        </q-card>

      </q-form>
    </div>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const props = defineProps({
  label: String
})

</script>

<style lang="scss" scoped>

</style>