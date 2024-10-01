
<style src="./login-button.css"></style>
<script src="./login-button.js"></script>

<template>
  <client-only placeholder="Login">
    <a v-if="img" class="nav-link clickable login-link" :href="url">
      <img :src="img" />
    </a>
    <a v-else class="btn-trial btn-analytics-demo analytics-green nav-link clickable" href="https://go.kpaehs.com/login">Login</a>
  </client-only>
</template>
