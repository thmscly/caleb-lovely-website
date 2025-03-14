<template>

  <!-- instagram
  tiktok
  facebook
  spotify (in middle)
  apple Music
  youtube -->
  <div class="social-links">
    <a href="https://www.instagram.com/caleblovely/" target="_blank" class="link">
      <Icon icon="mdi:instagram" color="white" width="35" height="35" />
    </a>
    <a href="https://www.tiktok.com/@caleblovelymusic" target="_blank" class="link">
      <Icon icon="simple-icons:tiktok" color="white" width="35" height="35" />
    </a>
    <a href="https://open.spotify.com/artist/588OniOrJFEKU5hWUDJ6V7?si=7yg3ubdyRSynaaxH2mZH7A" target="_blank"
      class="link">
      <Icon icon="mdi:spotify" color="white" width="35" height="35" />
    </a>
    <a href="https://open.spotify.com/artist/588OniOrJFEKU5hWUDJ6V7?si=7yg3ubdyRSynaaxH2mZH7A" target="_blank"
      class="link">
      <Icon icon="simple-icons:applemusic" color="white" width="35" height="35" />
    </a>
    <a href="https://www.youtube.com/@calovely" target="_blank" class="link">
      <Icon icon="mdi:youtube" color="white" width="35" height="35" />
    </a>
  </div>
  <!-- <div class="social-links">
    <a v-for="link in links"
       :key="link.url"
       :href="link.url"
       target="_blank"
       class="link">
      <Icon :icon="link.icon" color="white" width="35" height="35" />
    </a>
  </div> -->

</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.social-links {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  gap: 2em;
  background-color: rgb(0 0 0 / 66%);
  height: 5vh;
}
</style>
