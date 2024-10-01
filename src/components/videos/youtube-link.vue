
<style>
  .youtube-modal {
    position: fixed;
    z-index: 2000;
    animation: youtube-modal-bg-in 500ms ease-in-out;
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
      animation: youtube-modal-popup-in 350ms ease-in-out;
      animation-fill-mode: forwards;

      .iframe-container {
        position: relative;
        padding-bottom: 56.25%;

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @keyframes youtube-modal-bg-in {
    from { background-color:rgba(0,0,0,0); }
    to { background-color:rgba(0,0,0,0.4); }
  }

  @keyframes youtube-modal-popup-in {
    from { transform: translateY(-100px); opacity: 0; }
    to   { transform: translateY(0);      opacity: 1; }
  }
</style>

<template>
  <div>
    <a class="icon btn-analytics-youtube" :href="href" @click.stop.prevent="open = true">
      <slot></slot>
    </a>
    <div class="youtube-modal" v-if="open" @click="open = false">
      <div class="popup">
        <div class="iframe-container">
          <iframe :src="src" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // https://stackoverflow.com/a/8260383/193896
  function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }

  export default {
    props: ["href"],
    data () {
      var videoId = youtube_parser(this.href);
      return {
        open: false,
        src: "https://www.youtube.com/embed/"+videoId+"?autoplay=1"
      };
    }
  }
</script>
