<template>
  <section class="landing">
    <div class="landing-content">
      <h1 class="title">Welcome</h1>
      <p class="subtitle">Your Journey Starts Here</p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.landing {
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}


.landing-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 300;
}
</style>
