
<template>
  <div>
    <hero :deal="deal" :dealTimeFrame="dealTimeFrame"></hero>
    <logos-row></logos-row>
    <stats></stats>
  </div>
</template>

<script>
import Hero from "./components/hero/hero.vue";
import Stats from "./components/stats/stats.vue";
import Reporting from "./components/reporting/reporting.vue";
import Training from "./components/training/training.vue";
import Modules from "./components/modules/modules.vue";
import Videos from "src/components/videos/videos.vue";
import LogosRow from 'src/components/customer-logos/row/row.vue';

export default {
  props: ["dealTimeFrame","deal"],
  components: {
    hero: Hero,
    stats: Stats,
    reporting: Reporting,
    training: Training,
    modules: Modules,
    LogosRow,
    Videos,
  },
};
</script>
