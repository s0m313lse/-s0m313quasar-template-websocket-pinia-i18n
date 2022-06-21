<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent" style="height:6.5rem;">
      <div class="flex row flex-end text-white text-size-12">
        <q-space/>
        <span><i>{{$t('made_with')}} </i></span>
        <div style="margin-right:1rem;"
        > Quasar v{{ $q.version }}</div>
      </div>
      <div class="text-weight-bold text-accent text-size-21">
        <strong>
         {{$t('titlebar_text')}}
        </strong>
      </div>
    </q-header>

    <q-drawer class="bg-transparent"
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
        <!-- <q-scroll-area style="height: calc(100% - 4.2rem); margin-top: 192px;"
          class="bg-transparent"> -->
          <q-list>
            <EssentialLink
              v-for="link in navLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        <!-- </q-scroll-area> -->

      </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- <q-footer :v-if="$q.screen.lt.md">
      <div>
        Footer
      </div>
    </q-footer> -->
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const navList = [
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

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {

    return {
      navLinks: navList,
      theme: 'main',
      textSize: 'md'
    }
  },

created() {
    this.theme = {
      label: 'Orange',
      value:'orange',
      icon: 'las lasquare',
      color: '#FF8C00'
    }
    this.textSize = 'md'
  }
})

</script>
