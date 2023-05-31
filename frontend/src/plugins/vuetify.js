/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 340,
      md: 540,
      lg: 800,
      xl: 1280,
    },
  },
  theme: {
    themes: {
      light: {
        dark:false,
        colors: {
          primary: '#0544e8',
          primaryDark: '#020541',
          btnBlack: '#35363B',
          darkGrey: '#2c2d3c',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#EF4242',
          info: '#2196F3',
          success: '#1CC966',
          warning: '#FB8C00',
          inputBG: '#fcfcfc',
          selectedBlue: '#1251fc',
          white: '#fff',
        },
      },
    },
  },
})
