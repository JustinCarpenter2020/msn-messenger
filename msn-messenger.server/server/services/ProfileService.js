import { dbContext } from '../db/DbContext'

class ProfileService {
  async getAllProfiles(query = {}) {
    return await dbContext.Account.find(query)
  }
}

export const profileService = new ProfileService()
