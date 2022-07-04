import { boot } from 'quasar/wrappers'

import VueNativeSock from 'vue-native-websocket-vue3'

export default boot ( async({ app }) => {
  app.use(VueNativeSock, 'ws://localhost:3000', { 'format': 'json' })
})