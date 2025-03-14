<template>
  <div class="base-layout" :style="backgroundStyle">
    <section class="hero">
      <div class="hero-content">
        <slot name="hero">
          <h1>{{ title }}</h1>
        </slot>
      </div>
    </section>
    <main class="main-content">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  backgroundImage: string
  title?: string
}>()

const { backgroundImage, title } = props

const backgroundStyle = computed(() => ({
  backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('${backgroundImage}')`
}))
</script>

<style>
.base-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: -webkit-fill-available;
  padding: 5% 0;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: auto;
}

@media screen and (min-width: 768px) {
  .base-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .main-content {
    display: flex;
    justify-content: center;
    width: 85%;
    margin: 0 auto;
  }
}
</style>
