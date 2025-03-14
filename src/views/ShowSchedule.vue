<template>
  <BaseLayout backgroundImage="/path/to/your/image.jpg" title="Tour Schedule">
    <div class="schedule-container">
      <ShowList :shows="tourShows" />
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import ShowList from '@/components//Shows/ShowList.vue'
import type { Show } from '@/types/Show'

const tourShows = ref<Show[]>([
  {
    date: '2025-02-27',
    venue: 'Bessie Smith Cultural Center',
    city: 'Chattanooga',
    state: 'TN',
    ticketLink: 'https://www.bessiesmithcc.org/event-details/tennessee-songwriters-chattanooga-showcase'
  },
  {
    date: '2025-03-14',
    venue: 'The Listening Room',
    city: 'Nashville',
    state: 'TN',
    ticketLink: 'https://www.listeningroomcafe.com/nashville-shows#!/ERIC-VAN-HOUTEN-JOSH-MELTON-&-CALEB-LOVELY/p/723854868'
  }

  // Add more shows as needed
])
</script>

<style scoped>
.schedule-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  padding: 2rem;
}
</style>
