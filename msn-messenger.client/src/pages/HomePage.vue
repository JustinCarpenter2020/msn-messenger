<template>
  <div class="window" id="window" v-if="state.user.isAuthenticated">
    <div class="bar">
      <div class="bar__top">
        <img class="logo" src="https://images.vectorhq.com/images/previews/4f8/msn-messenger-icon-psd-449180.png">
        <div class="contact">
          <div class="username">
            Somebody that I used to know
          </div>
          <div class="mood">
            missing the good ol' days &#60;feeling.nostalgic@hotmail.com&#62;
          </div>
        </div>
      </div>
      <div class="bar__bottom">
        <button class="action__button" title="Add a friend to the conversation">
          ➕
        </button>
        <button class="action__button" title="Share a file">
          🗂
        </button>
        <button class="action__button" title="Start a video call">
          🎥
        </button>
        <button class="action__button" title="Start a phone call">
          📞
        </button>
        <button class="action__button" title="Share some music">
          🎵
        </button>
        <button class="action__button" title="Start a game">
          🎲
        </button>
        <button class="action__button" title="Block user">
          🚷
        </button>
      </div>
    </div>
    <div class="container">
      <div class="item conversation" id="conversation">
        <!-- <p>Pierre says:</p>
        <p class="message">
          Hello?
        </p>
        <p>Pierre says:</p>
        <p class="message">
          Anyone still here?
        </p>
        <p class="nudge">
          You have just sent a nudge.
        </p> -->
        <p v-for="message in state.messages" :key="message.id">
          {{ message.body }}
        </p>
      </div>
      <div class="item img scroll">
        <div class="img__img">
          <div class="overflow" v-if="state.profiles">
            <ProfilesComponent v-for="profile in state.profiles" :key="profile.id" :profile-prop="profile" />
          </div>
        </div>
      </div>
      <div class="item send-message">
        <div class="send-message__buttons">
          <button class="send-message__button" title="Send an emoticon">
            😊
          </button>
          <button class="send-message__button" title="Send a wink">
            😉
          </button>
          <button class="send-message__button" id="nudge-button" title="Send a nudge">
            🥴
          </button>
          <button class="send-message__button" title="Send a voice message">
            📢
          </button>
          <button class="send-message__button" title="Change the font">
            🔤
          </button>
          <button class="send-message__button" title="Change text color">
            🎨
          </button>
          <button class="send-message__button" title="Send an image">
            🏞
          </button>
          <button class="send-message__button" title="Send a gift">
            🎁
          </button>
        </div>
        <form @submit.prevent="sendMessage" class="send-message__textfield">
          <textarea v-model="state.newMessage.body"></textarea>
          <div class="buttons">
            <button type="submit">
              <u>S</u>end
            </button>
            <button>Sea<u>r</u>ch</button>
          </div>
        </form>
        <div class="send-message__infos">
          Last message received at 2:00 PM on 12/16/2006.
        </div>
      </div>
      <div class="item img">
        <div class="img__img">
          <img src="http://2.bp.blogspot.com/_r1kMibaacEs/TLVQgzYP33I/AAAAAAAAJXk/j8T-F70lTQ8/s320/Windows+Live+Messenger+2011+v15.4.3502.922+FINAL+%28Espa%C3%B1ol%29.jpg">
        </div>
      </div>
      <div class="footer">
        <a href="#">Play the new MSN Messenger games</a>
      </div>
    </div>
  </div>

  <div class="nudge-text" id="nudge-text">
    <p class="nudge">
      You have just sent a nudge.
    </p>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { messagesService } from '../services/MessagesService'
import { logger } from '../utils/Logger'

export default {
  name: 'HomePage',
  setup() {
    const state = reactive({
      newMessage: {},
      profiles: computed(() => AppState.profiles.filter(p => p.id !== AppState.account.id)),
      loading: computed(() => AppState.loading),
      to: computed(() => AppState.to),
      user: computed(() => AppState.user),
      messages: computed(() => AppState.messages)
    })
    return {
      state,
      async sendMessage() {
        try {
          state.newMessage.to = state.to
          await messagesService.sendMessage(state.newMessage)
          state.newMessage = {}
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
* {
  font-family: sans-serif;
}
button {
  cursor: pointer;
}

.overflow{
  overflow: hidden;
}

.scroll{
     margin:4px, 4px;
                padding:4px;
                background-color: green;
                overflow-x: hidden;
                overflow-y: auto;
                text-align:justify;
}

.window {
  background-color: #E9F3F6;
  border: 1px solid #C4D5DF;
  border-radius: 2%;
  box-shadow: 2px 2px rgba(0,0,0,.3);
  height: 700px;
  margin: auto;
  width: 700px;
  transform-origin: center center;
}

.container {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 170px;
  grid-template-rows: 1fr 175px 10px;
  height: 570px;
  padding: 10px;
}

.item {
  border: 2px solid #D2DDE0;
  border-radius: 2px;
}

/* Top bar */
.bar {
  border: 0;
  grid-column: 1 / -1;
}
.bar__top {
  display: flex;
  padding: 10px;
}
.username {
  font-weight: bold;
  margin-bottom: 3px;
}
.logo {
  height: 100%;
  margin-right: 5px;
  width: 30px;
}
.mood {
  color: #989D9E;
  font-size: .9rem;
  letter-spacing: .5px;
}
.bar__bottom {
  background: rgb(247,253,255);
  background: linear-gradient(180deg, rgba(247,253,255,1) 0%, rgba(214,227,234,1) 50%, rgba(238,249,250,1) 100%);
  border-bottom: 1px solid #D2DDE0;
  border-top: 1px solid #D2DDE0;
  display: flex;
  height: 50px;
}
.action__button {
  background: transparent;
  border: 0;
  font-size: 1.5rem;
}
.action__button:active {
  background: #E9F3F6;
  outline: 1px solid #D2DDE0;
}

/* Profile pictures */
.img {
  background-color: #FAFBFD;
  /* max-height: 150px; */
  padding: 10px;
}
.img__img {
  border: 1px solid #E4EBE3;
  padding: 2px;
}
.img__img img {
  max-width: 100%;
}

/* Conversation area */
.conversation {
  background-color: #FAFBFD;
  overflow-y: auto;
  padding: 5px;
}
p {
  margin: 7px;
}
.message {
  margin-left: 20px;
}

/* Send message area */
.send-message {
  display: grid;
  grid-template-rows: 35px auto 23px;
  width: 100%;
}
.send-message__buttons {
  background: rgb(247,253,255);
  background: linear-gradient(180deg, rgba(247,253,255,1) 0%, rgba(214,227,234,1) 50%, rgba(238,249,250,1) 100%);
  border-bottom: 1px solid #D2DDE0;
  display: flex;
}
.send-message__button {
  background: transparent;
  border: 0;
  font-size: 1.3rem;
}
.send-message__button:active {
  background: #E9F3F6;
  outline: 1px solid #D2DDE0;
}
.buttons {
  display: flex;
  flex-direction: column;
}
.buttons button {
  font-size: 1.05rem;
  margin: 5px;
  padding: 8px;
}
textarea {
  background-color: #FAFBFD;
  border: 0;
  padding-left: 8px;
  padding-top: 8px;
  resize: none;
  width: 100%;
}
.send-message__textfield {
  background-color: #FAFBFD;
  display: flex;
  justify-content: space-between;
}
.send-message__infos {
  align-items: center;
  background-color: #FBFBFF;
  border-top: 1px solid #D2DDE0;
  color: #8D8E88;
  display: flex;
  font-size: .85em;
  padding-left: 5px;
}

/* Bottom */
.footer {
  font-size: .9rem;
  font-weight: bold;
  letter-spacing: .8px;
  grid-column: 1 / -1;
}
.footer a  {
  color: #30343A;
  text-decoration: none;
}

/* Nudge */
.nudge-text {
  display: none;
}
.nudge {
  margin: 10px 0 20px 5px;
  position: relative;
}
.nudge:after {
  border-top: 1px solid black;
  content: "";
  left: 0;
  position: absolute;
  top: 25px;
  width: 60px;
}

/* Inspired by https://github.com/elrumordelaluz/csshake */
.is-nudged {
  animation-name: nudge;
  animation-duration: 100ms;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite
}
@keyframes nudge {
 2% {
  transform:translate(-.5px, -1.5px) rotate(-.5deg)
 }
 4% {
  transform:translate(2.5px, 2.5px) rotate(.5deg)
 }
 6% {
  transform:translate(-1.5px, 1.5px) rotate(1deg)
 }
 8% {
  transform:translate(.5px, -.5px) rotate(1deg)
 }
 10% {
  transform:translate(2.5px, -.5px) rotate(1deg)
 }
 12% {
  transform:translate(1.5px, -.5px) rotate(1deg)
 }
 14% {
  transform:translate(-.5px, 2.5px) rotate(1deg)
 }
 16% {
  transform:translate(-1.5px, .5px) rotate(1deg)
 }
 18% {
  transform:translate(1.5px, 2.5px) rotate(-.5deg)
 }
 20% {
  transform:translate(2.5px, .5px) rotate(.5deg)
 }
 22% {
  transform:translate(-1.5px, -.5px) rotate(1deg)
 }
 24% {
  transform:translate(-.5px, 2.5px) rotate(-.5deg)
 }
 26% {
  transform:translate(1.5px, .5px) rotate(1deg)
 }
 28% {
  transform:translate(-.5px, 1.5px) rotate(.5deg)
 }
 30% {
  transform:translate(1.5px, -1.5px) rotate(.5deg)
 }
 32% {
  transform:translate(1.5px, 2.5px) rotate(-.5deg)
 }
 34% {
  transform:translate(.5px, .5px) rotate(.5deg)
 }
 36% {
  transform:translate(-1.5px, 2.5px) rotate(.5deg)
 }
 38% {
  transform:translate(-.5px, .5px) rotate(1deg)
 }
 40% {
  transform:translate(.5px, -.5px) rotate(1deg)
 }
 42% {
  transform:translate(.5px, -1.5px) rotate(-.5deg)
 }
 44% {
  transform:translate(.5px, -.5px) rotate(-.5deg)
 }
 46% {
  transform:translate(2.5px, .5px) rotate(1deg)
 }
 48% {
  transform:translate(1.5px, -1.5px) rotate(.5deg)
 }
 50% {
  transform:translate(1.5px, .5px) rotate(1deg)
 }
 52% {
  transform:translate(-1.5px, -1.5px) rotate(-.5deg)
 }
 54% {
  transform:translate(-.5px, -.5px) rotate(.5deg)
 }
 56% {
  transform:translate(2.5px, 1.5px) rotate(-.5deg)
 }
 58% {
  transform:translate(-1.5px, -1.5px) rotate(1deg)
 }
 60% {
  transform:translate(-.5px, -1.5px) rotate(-.5deg)
 }
 62% {
  transform:translate(2.5px, 2.5px) rotate(1deg)
 }
 64% {
  transform:translate(-.5px, 2.5px) rotate(-.5deg)
 }
 66% {
  transform:translate(2.5px, -.5px) rotate(1deg)
 }
 68% {
  transform:translate(-1.5px, -1.5px) rotate(1deg)
 }
 70% {
  transform:translate(1.5px, -.5px) rotate(-.5deg)
 }
 72% {
  transform:translate(2.5px, 2.5px) rotate(-.5deg)
 }
 74% {
  transform:translate(.5px, .5px) rotate(-.5deg)
 }
 76% {
  transform:translate(.5px, -.5px) rotate(-.5deg)
 }
 78% {
  transform:translate(-1.5px, -.5px) rotate(.5deg)
 }
 80% {
  transform:translate(.5px, .5px) rotate(.5deg)
 }
 82% {
  transform:translate(-1.5px, 2.5px) rotate(-.5deg)
 }
 84% {
  transform:translate(-1.5px, 2.5px) rotate(.5deg)
 }
 86% {
  transform:translate(2.5px, 2.5px) rotate(.5deg)
 }
 88% {
  transform:translate(-.5px, 2.5px) rotate(.5deg)
 }
 90% {
  transform:translate(-1.5px, 2.5px) rotate(1deg)
 }
 92% {
  transform:translate(-1.5px, -1.5px) rotate(1deg)
 }
 94% {
  transform:translate(.5px, 2.5px) rotate(1deg)
 }
 96% {
  transform:translate(-1.5px, -.5px) rotate(1deg)
 }
 98% {
  transform:translate(-1.5px, 2.5px) rotate(1deg)
 }
 0%,
 100% {
  transform:translate(0, 0) rotate(0)
 }
}

</style>
