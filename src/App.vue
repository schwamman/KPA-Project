<style>
</style>

<script setup>
import Nav from 'src/components/nav/nav.vue'
</script>

<template>
  <router-view v-slot="{ Component }"
                transition='fade'
                class="router-view"
  >
    <Nav />
    <transition
      mode="in-out"
      appear
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>
