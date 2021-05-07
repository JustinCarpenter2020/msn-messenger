import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class MessagesService {
  async getMessages(id) {
    const res = await api.get('api/messages/' + id)
    AppState.messages = res.data
    AppState.to = id
    logger.log(res.data)
  }

  async sendMessage(message) {
    const res = await api.post('api/messages', message)
    logger.log(res.data)
    // AppState.messages.push(res.data)
    // this.getMessages(message.to)
  }
}

export const messagesService = new MessagesService()
