
<style src="./about-menu.css"></style>
<script src="./about-menu.js"></script>

<template>
  <div class="about-menu">
    <div class="about-menu-sections">
      <div class="about-menu-section" v-for="column in columns">
        <div class="section-icon">
          <a :href="column.url"><img v-lozad :data-src="column.icon" :alt="column.title" :title="column.title" /></a>
        </div>
        <div class="section-body">
          <h3 v-if="column.url" class="linked"><a :href="column.url">{{column.title}}</a></h3>
          <h3 v-else>{{column.title}}</h3>

          <ul class="about-menu-links">
            <li v-for="l in column.links"><a :href='l.url'>{{l.title}}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

