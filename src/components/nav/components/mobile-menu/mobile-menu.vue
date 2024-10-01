
<style scoped src="./mobile-menu.css"></style>

<template>
  <div>
    <div class="popup-bg" @click="$emit('close')"></div>
    <div class="popup" @click.stop>
      <div class="contents">
        <div class="mobile-header">
          <img class="logo" src="/public/kpa-ehs-logo.svg" alt="KPA Flex Logo" />
          <div class="btn-close" @click="$emit('close')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" enable-background="new 0 0 42 42">
              <line x1="15" y1="15" x2="25" y2="25" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
              <line x1="25" y1="15" x2="15" y2="25" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
              <circle class="circle" cx="20" cy="20" r="19" opacity="0" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none"></circle>
              <path d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z" class="progress" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none"></path>
            </svg>
          </div>
        </div>
        <ul class="nav-links">
          <!-- <li><a class="nav-link" href="/">Home</a></li> -->
          <li><a class="nav-link" href="/help">Support</a></li>
          <li><a class="nav-link" href="https://go.kpaehs.com/login">Login</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
