<template>
  <div class="card">
    <div v-if="ribbon" class="card-ribbon">
      <div class="card-ribbon-text">{{ ribbon }}</div>
    </div>
    <div class="card-title">
      <slot name="title">
        <h3>Card Title</h3>
      </slot>
    </div>
    <div class="card-content">
      <slot>
        <p>Card Content</p>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    ribbon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    imageAlt: {
      type: String,
      default: '',
    },
    imagePosition: {
      type: String,
      default: 'top',
    },
    imageWidth: {
      type: String,
      default: '100%',
    },
    imageHeight: {
      type: String,
      default: '100%',
    },
  },
  setup(props) {
    const ribbonRef = computed(() => props.ribbon)
    return {
      ribbonRef,
    }
  },
})
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: 500px;
  min-height: 300px;

  .card-ribbon {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 150px;
    height: 150px;
    background-color: transparent;
    font-size: 0.75rem;
    font-weight: bold;
    text-align: center;
    line-height: 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 10px;
      height: 10px;
      background-color: red;
      bottom: 5px;
    }
    &::before {
      content: '';
      position: absolute;
      right: 5px;
      width: 10px;
      height: 10px;
      background-color: red;
      top: 0;
    }
    &-text {
      position: absolute;
      width: 150%;
      height: 40px;
      background-color: red;
      border-radius: 0.5rem;
      transform: rotate(-45deg) translateY(-24px);
      color: white;
      font-size: 1.5rem;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
