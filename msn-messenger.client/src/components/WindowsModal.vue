<template>
  <div class="modal"
       id="windowModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
       data-backdrop=""
  >
    <div class="modal-dialog position" role="document">
      <div class="modal-content">
        <div class="">
          <button type="button" class="close mr-2 text-light" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-0">
          <div class="row p-0 h-100">
            <div class="col-8">
              <div class="card h-100">
                <div class="card-body">
                  <div class="row">
                    <div class="col-12 mt-2">
                      <p> <i class="fas fa-cut"></i> Snipping Tool</p>
                    </div>
                    <div class="col-12 mt-2">
                      <p><i class="fas fa-calculator"></i> Calculator</p>
                    </div>
                    <div class="col-12 mt-2">
                      <p><i class="fab fa-windows"></i> Media Center</p>
                    </div>
                    <div class="col-12 mt-2">
                      <p><i class="fas fa-sticky-note"></i> Sticky Notes</p>
                    </div>
                    <div class="col-12 mt-2">
                      <p><i class="fas fa-palette"></i> Paint</p>
                    </div>
                    <div class="col-12 mt-2">
                      <p><i class="fas fa-search"></i> Magnify</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row mt-3">
                    <div class="col-12">
                      <details>
                        <summary>All Programs</summary>
                      </details>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-12">
                      <input type="text" class="w-90" placeholder="Search Programs And Files">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 opacity">
              <div class="row text-light">
                <div class="col-12 mt-3 pl-0">
                  <p>Music</p>
                </div>
                <div class="col-12 mt-3 pl-0">
                  <p>Pictures</p>
                </div>
                <div class="col-12 mt-3 pl-0">
                  <p>Games</p>
                </div>
                <div class="col-12 mt-3 pl-0">
                  <p>Documents</p>
                </div>
                <div class="col-12 mt-3 pl-0">
                  <p>Help and Support</p>
                </div>
                <div class="col-12 mt-3 pl-0">
                  <p>Windows Security</p>
                </div>
                <div class="col-12 mt-5">
                  <button
                    class="btn btn-outline-primary text-uppercase"
                    @click="login"
                    v-if="!user.isAuthenticated"
                  >
                    Login
                  </button>
                  <button class="btn btn-outline-primary text-uppercase" @click="logout" v-else>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'WindowsModal',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.position {
  position: fixed;
  bottom: 50px;
  left: 0;
  margin: 0;
}

.col-12:hover{
border: .5px solid black;
}

.opacity{
  opacity: .80;
  }

.modal-content{
  background-color: #565656;
  width: 30vw;
 height: 60vh;
}

.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.blue{
  background-color: #00a2ed;
}
</style>
