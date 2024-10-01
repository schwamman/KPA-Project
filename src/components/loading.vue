<template>
  <div class="loading-container">
    <img
      src="/public/loading.svg"
      class="loading-img"
    />
  </div>
</template>

<style scoped>
.loading-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-img {
  display: block;
  max-width: 300px;
  min-width: 100px;
  object-fit: contain;
}
</style>
