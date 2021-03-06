import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { messageService } from '../services/MessageService'
import socketService from '../services/SocketService'

export class MessagesController extends BaseController {
  constructor() {
    super('api/messages')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:to', this.getMessages)
      .post('', this.createMessage)
  }

  async getMessages(req, res, next) {
    try {
      const messageObj = {
        $and: [
          { $or: [{ to: req.params.to }, { from: req.params.to }] },
          { $or: [{ to: req.userInfo.id }, { from: req.userInfo.id }] }
        ]
      }
      return res.send(await messageService.getMessages(messageObj))
    } catch (error) {
      next(error)
    }
  }

  async createMessage(req, res, next) {
    try {
      req.body.from = req.userInfo.id
      const message = await messageService.createMessage(req.body)
      message.creator = req.userInfo
      socketService.messageUser(req.body.to, 'new:message', message)
      socketService.messageUser(req.body.from, 'new:message', message)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
