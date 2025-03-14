<template>
  <div class="show-card">
    <div>
      <h2>{{ formatDate(show.date) }}</h2>
      <h3 style="text-decoration: underline;">{{ show.venue }}</h3>
      <h4>{{ show.city }}, {{ show.state }}</h4>
    </div>
    <div class="show-card-buttons">
      <button>
        <a :href="show.ticketLink" target="_blank">
          Get Tickets
        </a>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Show } from '@/types/Show'
import { Icon } from '@iconify/vue'

defineProps<{
  show: Show
}>()

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  return utcDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
</script>

<style scoped>
.show-card {
  background-color: rgba(85, 82, 80, 0.254);
  border-radius: 2%;
  padding: 2em;
  display: flex;
  flex-direction: column;
}


.show-card-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}
</style>
