import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import MessageSchema from '../models/Message'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Message = mongoose.model('Message', MessageSchema)
}

export const dbContext = new DbContext()
