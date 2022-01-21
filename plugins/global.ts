import { onGlobalSetup, provide } from '@nuxtjs/composition-api'

export default () => {
  onGlobalSetup(() => {
    provide('appName', 'nuxt-test-123')
  })
}
