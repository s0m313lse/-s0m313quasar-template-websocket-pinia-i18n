import { defineStore } from 'pinia'

export const useUserStore = defineStore('userstore', {
  // convert to a function
  state: () => ({
    user: {
      name: 'user',
      logged_in: false,
      roles: []
    },
    theme: 'main',
    locale: 'en-US',
    text_size: 'md'
  })
})
