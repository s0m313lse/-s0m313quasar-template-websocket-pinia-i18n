import { defineStore } from 'pinia'

export const useAppStore = defineStore('appstore', {
  // convert to a function
  state: () => ({
    theme: {code: 'main', label: 'Default'},
    locale: {code: 'en-US', label: 'English US'},
    text_size: {code: 'md', label: 'Medium'}
  }),

  actions: {

    getThemes () { return Object.keys(themes) },

    setTheme (label) {
      const code = themes[label].code 
      document.body.setAttribute('data-theme', code)
      this.theme = themes[label] 
    },

    getTextSizes () { return Object.keys(text_sizes) },

    setTextSize (label) {
      const code = text_sizes[label].code 
      document.body.setAttribute('data-text-size', code)
      this.text_size = text_sizes[label] 
    },

    getLocales () { return Object.keys(locales) },

    getLocaleCode (label) { return locales[label].code },

    setLocale (label) {
      const code = locales[label].code 
    //   this.$i18n.locale = code
      this.locale = locales[label] 
    }
  }
})

const themes = {
  'Default': {code: 'main', label: 'Default'},
  'Alpine': {code: 'alpine', label: 'Alpine'},
  'Forest': {code: 'forest', label:'Forest'},
  'Greyscale': {code: 'greyscale', label: 'Greyscale'},
  'Orange': {code: 'orange', label: 'Orange'}
}

const text_sizes = {
  'Small': {code: 'sm', label: 'Small'},
  'Medium': {code: 'md', label: 'Medium'},
  'Large': {code: 'lg', label:'Large'},
  'Extra Large': {code: 'xl', label: 'Extra Large'}
}

const locales = {
    'French': {code: 'fr', label: 'French'},
    'English US': {code: 'en-US', label: 'English US'}
  }
  

