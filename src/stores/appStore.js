import { defineStore } from 'pinia'

export const useAppStore = defineStore('appstore', {
  // convert to a function
  state: () => ({
    theme: 'default',
    locale: {value: 'en-US', label: 'English US'},
    text_size: 'md'
  }),

  actions: {

    getThemes () {
      const temp = Object.keys(themes).map((i) => {
        return themes[i]
      })
      console.log('store themes: ' + JSON.stringify(temp))
      return temp
    },
    setTheme (value) {
      document.body.setAttribute('data-theme', value)
      this.theme = value
      console.log('set theme value is: ' + JSON.stringify(value)) 
    },

    getTextSizes () {
      const temp = Object.keys(text_sizes).map((i) => {
        return text_sizes[i]
      })
      console.log('store text sizes: ' + JSON.stringify(temp))
      return temp
    },

    setTextSize (value) {
      document.body.setAttribute('data-text-size', value)
      this.text_size = value
    },

    getLocales () { 
      const temp = Object.keys(locales).map((i) =>{
        return locales[i]
      })
      console.log('locales: ' + JSON.stringify(temp))
      return temp
    },

    getLocaleCode (label) { return locales[label].value },

    setLocale (value) {
      this.locale = locales[value] 
    }
  }
})

const themes = {
  'default': {value: 'default', label: 'Default'},
  'alpine': {value: 'alpine', label: 'Alpine'},
  'forest': {value: 'forest', label:'Forest'},
  'greyscale': {value: 'greyscale', label: 'Greyscale'},
  'orange': {value: 'orange', label: 'Orange'}
}

const text_sizes = {
  'sm': {value: 'sm', label: 'Small'},
  'md': {value: 'md', label: 'Medium'},
  'lg': {value: 'lg', label:'Large'},
  'xl': {value: 'xl', label: 'Extra Large'}
}

const locales = {
    'fr': {value: 'fr', label: 'Francais'},
    'en-US': {value: 'en-US', label: 'English US'}
  }
  

