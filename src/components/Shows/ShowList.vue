<template>
  <div class="tour-dates">
    <ShowCard v-for="show in shows" :key="show.date" :show="show" />
  </div>
</template>

<script setup lang="ts">
import type { Show } from '@/types/Show'
import ShowCard from './ShowCard.vue'

defineProps<{
  shows: Show[]
}>()
</script>

<style scoped>
.tour-dates {
  display: flex;
  flex-direction: column;
  gap: 2em;
}
</style>
