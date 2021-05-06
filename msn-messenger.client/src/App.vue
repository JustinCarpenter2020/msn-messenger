<template>
  <header>
    <!-- <Navbar /> -->
  </header>
  <main class="background">
    <router-view />
  </main>
  <footer class="bg-dark">
    <div class="mb-1">
      <button class="logo" data-toggle="modal" data-target="#windowModal">
        <!-- windows logo -->
      </button>
    </div>
    <div class="d-flex">
      <WindowsModal />
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.background{
  background-image: url('http://i.imgur.com/VvNhMb0.jpg');
  background-size: cover;
  background-repeat: none;
  overflow: hidden;
}
.logo{
  background-image: url('https://iconape.com/wp-content/files/ve/352537/png/Windows_Start_Button-logo.png');
  background-size: cover;
  background-position: center;
  width: 10rem;
  height: 3rem;
  padding-top: 10px;
}
</style>
