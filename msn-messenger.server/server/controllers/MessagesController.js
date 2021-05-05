import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { messageService } from '../services/MessageService'

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
      return res.send(await messageService.createMessage(req.body))
    } catch (error) {
      next(error)
    }
  }
}
