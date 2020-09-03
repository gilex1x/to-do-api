import Todo, { ITodo } from '../schemas/SchemaTodo'

const uuid = require('uuid-base62')

export default class TodoService {
  async getTodos (tags: any) {
    const query = tags
    const todos = await Todo.find(query)
    return todos || []
  }

  async createTodo (todo: ITodo) {
    const newTodo = await Todo.create({
      ...todo
    })
    return newTodo
  }

  async createManyTodos (lista: []) {
    const todos = lista.map((bodyTodo: ITodo) => {
      return new Todo({
        ...bodyTodo,
        id: uuid.v4()
      })
    })

    await Todo.create(todos)
    return todos.length
  }

  async updateTodo (todoId: string, todo: ITodo ) {
    const todoUpdated = await Todo.updateOne({ id: todoId }, { $set: todo })
    return todoUpdated
  }

  async detailTodo (todoId: string) {
    const todo = await Todo.findOne({ id: todoId }).lean()
    return todo
  }

  async deleteTodo (todoId: string) {
    const deletedTodo = await Todo.deleteOne({ id: todoId })
    return deletedTodo
  }
}
