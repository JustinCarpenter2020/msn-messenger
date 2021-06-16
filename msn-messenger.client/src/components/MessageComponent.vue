<template>
  <div v-if="messageProp.creator">
    <div v-if="messageProp.creator.id == state.account.id">
      <p>
        you said:
      </p>
      <p>{{ messageProp.body }}</p>
    </div>

    <div v-else class="text-right">
      <p>{{ state.name[0] }} says:</p>
      <p>{{ messageProp.body }}</p>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'MessageComponent',
  props: { messageProp: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      name: props.messageProp.creator.name.split('@'),
      account: computed(() => AppState.account)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
