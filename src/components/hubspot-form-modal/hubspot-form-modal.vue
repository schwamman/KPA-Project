
<style src="./hubspot-form-modal.css"></style>

<template>
  <div v-if="open" class="hubspot-form-modal" @click="open = false">
    <div class="popup" @click.stop>
      <img class="btn-close" src="./btn-close.svg" @click="open = false" />
      <hubspot-form
        :formId="formId"
        :goToWebinarWebinarKey="goToWebinarWebinarKey"
        :values="values"
        mode="large"
      >
        <slot></slot>
      </hubspot-form>
    </div>
  </div>
</template>

<script>
import HubspotForm from 'src/components/hubspot-form/hubspot-form.vue';
export default {
  props: ["formId", "goToWebinarWebinarKey", "values"],
  data() {
    return {
      open: false
    };
  },
  mounted() {
    document.body.appendChild(this.$el);
  },
  methods: {
    show() {
      this.open = true;
    }
  },
  components: {
    HubspotForm,
  },
};
</script>
