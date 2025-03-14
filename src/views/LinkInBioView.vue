<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';
import { Icon } from '@iconify/vue'
</script>

<template>
  <BaseLayout :backgroundImage="'src/assets/lovely-landing-photo-2.jpeg'" :title="'Links'">
    <template #hero>
    </template>
    <section>
      <div class="social-links">
        <a href="https://www.instagram.com/caleblovely/" target="_blank" class="link">
          <Icon icon="mdi:instagram" class="icon" />
        </a>
        <a href="https://www.tiktok.com/@caleblovelymusic" target="_blank" class="link">
          <Icon icon="simple-icons:tiktok" class="icon" />
        </a>
        <a href="https://open.spotify.com/artist/588OniOrJFEKU5hWUDJ6V7?si=7yg3ubdyRSynaaxH2mZH7A" target="_blank"
          class="link">
          <Icon icon="mdi:spotify" class="icon" />
        </a>
        <a href="https://open.spotify.com/artist/588OniOrJFEKU5hWUDJ6V7?si=7yg3ubdyRSynaaxH2mZH7A" target="_blank"
          class="link">
          <Icon icon="simple-icons:applemusic" class="icon" />
        </a>
        <a href="https://www.youtube.com/@calovely" target="_blank" class="link">
          <Icon icon="mdi:youtube" class="icon" />
        </a>
      </div>
    </section>
  </BaseLayout>
</template>

<style scoped>
.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50vw;
  margin: 0 auto;
  padding: 1rem;
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid white;
  border-radius: 8px;
  padding: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  height: 5em;
}

.link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.02);
}

.icon {
  width: 35px;
  height: 35px;
  color: white;
}
</style>
