<style scoped type="text/css" src="./index.css"></style>

<template>
  <div class="body body-copy">
    <h1 style="text-align: center; margin-top:7vh; margin-bottom:50px;">
      Help & Support
    </h1>

    <section class='contact-summary'>
      Contact the KPA Flex Customer Support Center
      at
      <a href='mailto:support@kpaehs.com'>
        support@kpaehs.com
      </a>
      or
      <a href='tel:+1-833-497-2688;ext=1'>
        833-497-2688 (ext 1)
      </a>
    </section>

    <template v-if="ready">
      <Search :posts="posts" />
      <ul class="category-nav">
        <li
          class="select-category"
          :class="{'activeTag':!activeTag}"
          @click="activeTag = ''"
        >
          All
        </li>
        <li
          class="select-category"
          :class="{'activeTag':tag.name === activeTag}"
          v-for="tag in tags"
          :key="tag.name"
          v-html="tag.name"
          @click="activeTag = tag.name"
        ></li>
      </ul>
      <style></style>
      <div class="categories grid">
        <div v-for="tag in activeTags" :key="tag.slug" class="category">
          <h2 v-html="tag.name"></h2>
          <p v-html="tag.description"></p>
          <ul>
            <li class="posts" v-for="post in (tag.posts || []).filter(p => !skipPost.has(p.id))" :key="post.title">
              <a :href="'/help/'+post.slug">
                {{ post.title}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <loading v-else>
    </loading>
  </div>
</template>

<script>
import Search from "./search.vue";
import loading from 'src/components/loading.vue';

export default {
  components: {
    Search
  },
  data() {
    return {
      activeTag: "",
      skipPost: new Set([
        // legacy how to sync employees post
        // we want old links to work while keeping it unlisted
        785,
      ]),
    }
  },
  computed: {
    activeTags() {
      const {tags,activeTag} = this;
      if (activeTag === "") return tags;
      return tags.filter(t => activeTag === t.name);
    },
  },
  mounted() {
    this.setHeights();
  },
  methods: {
    setHeights() {
      const cats = document.getElementsByClassName("category");
      const setContainerHeight = () => {
        let totalHeight = 0;
        for (let cat of cats) {
          // add room for margin
          totalHeight += cat.offsetHeight + 70;
        }
        let width = window.innerWidth - 200;
        let columns = width / 350 >= 3 ? 3 : width / 310 >= 2 ? 2 : 1;
        let container = document.getElementsByClassName("categories")[0];
        let newHeight = totalHeight / columns + "px";
        if (container) {
          container.style.height = newHeight;
        }
      };

      window.addEventListener("resize", () => {
        setContainerHeight();
      });

      setContainerHeight();
    },
  },
  props: ["tags", "posts", "ready"],
  head() {
    return {
      title: "Help & Support | KPA Flex Knowledge Base"
    };
  },
  components: {
    loading,
  },
};
</script>

<style>
</style>
