import { dbContext } from '../db/DbContext'

class MessageService {
  async getMessages(query = {}) {
    return await dbContext.Message.find(query).populate('creator')
  }

  async createMessage(message) {
    // TODO populate creator
    return await dbContext.Message.create(message)
  }
}

export const messageService = new MessageService()
