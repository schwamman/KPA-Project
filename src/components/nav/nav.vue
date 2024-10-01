<style src="./nav.css"></style>
<script src="./nav.js"></script>

<template>
  <div class="page-nav-container">
    <div class="page-nav" :class="{fixed:fixed,'fixed-in':fixedIn,'fixed-out':fixedOut}">
      <div class="body">
        <a class="logo" href="/">
          <img src="/public/kpa-ehs-logo.svg" alt="KPA Flex Logo" />
        </a>
        <div style="flex:1;"></div>
        <div class="btn-show-mobile-menu" @click="showMobileMenu = true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 17" shape-rendering="geometricPrecision"><path d="M0 0h24v3H0zm0 7h24v3H0zm0 7h24v3H0z" fill-rule="evenodd"></path></svg>
        </div>
        <ul class="nav-links">
          <li>
            <a
              class="
                btn-trial
                btn-analytics-demo
                analytics-green
                nav-link
                clickable
              "
              href="/help"
            >
            Support
            </a>
          </li>

          <li>
            <client-only>
              <login-button></login-button>
            </client-only>
          </li>
        </ul>
      </div>
    </div>
    <div class="page-nav-placeholder" v-if="fixed"></div>
    <mobile-menu v-if="showMobileMenu" @close="showMobileMenu = false"></mobile-menu>
  </div>
</template>
