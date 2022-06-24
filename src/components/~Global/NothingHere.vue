<template>
  <div class="absolute-center text-center">
    <q-icon
      :name="icon"
      size="3rem"
      color="light"
    />
    <div class="text-size-21 text-light">
      {{$t(label)}}
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  label: String,
  icon: String,
})
</script>
