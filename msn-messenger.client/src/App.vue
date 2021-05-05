<template>
  <header>
    <Navbar />
  </header>
  <main class="background">
    <router-view />
  </main>
  <footer class="bg-dark">
    <div>
      <button data-toggle="modal" data-target="#windowModal">
        windows logo
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
}
</style>
