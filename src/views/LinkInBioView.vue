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
          <h2>INSTAGRAM</h2>
        </a>
        <a href="https://www.tiktok.com/@caleblovelymusic" target="_blank" class="link">
          <Icon icon="simple-icons:tiktok" class="icon" />
          <H2>TIKTOK</H2>
        </a>
        <a href="https://open.spotify.com/artist/588OniOrJFEKU5hWUDJ6V7?si=7yg3ubdyRSynaaxH2mZH7A" target="_blank"
          class="link">
          <Icon icon="mdi:spotify" class="icon" />
          <h2>SPOTIFY</h2>
        </a>
        <a href="https://open.spotify.com/artist/588OniOrJFEKU5hWUDJ6V7?si=7yg3ubdyRSynaaxH2mZH7A" target="_blank"
          class="link">
          <Icon icon="simple-icons:applemusic" class="icon" />
          <h2>APPLE MUSIC</h2>
        </a>
        <a href="https://www.youtube.com/@calovely" target="_blank" class="link">
          <Icon icon="mdi:youtube" class="icon" />
          <h2>YOUTUBE</h2>
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
  gap: 1rem;
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

h2 {
  color: white;
  margin: 0;
  display: none;
}

@media screen and (min-width: 768px) {
  h2 {
    display: block;
  }

  .social-links {
    width: 50vw;
  }
}

@media screen and (max-width: 767px) {
  .social-links {
    width: 90vw;
  }

  .link {
    height: 3.5em;
  }
}
</style>
