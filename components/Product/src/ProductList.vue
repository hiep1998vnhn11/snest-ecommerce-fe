<template>
  <div class="row">
    <div v-for="n in 2000" :key="n" class="col-md-2 col-sm-3 col-xs-4 mt-1">
      <ProductItem :item="n" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ProductItem from './ProductItem.vue'
export default defineComponent({
  name: 'ProductList',
  components: {
    ProductItem,
  },
  setup() {
    return {}
  },
})
</script>
<style lang="scss" scoped></style>
