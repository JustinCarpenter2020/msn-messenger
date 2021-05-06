import { AppState } from '../AppState'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('create:post', this.createMessage)
  }

  createMessage(payload) {
    console.log(payload)
    AppState.messages.push(payload)
  }

  authenticate(token) {
    this.socket.emit('authenticate', token)
  }
}

export const socketService = new SocketService()
