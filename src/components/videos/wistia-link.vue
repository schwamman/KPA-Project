
<style>
  .wistia-modal {
    position: fixed;
    z-index: 2000;
    animation: wistia-modal-bg-in 500ms ease-in-out;
    animation-fill-mode: forwards;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display: flex;
    align-items: center;
    justify-content: center;

    .popup {
      background-color:#000;
      width:100%;
      max-width:900px;
      animation: wistia-modal-popup-in 350ms ease-in-out;
      animation-fill-mode: forwards;

      .iframe-container {
        position: relative;
        padding-bottom: 56.25%;

        .wistia_embed, iframe {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @keyframes wistia-modal-bg-in {
    from { background-color:rgba(0,0,0,0); }
    to { background-color:rgba(0,0,0,0.4); }
  }

  @keyframes wistia-modal-popup-in {
    from { transform: translateY(-100px); opacity: 0; }
    to   { transform: translateY(0);      opacity: 1; }
  }
</style>

<template>
  <div>
    <span class="icon" @click.stop.prevent="open = true">
      <slot></slot>
    </span>
    <div class="wistia-modal" v-if="open" @click="open = false">
      <div class="popup">
        <div class="iframe-container">
          <!-- <script :src="`https://fast.wistia.com/embed/medias/${videoId}.jsonp`" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script> -->
          <iframe :src="`//fast.wistia.net/embed/iframe/${videoId}?videoFoam=true&playerColor=FFFFFF&autoPlay=true`" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["videoId"],
    data () {
      return {
        open: false,
      };
    }
  }
</script>
