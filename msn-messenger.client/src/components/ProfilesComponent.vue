<template>
  <p title="start a message" class="usernames" @click="toggleTo">
    {{ profileProp.name }}
  </p>
</template>

<script>
import { AppState } from '../AppState'
export default {
  name: 'ProfilesComponent',
  props: { profileProp: { type: Object, required: true } },
  setup(props) {
    return {
      async toggleTo() {
        AppState.to = props.profileProp.id
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.usernames:hover{
  text-decoration: underline;
  cursor: pointer;
}
</style>
