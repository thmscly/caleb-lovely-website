<template>
  <nav>
    <div class="mobile-header">
      <button class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a id="mobile-logo" href="/">
        <img src="../assets/lovely-logo.png" alt="" style="height: 5em; width: auto" />
      </a>
    </div>
    <div class="nav-links">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/schedule">Schedule</RouterLink>
      <a id="logo" href="/">
        <img src="../assets/lovely-logo.png" alt="" style="height: 5em; width: auto" />
      </a>
      <RouterLink to="/music">Music</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
    <div class="mobile-menu" :class="{ open: isMenuOpen }">
      <RouterLink to="/" @click="toggleMenu">Home</RouterLink>
      <RouterLink to="/about" @click="toggleMenu">About</RouterLink>
      <RouterLink to="/music" @click="toggleMenu">Music</RouterLink>
      <RouterLink to="/contact" @click="toggleMenu">Contact</RouterLink>
    </div>

  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'


const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  top: 0;
  height: auto;
}

.nav-links {
  display: none;
}

.mobile-header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1em;
  position: relative;
}

#mobile-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

#mobile-logo img {
  height: 5em;
  width: auto;
  filter: invert(1);
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5em;
  height: 3em;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  margin-left: .5em;
  padding: .75em;
  place-self: flex-start;
  color: rgb(255, 255, 255);
  background-color: rgb(195 195 195);
  border-radius: .25em;
}

.hamburger span {
  width: 100%;
  height: 3px;
  background: #242424;
  border-radius: 2px;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 1000;
}

.mobile-menu.open {
  display: flex;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    font-family: 'Long Cang', cursive;
    font-size: 1.75em;
  }

  .nav-links a,
  .nav-links a:any-link {
    color: rgba(250, 214, 165, 0.938);
    text-decoration: underline;
  }



  #logo {
    filter: invert(1);
  }

  #logo:hover {
    background-color: transparent;
  }

  .hamburger {
    display: none;
  }

  .mobile-menu {
    display: none !important;
  }

  .mobile-header {
    display: none !important;
  }
}
</style>
