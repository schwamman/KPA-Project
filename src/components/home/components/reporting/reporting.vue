
<style scoped>
  .cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2vw;
    margin: 10vh 0;

    @media (max-width:  1200px) {
      margin: 5vh 0;
      grid-template-columns: 1fr;
    }

    .col {
      display:flex;
      align-items: center;
      align-content: center;
    }
  }
</style>

<template>
  <div class="body">
    <div class="cols">
      <div class="col">
        <graphic></graphic>
      </div>
      <div class="col">
        <overview></overview>
      </div>
    </div>
  </div>
</template>

<script>
  import Graphic from "./images/graphic.vue";
  import Overview from "./overview.vue";

  export default {
    components: {
      graphic: Graphic,
      overview: Overview,
    }
  }
</script>
