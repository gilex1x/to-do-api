import express from 'express'

import {
  listTodos,
  addTodo,
  addManyTodos,
  editTodo,
  getTodo,
  deleteTodo
} from '../controllers/ControllerTodo'

const TodoRouter = express.Router()

TodoRouter.get('/', listTodos)
TodoRouter.post('/', addTodo)
TodoRouter.post('/bulk', addManyTodos)
TodoRouter.put('/:id', editTodo)
TodoRouter.get('/:id', getTodo)
TodoRouter.delete('/:id', deleteTodo)

export default TodoRouter