
<style type="text/css" src="./articles-list.css"></style>

<template>
  <div class="articles-list">
    <h1 v-html="tag.name"></h1>

    <ul>
      <li v-for="post in sortedPosts">
        <a :href="'/help/'+post.slug"><span v-html="post.title"></span> »</a>
      </li>
    </ul>

  </div>
</template>

<script>
  import sortBy from "lodash/sortBy";

  export default {
    props: ["tag", "posts"],
    computed: {
      sortedPosts () {
        return sortBy(this.posts, "title").filter(post => {
          return post.slug.indexOf('with-iscout') < 0
        });
      }
    }
  }
</script>
