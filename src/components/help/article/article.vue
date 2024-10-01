
<style type="text/css" src="./article.css"></style>

<template>
  <div>
    <iscout-maybe-admin>
      <a style="border:solid 1px #eee; float:right; padding:8px 10px;" :href="'https://blog.kpaehs.com/wp-admin/post.php?post='+post.id+'&action=edit'">Edit</a>
    </iscout-maybe-admin>

    <h1 style="margin-top:0;" v-html="post.title"></h1>

    <div class="help-body" v-html="post.body">

    </div>

  </div>
</template>

<script>
  export default {
    props: ["post"]
  }
</script>
