import { AppState } from '../AppState'
import { SocketHandler } from '../utils/SocketHandler'
// import { messagesService } from './MessagesService'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('create:post', this.createMessage)
      .on('message:user', this.messageUser)
      .on('new:message', this.messageUser)
  }

  createMessage(payload) {
    console.log('create message', payload)
    AppState.messages = [...AppState.messages, payload]
  }

  async messageUser(payload) {
    // debugger
    console.log('message user', payload)
    // await messagesService.getMessages(payload.to)
    // await messagesService.getMessages(payload.from)

    AppState.messages.push(payload)
    console.log('AppState messaage user', AppState.messages)
  }

  connected(payload) {
    console.log('connected', payload)
  }

  authenticate(token) {
    this.socket.emit('authenticate', token)
  }
}

export const socketService = new SocketService()
