
<style>
  ol.breadcrumbs {
    margin:5vh 0;
    padding:0;
    color:#999;

    li {
      list-style: none;
      margin:0;
      padding:0;
      display:inline-block;

      a {
        border-bottom:0;
      }

      a:hover {
        color:#000;
      }

      .arrow {
        margin:0 4px 0 1px;
      }
    }
  }
</style>

<template>
  <ol class="breadcrumbs" v-if="filteredLinks && filteredLinks.length" vocab="https://schema.org/" typeof="BreadcrumbList">
    <template v-for="(link, i) in filteredLinks">
      <li property="itemListElement" typeof="ListItem">
        <a property="item" typeof="WebPage" :href="link.url">
          <span property="name" v-html="link.label"></span>
        </a>
        <meta property="position" :content="i+1">
        <span v-if="i !== filteredLinks.length-1" class="arrow">›</span>
      </li>
    </template>
  </ol>
</template>

<script>
  export default {
    props: {
      links: Array
    },
    data () {
      return {
        filteredLinks: (this.links||[]).filter(l => !!l)
      }
    }
  }
</script>
