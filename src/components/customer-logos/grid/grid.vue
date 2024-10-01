
<style>
  .customer-logos-grid-container {
    margin:10vh 0;

    h2 {
      font-size:2.2rem;
      text-align: center;
      margin-bottom:20px;
      letter-spacing: normal;
      font-weight: 200;
      text-transform: uppercase;
      color:#aaa;

      @media (max-width:479px) {
        font-size:1.3rem;
      }
    }

    .customer-logos-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      width:100%;

      @media (max-width:479px) { grid-template-columns: 1fr 1fr 1fr; }

      > div {
        padding:0 15px;
        text-align: center;

        img {
          width:100%;
          max-width:120px;
        }
      }
    }
  }

</style>

<template>
  <div class="body customer-logos-grid-container">
    <h2>We work with the best</h2>
    <div class="customer-logos-grid">
      <div v-for="logo in logos">
        <img :src="logo.src" :alt="alt(logo.src)" />
      </div>
    </div>
  </div>
</template>

<script>
  import logos from "../logos";

  export default {
    data () {
      return {
        logos
      }
    },
    methods: {
      alt(src){
        return src.replace(/.*\//, "").replace(/-/g, " ").replace(/\..*$/, "").replace(/\w\S*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      }
    }
  }
</script>
