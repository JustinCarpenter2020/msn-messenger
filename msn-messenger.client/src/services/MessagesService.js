import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class MessagesService {
  async getMessages() {
    const res = await api.get('api/messages/' + AppState.to)
    AppState.messages = res.data
  }

  async sendMessage(message) {
    const res = await api.post('api/messages', message)
    logger.log(res.data)
  //  this.getMessages()
  }
}

export const messagesService = new MessagesService()
