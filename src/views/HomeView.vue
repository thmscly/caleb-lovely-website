<template>
  <section class="landing">
    <div class="landing-content">
      <HelloWorld msg="Caleb Lovely" font="home" />
      <h2 class="subtitle">New Album Coming Spring 2025</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<style scoped>
.landing {
  height: 100vh;
  width: 100vw;
  margin-top: -10vh;
  background-image: url(/src/assets/lovely-guitar.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.landing::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.landing-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  width: 85%;
}


.title {
  font-size: 5em;
  font-weight: semi-bold;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 2.0rem;
  font-weight: 300;
}
</style>
