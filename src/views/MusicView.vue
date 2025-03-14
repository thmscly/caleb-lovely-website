<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';

const Videos = [
  { src: 'src/assets/lovely-couch.png', alt: 'Media 1' },
  { src: 'src/assets/lovely-guitar.png', alt: 'Media 2' },
  { src: 'src/assets/lovely-landing-photo-2.jpeg', alt: 'Media 3' },
  // Add more media items here
];
</script>

<template>
  <BaseLayout :backgroundImage="'src/assets/lovely-couch.png'" :title="'Music'">
    <template #hero>
    </template>
    <section class="media-gallery-container">

      <h2 class="media-gallery-header">Videos</h2>
      <div class="media-gallery">
        <div class="media-item" v-for="(media, index) in Videos" :key="index">
          <img :src="media.src" :alt="media.alt" />
        </div>
      </div>

      <h2 class="media-gallery-header">Songs</h2>
      <div class="media-gallery">
        <div class="media-item" v-for="(media, index) in Videos" :key="index">
          <img :src="media.src" :alt="media.alt" />
        </div>
      </div>

      <h2 class="media-gallery-header">Photos</h2>
      <div class="media-gallery">
        <div class="media-item" v-for="(media, index) in Videos" :key="index">
          <img :src="media.src" :alt="media.alt" />
        </div>
      </div>
    </section>
  </BaseLayout>
</template>

<style scoped>
.media-gallery-container {
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  align-items: stretch;
}

.media-gallery {
  display: grid;
  grid-template-columns: repeat(1, minmax(200px, 1fr));
  gap: 1.25rem;

  place-content: center;
}

.media-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.media-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.media-gallery-header {
  width: 75%;
  margin-top: 2em;
  margin-bottom: 0.5em;
  text-align: center;
}

@media (min-width: 1024px) {
  .media-gallery {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 1.5rem;
    place-content: center;
  }

  .media-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
  }

  .media-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}
</style>
