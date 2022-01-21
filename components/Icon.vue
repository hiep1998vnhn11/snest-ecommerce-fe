<template>
  <div>
    {{ iconPath }}
    <img :src="iconPath" :width="size" style="color: red" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: '#000',
    },
  },
  setup(props) {
    const iconPath = computed(() => '/ionicons/' + props.name + '.svg')
    return {
      iconPath,
    }
  },
})
</script>
<style lang="scss" scoped></style>
