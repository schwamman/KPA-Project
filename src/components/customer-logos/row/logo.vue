
<style scoped>
  .logo-in {
    animation: logo-in 500ms ease-in-out;
  }

  @keyframes logo-in {
    from { opacity: 0; top:30%; }
    to   { opacity: 1; top:50%; }
  }

  .logo-out {
    animation: logo-out 500ms ease-in-out;
  }

  @keyframes logo-out {
    from { opacity: 1; top:50%; }
    to   { opacity: 0; top:70%; }
  }
</style>

<template>
  <div class="logo-box">
    <img v-for="img in images" :src="img.src" :class="{'logo-in':img.in, 'logo-out':img.out}" :alt="alt" :title="alt" />
  </div>
</template>

<script>
  import { last } from "lodash";
  export default {
    props: ["src"],
    data () {
      return {
        images: [ { src: this.src }]
      };
    },
    computed: {
      alt(){
        return this.src.replace(/.*\//, "").replace(/-/g, " ").replace(/\..*$/, "").replace(/\w\S*/g, function(txt){
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      }
    },
    watch: {
      src (newSrc, oldSrc) {
        var oldImg = last(this.images);
        if (oldImg) {
          oldImg.in = false;
          oldImg.out = true;
        }
        var newImg = { src: newSrc, in:true };
        this.images.push(newImg);
        setTimeout(() => {
          newImg.in = false;
          this.images = [newImg];
        }, 500);
      }
    }
  }
</script>
