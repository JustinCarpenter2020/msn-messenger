<template>
  <header>
  </header>
  <main class="background">
    <router-view />
  </main>
  <footer class="blue">
    <div class="">
      <button class="logo" data-toggle="modal" data-target="#windowModal">
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
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrn_GAGqFSlRTHATQ3jCFGtPEFbGzilPLE34MIYQ0iZGbsPfK3TLZCK68ywo6S-gPHRM&usqp=CAU');
  background-size: cover;
  background-position: center;
  width: 10rem;
  height: 3rem;
  padding-top: 10px;
}

.blue{
  background-color: #00a2ed;
}
</style>
