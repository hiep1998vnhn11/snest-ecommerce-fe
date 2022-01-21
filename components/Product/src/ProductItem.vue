<template>
  <div class="product">
    <div class="product-content">
      <div class="product-content-image">
        <img v-lazy="`images/product.jpeg?id=${item}`" />
      </div>
    </div>
    <div class="product-info">
      <div class="product-info-name">123</div>
      <div class="product-info-badge">123</div>
      <div class="product-info-price">123</div>
      <div class="product-info-description">123</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'ProductItem',
  props: {
    item: {
      type: Number,
      default: 1,
    },
  },
  setup() {
    return {}
  },
})
</script>
<style lang="scss" scoped>
.product {
  width: 100%;
  min-height: 100px;
  padding: 1rem;
  background: #fff;
  border-radius: 2px;
  &:hover {
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  }
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 1/1;
    &-image {
      img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
      }
    }
  }
}
</style>
