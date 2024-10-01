
<style src="./row.css"></style>
<script src="./row.js"></script>

<template>
  <div class="customer-logos-row">
    <div v-if="visible" class="customer" v-for="src in srcs">
      <logo :src="src"></logo>
    </div>
  </div>
</template>
