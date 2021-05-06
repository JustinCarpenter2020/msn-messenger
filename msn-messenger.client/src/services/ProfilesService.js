import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class ProfilesService {
  async getAll() {
    try {
      const res = await api.get('api/profiles')
      AppState.profiles = res.data
      AppState.loading = false
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const profilesService = new ProfilesService()
