<template>
  <div
    :class="{
      row: row,
      [listClass]: true,
    }"
  >
    <div
      :class="{
        row: row,
        [listClass]: true,
      }"
    >
      <component
        :is="itemTag"
        v-for="(item, index) in data"
        :key="index"
        :class="itemClass"
      >
        <slot name="item" :item="item" :index="index">
          <div class="item">
            {{ item }}
          </div>
        </slot>
      </component>
    </div>
    <slot name="footer">
      <div>Footer</div>
    </slot>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  onMounted,
  onUnmounted,
  ref,
  unref,
} from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    row: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    itemTag: {
      type: String as PropType<'div' | 'p' | 'span'>,
      default: 'div',
    },
    itemClass: {
      type: String,
      default: 'flat-list-item',
    },
    listClass: {
      type: String,
      default: 'flat-list',
    },
    intersectClass: {
      type: String,
      default: 'visible',
    },
    threshold: {
      type: Number,
      default: 0,
    },
    lasItemThreshold: {
      type: Number,
      default: 0,
    },
  },
  emits: ['intersected'],
  setup(props) {
    const observer = ref<IntersectionObserver>()
    const lastItemObserver = ref<IntersectionObserver>()

    const refreshLastItemObserver = () => {
      const lastItem = document.querySelector(
        `.${props.listClass} .${props.itemClass}:last-child`
      )
      lastItem && lastItemObserver.value?.observe(lastItem)
    }
    const removeLastItemObserver = () => {
      const lastItem = document.querySelector(`.${props.itemClass}:last-child`)
      lastItem && lastItemObserver.value?.unobserve(lastItem)
    }
    onMounted(() => {
      observer.value = new IntersectionObserver((entries) => {
        entries.forEach(
          (entry) => {
            if (entry.isIntersecting) {
              const { target } = entry
              target.classList.add(props.intersectClass)
            } else {
              const { target } = entry
              target.classList.remove(props.intersectClass)
            }
          },
          {
            threshold: props.threshold,
          }
        )
      })
      lastItemObserver.value = new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (entry.isIntersecting) {
                const { target } = entry
                console.log('is display')
              } else {
                const { target } = entry
                console.log('remove is display')
              }
            },
            {
              threshold: props.threshold,
            }
          )
        },
        {
          threshold: props.lasItemThreshold,
        }
      )

      const elementItems = document.querySelectorAll(`.${props.itemClass}`)
      elementItems.forEach((item) => {
        observer.value?.observe(item)
      })
      refreshLastItemObserver()
    })

    onUnmounted(() => {
      const elementItems = document.querySelectorAll(`.${props.itemClass}`)
      elementItems.forEach((item) => {
        observer.value?.unobserve(item)
      })
      removeLastItemObserver()
    })
    return {}
  },
})
</script>
<style lang="scss" scoped>
.flat-list {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  &.row {
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: auto;
  }
  &-item {
    opacity: 0;
    &.visible {
      opacity: 1;
    }
  }
}
</style>
