<style src="./nav.css"></style>
<script src="./nav.js"></script>

<template>
  <div class="page-nav-container">
    <div class="page-nav" :class="{fixed:fixed,'fixed-in':fixedIn,'fixed-out':fixedOut}">
      <div class="body">
        <h1 class="text-4xl ml-4">🌐 Smart Living</h1>
        <div style="flex:1;"></div>
        <ul class="nav-links mr-4">
          <li>
            <!-- <div>
              <a class="cart" href="/account">
                <img src="/cart.svg" class="h-12" alt="account icon" />
                <span class="bottom-right text-white text-sm rounded-md bg-green-500 px-1">236</span>
              </a>
            </div> -->
            <a class="cart" href="/rewards">
              <span class="text-white text-md rounded-md bg-green-500 p-2
                shadow-sm text-3xl hover:shadow-lg
                -mt-4
              ">236 Pts</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="page-nav-placeholder" v-if="fixed"></div>
  </div>
</template>
