
<style type="text/css" src="./categories.css"></style>

<template>
  <div class="body">
    <div class="body-copy">

      <div class="tags-layout">
        <div class="tags-layout-tags">
          <h3>CATEGORIES</h3>
          <ul class="tags">
            <li v-for="t in tags" :class="{active:tag && t.id === tag.id}">
              <a :href="'/help/'+t.slug" v-html="t.name"></a>
              <span v-if="tag && t.id === tag.id">»</span>
            </li>
          </ul>
        </div>
        <div class="tags-layout-content">
          <slot></slot>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: ["breadcrumb","tags","tag"],
    head () {
      return {
        title: "Help & Support | KPA Flex Knowledge Base"
      };
    },
    components: {
    }
  }
</script>
