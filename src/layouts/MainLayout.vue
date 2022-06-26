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
      <div class="text-weight-bold text-accent text-size-21">
        <strong>
         {{$t('titlebar_text')}}
        </strong>
      </div>
    </q-header>

    <q-drawer class="bg-transparent gt-xs"
      :v-if="$q.screen.lt.lg"
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

      <q-footer class="lt-sm">
        Footer
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
        Footer
      </div>
    </q-footer> -->
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import FlagSwitcher from 'components/Settings/FlagSwitcher.vue'

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
