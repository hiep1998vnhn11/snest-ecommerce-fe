<template>
  <div class="app">
    <HeaderSearch />
    <nuxt class="container app-container"></nuxt>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Header from '@/components/Container/Header.vue'
import HeaderSearch from '@/components/Container/HeaderSearch.vue'
export default defineComponent({
  middleware: 'app',
  components: {
    HeaderSearch,
  },
  setup() {},
})
</script>
