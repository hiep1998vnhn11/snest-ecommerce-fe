<template>
  <div>
    <div class="row">
      <div class="col-sm-8 col-xs-12">
        <Carousel :items="carouselItems" />
      </div>
      <div class="col-sm-4 col-xs-12">
        <div class="image-container">
          <img src="/images/slide4.jpeg" />
        </div>
      </div>
    </div>
    <div></div>
    <ProductList />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  useRoute,
  useStore,
  unref,
  inject,
  ref,
} from '@nuxtjs/composition-api'
import { useBattery } from '@vueuse/core'
import useToggle from '@/hooks/common/useToggle'
import Navigation from '@/components/Navigation.vue'
import Card from '@/components/Card/Card.vue'
import Icon from '@/components/Icon.vue'
import FlatList, { useFlatList } from '@/components/FlatList'
import Carousel, { CarouselItem } from '@/components/Carousel'
import { ProductList } from '@/components/Product'
export default defineComponent({
  components: {
    Navigation,
    Card,
    Icon,
    FlatList,
    Carousel,
    ProductList,
  },
  setup() {
    const store = useStore()
    const { charging } = useBattery()
    const [isOpen, toggle] = useToggle(false)
    const user = computed(() => store.getters['user/user'])
    const appName = inject('appName')
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // const { test } = useFlatList()

    const carouselItems = ref<CarouselItem[]>([
      {
        id: '1',
        title: 'title1',
        description: 'description1',
        image: '/images/slide1.jpeg',
        url: '/images/slide1.jpeg',
      },
      {
        id: '2',
        title: 'title1',
        description: 'description1',
        image: '/images/slide2.jpeg',
        url: '/images/slide2.jpeg',
      },
      {
        id: '3',
        title: 'title1',
        description: 'description1',
        image: '/images/slide3.jpeg',
        url: '/images/slide3.jpeg',
      },
    ])
    return {
      test: 123,
      charging,
      isOpen,
      toggle,
      user,
      appName,
      data,
      carouselItems,
    }
  },
})
</script>
<style lang="scss" scoped>
.image-container {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
