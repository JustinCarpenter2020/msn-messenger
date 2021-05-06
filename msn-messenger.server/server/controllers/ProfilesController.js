import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { profileService } from '../services/ProfileService'

export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllProfiles)
  }

  async getAllProfiles(req, res, next) {
    try {
      return res.send(await profileService.getAllProfiles())
    } catch (error) {
      next(error)
    }
  }
}
