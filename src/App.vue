<template>
  <header>
    <NavBar />
  </header>
  <RouterView />
  <footer>
    <SocialsBar />
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import SocialsBar from '@/components/SocialsBar.vue'
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  line-height: 1.5;
  row-gap: .25em;
  height: 20vh;
  width: 100vw;
  max-width: 100vw;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #141414f0;
}

footer {
  position: sticky;
  bottom: 0;
  z-index: 2;
  background-color: transparent;
}

@media screen and (min-width: 768px) {
  header {
    background-size: 20%;
  }

}
</style>
