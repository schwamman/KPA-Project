<style>
</style>

<script setup>
import Nav from 'src/components/nav/nav.vue'
import Footer from "src/components/footer/footer.vue";
</script>

<template>
  <router-view v-slot="{ Component }"
                transition='fade'
                class="router-view"
  >
    <Nav></Nav>
    <transition
      mode="in-out"
      appear
    >
      <component :is="Component" />
    </transition>
    <Footer></Footer>
  </router-view>
</template>
