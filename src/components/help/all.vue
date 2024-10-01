
<template>
    <div class="body">
      <iscout-breadcrumbs :links="breadcrumbs"></iscout-breadcrumbs>
    </div>

    <categories-page
      v-if="post || tag"
      :tags="tags"
      :tag="tag"
    >
      <template v-if="isReady">
        <article-body v-if="post" :post="post"></article-body>
        <articles-list v-else :tag="tag" :posts="posts"></articles-list>
      </template>
      <loading v-else>
      </loading>

    </categories-page>

    <index-page v-else
                :ready="isReady"
                :tags="tags"
                :posts="allHelpPosts"
    ></index-page>
</template>

<script setup>
  import { ref, computed, nextTick } from 'vue';
  import IndexPage from "./index/index.vue";
  import CategoriesPage from "./categories/categories.vue";
  import ArticlesList from "./articles-list/articles-list.vue";
  import ArticleBody from "./article/article.vue";
  import IscoutBreadcrumbs from 'src/components/breadcrumbs/breadcrumbs.vue'
  import useHelpArticles from './composables/use-help-articles';
  import loading from 'src/components/loading.vue';

  const articles = useHelpArticles();
  const tag = ref(undefined);
  const post = ref(undefined);
  const posts = ref(undefined);
  const tags = ref([]);

  const processArticles = () => {
    const route = window.location.pathname.replace('/help/', '');
    const requestSlug = (route||"").replace(/\//g, '');
    post.value = articles.value.posts.find(p => p.slug === requestSlug);
    tag.value = articles.value.tags.find(t => t.slug === requestSlug);
    const allHelpPosts = articles.value.posts.filter(p => (p.category.slug === 'help') || !!(p.categoryIds || []).includes("help"));
    tags.value = articles.value.tags.filter(tag => {
      return allHelpPosts.find(a => a.tags.find(t => t.id === tag.id));
    });

    // Gather posts (careful, all of this is downloaded)
    if (post.value) {
      posts.value = null;
    } else {
      if(tag.value){
        posts.value = allHelpPosts
          .filter(p => p.tags.find(t => t.id === tag.value.id))
          .map(p => { return { title: p.title, slug: p.slug }; });
      }else{
        posts.value = null;
        tags.value = tags.value.map(t1 => {
          const tagPosts = allHelpPosts.filter(p => p.tags.find(t2 => t1.id === t2.id));
          t1.numberOfPosts = tagPosts.length;
          t1.posts = tagPosts;
          return t1;
        });
      }
    }
  };

  const isReady = computed(() => {
    if (!articles?.value?.hash) {
      return false;
    }

    processArticles();

    // resize container
    nextTick(() => {
      window.dispatchEvent(new Event('resize'));
    });

    return true;
  });

  const breadcrumbs = computed(() => {
    if (!isReady.value) {
      return [];
    }

    const isRoot = !tag.value && !post.value;
    return [
      {label:'KPA Flex',url:'/'},
      {label:isRoot ? 'Help & Support' : 'Help',url:'/help'},
      (
        tag.value
          ? {
            label: tag.name,
            url:'/help/'+tag.value.slug,
          }
          : (
            post.value && post.value.tags.length
              ? {
                label: post.value.tags[0].name,
                url: '/help/' + post.value.tags[0].slug,
              }
              : null
          )
      ),
      (
        post.value
          ? {
            label:post.value.title,
            url:post.value.url
          }
          : null
      )
    ];
  });
</script>
