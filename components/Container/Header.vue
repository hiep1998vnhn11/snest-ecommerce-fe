<template>
  <nav class="header">
    <ul class="header-nav">
      <nuxt-link to="/" v-slot="{ isExactActive, navigate, href }" custom>
        <li class="header-nav-item" :class="{ active: isExactActive }">
          <a :href="href" @click="navigate"> Home </a>
        </li>
      </nuxt-link>
      <nuxt-link to="/about" v-slot="{ isExactActive, navigate, href }" custom>
        <li class="header-nav-item" :class="{ active: isExactActive }">
          <a :href="href" @click="navigate"> Home </a>
        </li>
      </nuxt-link>
      <nuxt-link
        to="/contact"
        v-slot="{ isExactActive, navigate, href }"
        custom
      >
        <li class="header-nav-item" :class="{ active: isExactActive }">
          <a :href="href" @click="navigate"> Home </a>
        </li>
      </nuxt-link>
      <nuxt-link to="/email" v-slot="{ isExactActive, navigate, href }" custom>
        <li class="header-nav-item" :class="{ active: isExactActive }">
          <a :href="href" @click="navigate"> Home </a>
        </li>
      </nuxt-link>
      <div class="cursor"></div>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Header',
  setup() {
    return {}
  },
})
</script>
<style lang="scss" scoped>
.header {
  height: $header-height;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-nav {
    display: flex;
    height: 100%;
    position: relative;
    .cursor {
      position: absolute;
      background: red;
      height: 4px;
      width: 50px;
      bottom: 0;
      border-radius: 2px;
      transition: transform 0.5s ease-in-out;
    }
    &-item {
      height: 100%;
      padding: 1rem;
      list-style: none;
      width: 100px;
      text-align: center;
      &:first-child.active ~ .cursor {
        transform: translateX(25px);
      }
      &:nth-child(2).active ~ .cursor {
        transform: translateX(125px);
      }
      &:nth-child(3).active ~ .cursor {
        transform: translateX(225px);
      }
      &:nth-child(4).active ~ .cursor {
        transform: translateX(325px);
      }
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
