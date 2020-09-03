import mongoose, { Schema, Document } from 'mongoose'

export interface IArrUser {
  _id: string
  name: string
}

export interface ITodo extends Document {
  id: string
  name: string | null
  users: IArrUser[]
}

const TodoSchema: Schema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['ABIERTA', 'EN-PROGRESO', 'COMPLETADA', 'ARCHIVADA'],
    default: 'ABIERTA',
    required: true
  },
  users: [{
    name: String
  }]
}, {
  collection: 'todos',
  timestamps: { createdAt: 'date', updatedAt: false },
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: false
})

export default mongoose.model<ITodo>('Todo', TodoSchema)
