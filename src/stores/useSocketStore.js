import { defineStore } from "pinia"
import { store } from './todoStore'

export const useSocketStore = defineStore({
  id: "socket",
  state: () => ({
    socket: {},
    isConnected: false,
    message: "",
    reconnectError: false,
    heartBeatInterval: 50000,
    heartBeatTimer: 0
  }),
  actions: {
    SOCKET_ONOPEN(event) {
      console.log("successful websocket connection")
      this.socket = event.currentTarget
      this.isConnected = true
      this.heartBeatTimer = window.setInterval(() => {
        const message = 'heartbeat message'
        this.isConnected &&
          this.socket.sendObj({
            code: 200,
            msg: message
          })
      }, this.heartBeatInterval)
    },
    SOCKET_ONCLOSE(event) {
      this.isConnected = false
      window.clearInterval(this.heartBeatTimer);
      this.heartBeatTimer = 0;
      console.log('socket disconnected' + new Date());
      console.log(event)
    },
    SOCKET_ONERROR(event: any) {
      console.error(event)
    },
    SOCKET_ONMESSAGE(message: any) {
      this.message = message;
    },
    SOCKET_RECONNECT(count: any) {
      console.info('Reconnecting: attempt # ', count)
    },
    SOCKET_RECONNECT_ERROR() {
      this.reconnectError = true
    }
  }
})

export function useSocketStoreWithOut() {
  return useSocketStore(store)
}