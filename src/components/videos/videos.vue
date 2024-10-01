
<style>
  .videos-section {
    clear:both;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3vw;
    grid-row-gap: 40px;
    margin: 10vh 0;
    text-align: center;
    @media (max-width:  767px) { grid-template-columns: 1fr; }

    .video {
      display: block;
      cursor: pointer;
      padding: 2rem;
      transition:all 200ms ease-in-out;
      box-shadow: 0 0 12px rgba(0,0,0,0.1);
      background-color:#FFF;

      &:hover {
        box-shadow: 0 0 18px rgba(0,0,0,0.2);
      }

      .icon {
        img {
          width:100%;
        }
      }

      h2 {
        font-size:2.4rem;
        line-height: 2.5rem;
        margin:1rem 0;
      }

      p {
        font-weight: 200;
        font-size:1.4rem;
        line-height:1.5rem;
        margin:0 0 1rem;
      }

      @media (max-width:  767px) {
        h2 { font-size: 1.5rem; line-height: 1.5rem; }
        p { font-size: 1rem; line-height: 1rem; margin-top:5px; }
      }
    }
  }
</style>

<template>
  <div class="body">
    <div class="videos-section">
      <div class="video">
        <wistia-link videoId="5gd5x5v44l">
          <client-only>
            <picture v-lozad :data-iesrc="require('./images/kpa-ehs-in-60-seconds-video.jpg')" data-alt="KPA Flex in 60 seconds">
              <source type="image/jpeg" srcset="./images/kpa-ehs-in-60-seconds-video.jpg" />
              <noscript><img src="./images/kpa-ehs-in-60-seconds-video.jpg" title="KPA Flex in 60 Seconds" alt="KPA Flex in 60 seconds" /></noscript>
            </picture>
          </client-only>
        </wistia-link>
        <h2>KPA Flex in 60 Seconds</h2>
        <p>Watch this quick overview of the KPA Flex system.</p>
      </div>
      <div class="video">
        <wistia-link videoId="gjnymzc8xq">
          <client-only>
            <picture v-lozad :data-iesrc="require('./images/kpa-ehs-in-5-minutes-video.jpg')" data-alt="KPA Flex in 10 Minutes">
              <source type="image/jpeg" srcset="./images/kpa-ehs-in-5-minutes-video.jpg" />
            </picture>
          </client-only>
        </wistia-link>
        <h2>10 Minute Walk-through</h2>
        <p>Watch this walk-through of the KPA Flex system.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import YoutubeLink from "./youtube-link.vue";
  import WistiaLink from "./wistia-link.vue";

  export default {
    components: {
      'youtube-link': YoutubeLink,
      'wistia-link': WistiaLink,
    }
  }
</script>
