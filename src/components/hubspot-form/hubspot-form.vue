
<script src="./hubspot-form.js"></script>
<style src="./client/hubspot-standalone.css"></style>
<style src="./client/hubspot-style.css"></style>
<style type="less" src="./client/custom.css"></style>

<template>
  <div class="iscout-hubspot-form standalone-form" :class="{'iscout-hubspot-form-large':mode==='large' || mode==='thin', thin: mode==='thin'}">
    <slot></slot>
    <div v-show="!loading" :class="id"></div>
    <div v-show="loading" class="hubspot-form-loading">
      <img src="./client/loading.svg" />
    </div>
  </div>
</template>

