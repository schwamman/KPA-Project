
<template>
  <div class="p-12">
    <h1 class="text-4xl">Smart Living 🌎</h1>
    <table class="border rounded-lg">
      <tr>
        <td></td>
      </tr>
    </table>
    <!-- <hero :deal="deal" :dealTimeFrame="dealTimeFrame"></hero>
    <logos-row></logos-row>
    <stats></stats> -->
  </div>
</template>

<script>
// import Hero from "./components/hero/hero.vue";

export default {
  props: ["dealTimeFrame","deal"],
  components: {
    // hero: Hero,
  },
};
</script>
