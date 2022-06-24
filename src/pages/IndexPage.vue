<template>
  <q-page padding>
    <q-btn color='primary' label="English" 
      @click="$i18n.locale='en-US'"/>
    <q-btn color='secondary' label="Francais"
      @click="$i18n.locale='fr'"/>

    <q-separator class="q-my-lg" />

    <q-btn :label="$t('failed')"/>
    <q-btn :label="$t('success')"/>
    <p>
      {{$t('failed')}}
    </p>
    <p>
      {{$t('success')}}
    </p>

    <q-separator class="q-my-lg" />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',

})
</script>
