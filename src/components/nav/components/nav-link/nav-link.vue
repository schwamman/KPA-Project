
<style src="./nav-link.css"></style>

<template>
  <div class="nav-link-container">
    <a class="nav-link" :href="href" @click="click">{{ title }}</a>
    <div class="nav-link-popup">
      <svg class="popup-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="10">
        <path stroke="#ffffff" d="m11.923069,6.575854l-3.803427,-0.019733c2.10666,-2.161105 1.696767,-2.259755 3.803427,0.019733z" stroke-width="7" />
      </svg>
      <div class="nav-link-popup-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["title", "href"],
    methods: {
      click (e) {
        if (this.href === "#"){
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      }
    }
  }
</script>
