<script setup lang="ts">
const props = defineProps<{
  msg: string
  font: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 :class="{
      'home-header': props.font === 'home',
      'page-header': props.font === 'page'
    }">
      {{ props.msg }}
    </h1>
  </div>
</template>

<style scoped>
.greetings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;
  row-gap: 1rem;
}

.home-header {
  font-weight: 200;
  font-size: 3.5em;
  letter-spacing: 0.125em;
  font-family: "Permanent Marker", serif;
  font-weight: 300;
  font-style: oblique;
  filter: drop-shadow(2px 5px 2px rgba(121, 68, 3, 0.47));
}

.page-header {
  font-weight: 150;
  font-size: 2em;
  font-family: "Permanent Marker", serif;
  font-weight: 300;

  filter: drop-shadow(2px 5px 2px rgba(121, 68, 3, 0.47));
}

h3 {
  font-size: 1.5rem;
}


.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  .home-header {
    font-weight: 150;
    font-size: 8em;
    letter-spacing: 0.125em;
    font-family: "Permanent Marker", serif;
    font-weight: 300;

    filter: drop-shadow(2px 5px 2px rgba(70, 39, 1, 0.855));
  }
}
</style>
