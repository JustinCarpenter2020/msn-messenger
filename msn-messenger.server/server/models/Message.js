import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Message = new Schema(
  {
    body: { type: String, required: true },
    to: { type: String, ref: 'Account', required: true },
    from: { type: String, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Message.virtual('creator', {
  localField: 'from',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Message
