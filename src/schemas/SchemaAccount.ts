import mongoose, { Schema, Document } from 'mongoose'

export interface IAccount extends Document {
  id: string
  rol: string
  isActive: boolean
  password: string
  identificactionNumber: string
  email: string
  firstName: string
  lastName: string
}

const AccountSchema: Schema = new Schema({
  id: {
    type: String,
    unique: true,
    index: true
  },
  // Schema
  rol: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  identificactionNumber: {
    type: String,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  }
}, {
  collection: 'accounts',
  timestamps: { createdAt: 'date', updatedAt: false },
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: false
})

export default mongoose.model<IAccount>('Account', AccountSchema)
