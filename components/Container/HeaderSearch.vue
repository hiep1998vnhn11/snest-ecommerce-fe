<template>
  <div class="header">
    <div class="container">
      <div class="header-logo">123</div>
      <div class="header-search">
        <div class="header-search-title">123123</div>
        <div class="header-search-input" v-click-outside="handleClickOutside">
          <input @focus="onFocusSearchInput" />
          <button class="btn header-search-input-btn">123123</button>
          <div v-if="visible" class="header-search-input-result">
            <div v-for="n in 10" :key="n">n</div>
          </div>
        </div>
        <ul class="header-search-suggest">
          <li>Trái cây</li>
          <li>Thịt, trứng</li>
          <li>Rau củ quả</li>
          <li>Sữa, bơ, phô mai</li>
          <li>Hải sản</li>
          <li>Gạo, mì ăn liền</li>
          <li>Đồ uống, bia rượu</li>
          <li>Bánh kẹo</li>
        </ul>
      </div>
      <div class="header-auth"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'HeaderSearch',
  setup() {
    const visible = ref(false)
    const handleClickOutside = () => {
      visible.value = false
    }
    const onFocusSearchInput = () => {
      visible.value = true
    }
    return {
      visible,
      onFocusSearchInput,
      handleClickOutside,
    }
  },
})
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  height: $header-search-height;
  width: 100%;
  top: 0;
  left: 0;
  background-color: $color-primary-light;
  color: #fff;
  font-size: $font-size-sm;
  padding: 12px 0;
  z-index: 999;
  .container {
    display: flex;
  }
  @media screen and (max-width: $breakpoint-sm) {
    &-search {
      display: none;
    }
    &-auth {
      display: none;
    }
  }
  &-search {
    flex: 1;
    padding: 0 12px;
    &-input {
      position: relative;
      input {
        width: 100%;
        height: 40px;
        border: none;
        background-color: #fff;
        font-size: $font-size-base;
        color: #222;
        border-radius: 2px;
        padding: 0 12px;
        outline: none;
      }
      &-btn {
        position: absolute;
        right: 12px;
      }
      &-result {
        position: absolute;
        width: 100%;
        max-height: 700px;
        background: #fff;
        color: #222;
        top: 100%;
      }
    }
    &-suggest {
      display: flex;
      list-style: none;
      li {
        padding: 8px;
      }
    }
  }
  &-logo {
    width: 140px;
  }
  &-auth {
    width: 140px;
  }
}
</style>
