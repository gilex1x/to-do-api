import mongoose, { Schema, Document } from 'mongoose'
import { IAccount } from './SchemaAccount'

const uuid = require('uuid-base62')

export interface ISession extends Document {
  id: string
  user: IAccount['_id']
  isActive: boolean
  fechaCreacion: Date | null
  ultimaInteraccion: Date | null
}

const SessionSchema: Schema = new Schema({
  id: {
    type: String,
    unique: true,
    index: true,
    default: uuid.v4()
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Account'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastSession: {
    type: Date,
    default: null
  }
}, {
  collection: 'sessions',
  timestamps: { createdAt: 'date', updatedAt: false },
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: false
})

export default mongoose.model<ISession>('Session', SessionSchema)
