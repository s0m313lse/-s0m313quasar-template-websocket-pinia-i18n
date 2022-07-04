<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent" style="height:4rem;line-height:1.2rem;">
      <div class="flex row flex-end text-white text-weight-bold text-size-12"
        style="padding-right:.5rem; padding-top: .5rem;"
      >
        <q-space/>
          <span><small><i>{{$t('made_with')}} &nbsp; </i></small></span>
        <div style="margin-right:.5rem;">
          Quasar v{{ $q.version }}
        </div>
        <flag-switcher />
      </div>
      <div class="text-weight-bold text-center text-accent text-size-21">
        <strong>
         {{$t('titlebar_text')}}
        </strong>
      </div>
    </q-header>

    <q-drawer class="bg-transparent"
      v-if="!onMobile"
      show-if-above
        :width="150"
        :breakpoint="400"
    >
        <div class="top-left">
          <div class="text-weight-bold text-accent text-size-21">
            <strong>
              {{$t('todo_list')}}
            </strong>
          </div>
          <div class="text-white text-size-12 text-weight-bold">
            {{$t('event_driven')}}
          </div>
        </div>
        <!-- <q-scroll-area style="height: calc(100% - 4.2rem); margin-top: 192px;"> -->
          <q-list>
            <q-item class="text-white text-size-12 text-weight-bold"
              v-for="link in navLinks"
              :key="link.title"
              v-bind="link"
              active-class="text-primary"
              exact
              clickable
              :to="link.link"
              v-ripple>
              <q-item-section avatar>
                <q-icon :name="link.icon" color="primary"/>
              </q-item-section>

              <q-item-section>
                {{ $t(link.title) }}
              </q-item-section>
            </q-item>
         </q-list>
        <!-- </q-scroll-area> -->
      </q-drawer>

      <q-footer v-if="onMobile" class="bg-secondary" style="height:4rem;line-height:1.2rem;">
        <q-tabs>
          <q-route-tab class="text-white text-size-12 text-weight-bold"
            v-for="link in navLinks"
            :key="link.title"
            v-bind="link"
            active-class="text-primary"
            v-ripple
            :label="link.title"
            :icon="link.icon"
            :to="link.link"
            exact
          />
        </q-tabs>
      </q-footer>

    <q-page-container>
      <router-view v-slot="{ Component}">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
    <!-- <q-footer :v-if="$q.screen.lt.md">
      <div>
        Tjis is Footer
      </div>
    </q-footer> -->
  </q-layout>
</template>

<script setup>
import { computed, getCurrentInstance } from 'vue'
import { useQuasar } from 'quasar'

import controller from '../stores/storeController'
import FlagSwitcher from 'components/Settings/FlagSwitcher.vue'

const $q = useQuasar()
const { proxy } = getCurrentInstance()
const socket = proxy.$socket

socket.onmessage = (event) => {
  try {
    const msg = (JSON.parse(event.data))
    // console.log('client parsed data is: ' + JSON.stringify(msg))
    const result = controller(msg)
    // console.log('result is : ' + JSON.stringify(result))
    $q.notify(result.data)
  }
  catch {
    console.error('client onMessage failed JSON.parse')
    console.log(JSON.stringify(event.data))
  }
}

socket.send(JSON.stringify(
  {
    code: 'handshake'
  }
))

const onMobile = computed(() => {
  return $q.screen.lt.sm
})

const navLinks = [
  {
    title: 'home',
    caption: 'home',
    icon: 'home',
    link: '/'
  },
  {
    title: 'todos',
    caption: 'todos',
    icon: 'check',
    link: '/todos'
  },
  {
    title: 'info',
    caption: 'info',
    icon: 'info',
    link: '/about'
  },
  {
    title: 'appearance',
    caption: 'appearance',
    icon: 'settings',
    link: '/options'
  }

]
</script>
