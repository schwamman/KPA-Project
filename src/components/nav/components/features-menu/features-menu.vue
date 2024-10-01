
<style src="./features-menu.css"></style>

<template>
  <div class="features-menu">
    <div class="features-menu-sections">
      <div class="features-menu-section" v-for="node in featureNodes">
        <div class="section-icon">
          <a :href="node.url"><img v-lozad :data-src="node.icon" :alt="node.title" :title="node.title" /></a>
        </div>
        <div class="section-body">
          <h3 v-if="node.url" class="linked"><a :href="node.url">{{node.title}} »</a></h3>
          <h3 v-else>{{node.title}}</h3>

          <ul class="features-menu-links">
            <li v-for="n in node.children"><a :href='n.url'>{{n.title}}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="features-menu-footer">
      Need a quick run-through?
      <a class="btn" href="/schedule-a-demo">
        Schedule a Demo
      </a>
      <span class="btn" @click="$refs.modal.show()">
        Download Overview
      </span>
      <iscout-hubspot-form-modal ref="modal" formId="75a189cd-213d-4a27-8808-60e08ff39c56"></iscout-hubspot-form-modal>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["featureNodes"],
    computed: {
      formId () {
        const cookiz = this.$nuxt.$cookies.get("adWordsOffer");
        if (!cookiz) return "64e8af4c-cf06-4985-b554-516f21f5108c";
        return cookiz.formId; 
      }
    }
  }
</script>
