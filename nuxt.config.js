import { join } from 'path'
import { config } from 'dotenv'

const env = config()

export default {
  mode: 'universal',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  /*
   ** Environment variables
   */
  env: {
    ...env.parsed,
    githubUrl: process.env.GITHUB_URL || 'https://github.com/davybolivar',
    linkedinUrl:
      process.env.LINKEDIN_URL || 'https://www.linkedin.com/in/davybolivar',
    angellistUrl:
      process.env.ANGELLIST_URL || 'https://angel.co/davy-jones-bolivar',
    itchUrl: process.env.ITCH_URL || 'https://supernaught.itch.io/'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: ['~/assets/fonts/jetbrainsmono.css', '~/assets/icons/icons.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/sanitize',
    '~/plugins/vee-validate',
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~plugins/vue-scroll-reveal.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: env.parsed.API_URL
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    postcss: {
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js')
      }
    },
    analyze: false,
    transpile: ['vee-validate/dist/rules']
  }
}
