<template>
  <div class="carousel">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="carousel-item"
      :class="{
        active: currentIndex === index,
        'carousel-item--prev': isPrevious(index),
        'carousel-item--next': isNext(index),
      }"
    >
      <img :src="item.image" width="100%" height="100%" />
    </div>
    <div class="carousel-actions previous" @click="previous"><</div>
    <div class="carousel-actions next" @click="next">></div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  computed,
} from '@nuxtjs/composition-api'
import type { CarouselItem } from './types'
export default defineComponent({
  name: 'Carousel',
  props: {
    items: {
      type: Array as PropType<CarouselItem[]>,
      required: true,
    },
  },
  setup(props) {
    const currentIndex = ref(0)
    const total = computed(() => props.items.length)
    const next = () => {
      currentIndex.value++
      if (currentIndex.value >= total.value) {
        currentIndex.value = 0
      }
    }
    const previous = () => {
      currentIndex.value--
      if (currentIndex.value < 0) {
        currentIndex.value = total.value - 1
      }
    }

    const isNext = (index: number) => {
      if (currentIndex.value === total.value - 1 && index === 0) {
        return true
      }
      return index === currentIndex.value + 1
    }
    const isPrevious = (index: number) => {
      if (currentIndex.value === 0 && index === total.value - 1) {
        return true
      }
      return index === currentIndex.value - 1
    }
    return {
      currentIndex,
      next,
      previous,
      isNext,
      isPrevious,
    }
  },
})
</script>
<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  min-height: 300px;
  border-radius: 5px;
  &:hover {
    .carousel-actions {
      opacity: 0.7;
      transition: opacity 0.2s;
    }
  }
  &-actions {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 50px;
    width: 40px;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0.4;
    color: #fff;
    cursor: pointer;
    transition: opacity 0.2s;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &-hover {
      opacity: 1;
      transition: opacity 0.2s;
    }
    &.previous {
      left: 0;
    }
    &.next {
      right: 0;
    }
  }
  &-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    display: flex;
    opacity: 0;
    &--prev {
      transform: translateX(-100%);
      transition: all 0.3s ease-in-out;
    }
    &--next {
      transform: translateX(100%);
      transition: all 0.3s ease-in-out;
    }
    &.active {
      transition: all 0.3s ease-in-out;
      transform: translateX(0);
      opacity: 1;
    }
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
