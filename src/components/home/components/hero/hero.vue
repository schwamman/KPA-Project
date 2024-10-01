
<style src="./hero.css"></style>

<template>
  <div class="hero-banner">
    <div class="hero-devices">
      <img class="img-training" src="./computer-based-training-app.svg" alt="Computer-Based Training App" />
      <img class="img-reporting" src="./ehs-bbs-reporting-app.svg" alt="EHS / BBS Reporting App" />
    </div>
    <div class="body">
      <h1>Reporting and training<br />for your <span class="nobr">whole team</span></h1>
      <p>KPA Flex is easy-to-use safety <span class="nobr">management software.</span></p>
      <div class='buttons'>
        <a
          href="https://www.kpa.io/ehs-software"
          class="btn-main btn-analytics-demo analytics-blue"
        >
          Learn More
        </a>
        <a
          href="https://meetings.hubspot.com/dagenb"
          class="btn-demo btn-main btn-analytics-demo analytics-blue"
          @mouseover="confetti(true)"
          @mouseout="confetti(false)"
          @click.prevent.stop="$refs.modal.show()"
        >
          Schedule a Demo
        </a>
        <a
            href="/help"
            class="btn-main btn-analytics-demo analytics-blue"
        >
          Contact Support
        </a>
      </div>
      <p style="margin-top:30px;" v-if="deal && dealTimeFrame" v-html="deal + '<br/>' + dealTimeFrame +'.' " />
    </div>
    <hubspot-form ref="modal" formId="1f0b074a-c9ce-48ee-93c3-9343ebc295a1" :values="{adwords_deal: deal}">
      <h2 class="h1">Schedule a Demo</h2>
      <p>Please fill out this form, and we'll contact you to setup a KPA Flex demo and begin your free trial.</p>
      <p v-if="deal && dealTimeFrame" v-html="deal + '<br/>' + dealTimeFrame +'.' " />
      <p v-if="deal && dealTimeFrame" style="font-size:.8em;">Offer only valid for new KPA Flex customers. Offer cannot be compounded with other discounts.</p>
    </hubspot-form>
  </div>
</template>

<script>
import 'src/services/confetti';
import HubspotForm from 'src/components/hubspot-form-modal/hubspot-form-modal.vue';

export default {
  props: ['deal', 'dealTimeFrame'],
  methods: {
    confetti(on) {
      if (window.innerWidth <= 480 && on) return;
      window.confetti[on ? 'restart' : 'stop']();
    },
  },
  components: {
    HubspotForm,
  },
};
</script>
