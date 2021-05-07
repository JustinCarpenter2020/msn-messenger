<template>
  <p title="start a message" class="usernames" @click="toggleTo">
    {{ profileProp.name }}
  </p>
</template>

<script>
import { messagesService } from '../services/MessagesService'
// import { socketService } from '../services/SocketService'

export default {
  name: 'ProfilesComponent',
  props: { profileProp: { type: Object, required: true } },
  setup(props) {
    return {
      async toggleTo() {
        // socketService.emit('JOIN_ROOM', { roomId: props.profileProp.id })
        await messagesService.getMessages(props.profileProp.id)
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
