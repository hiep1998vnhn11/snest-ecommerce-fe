<template>
  <transition
    name="fade"
    enter-active-class="fadeIn"
    move-class="fade-move"
    leave-active-class="fadeOut"
  >
    <slot></slot>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    return {}
  },
})
</script>
<style lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  animation-name: fadeIn;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  animation-name: fadeOut;
}

.fade-move {
  transition: transform 0.6s ease-out;
}
</style>
