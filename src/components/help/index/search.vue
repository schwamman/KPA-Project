<template>
  <div class="search-container">
    <input @blur="clearInput" type="text" v-model.trim="query" placeholder="Search the docs" />
    <div v-if="matches" class="results">
      <a v-for="m in matches" :key="m.title" class="result" :href="m.url">
        <div>
          <span v-html="m.title"></span>
          <br />
          <ul class="tag-list">
            <li v-for="tag in m.tags" :key="tag.id" v-html="tag.name"></li>
          </ul>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import sim from "string-similarity";
export default {
  props: ["posts"],
  data() {
    return {
      query: ""
    };
  },
  computed: {
    matches() {
      const { posts = [], query } = this;
      if (!query) return;
      const weighted = posts.map(({ body, title, tags, url }) => {
        const bodyMatch = sim.compareTwoStrings(
          query.toLowerCase(),
          body.toLowerCase()
        );
        const titleMatch = sim.compareTwoStrings(
          query.toLowerCase(),
          title.toLowerCase()
        );
        const totalMatch = titleMatch * 2 + bodyMatch;
        return {
          match: totalMatch,
          body: body,
          title: title,
          tags: tags,
          preview: body.slice(0, 100),
          url: url
        };
      });
      const sorted = weighted.sort((a, b) => b.match - a.match);
      return sorted.slice(0, 10);
    }
  },
  methods: {
    clearInput(e) {
      if (e.relatedTarget !== null) return;
      this.query = "";
    }
  }
};
</script>

<style src="./search.css" scoped>

</style>
