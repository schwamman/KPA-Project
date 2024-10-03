<style src="./nav.css"></style>
<script src="./nav.js"></script>

<template>
  <div class="page-nav-container">
    <div class="page-nav" :class="{fixed:fixed,'fixed-in':fixedIn,'fixed-out':fixedOut}">
      <div class="body mt-3">
        <h1 class="text-3xl ml-4 font-extrabold" style="color: #5C5C5C">♻️ Smart Living</h1>
        <div style="flex:1;"></div>
        <ul class="nav-links mr-4">
          <li>
            <!-- <div>
              <a class="cart" href="/account">
                <img src="/cart.svg" class="h-12" alt="account icon" />
                <span class="bottom-right text-white text-sm rounded-md bg-green-500 px-1">236</span>
              </a>
            </div> -->
            <a class="cart" href="/logout">
              <span style="background-color: #5C5C5C" class="text-white text-md rounded-md py-2 px-4
                shadow-sm text-xl hover:shadow-lg
                -mt-4
              ">Logout</span>
            </a>
          </li>
        </ul>
       
      </div>
      <div class="nav-links-pill mt-4">
        <ul class="flex flex-row w-4/5 m-auto pt-3.5">
          <li class="flex-auto"><a href="/">Home</a></li>
          <li class="flex-auto">・</li>
          <li class="flex-auto"><a href="/">Purchase History</a></li>
          <li class="flex-auto">・</li>
          <li class="flex-auto"><a href="/rewards">Rewards</a></li>
          <li class="flex-auto">・</li>
          <li class="flex-auto"><a href="/account">Account</a></li>
          <li class="flex-auto">・</li>
          <li class="flex-auto"><a href="/rewards">🪙 215</a></li>
        </ul>
      </div>
    </div>
    <div class="page-nav-placeholder" v-if="fixed"></div>
  </div>
</template>

/* Group 8 */

