import { Request, Response, NextFunction } from 'express'
import TodoService from '../services/ServiceTodo'
import { ITodo } from '../schemas/SchemaTodo'

const uuid = require('uuid-base62')
const todoService = new TodoService()

/**
 * GET /v1/todo
 * @summary This is the list of the todos
 * @tags name
 * @return {array<Todo>} 200 - success response - application/json
 */
export async function listTodos (req: Request, res: Response, next: NextFunction) {
  try {
    const { tags } = req.query
    const todos = await todoService.getTodos(tags)

    res.status(200).json({
      todos
    })
  } catch (error) {
    next({ estado: 500, original: error })
  }
}

/**
 * POST /v1/todo
 * @summary This create a new todo
 * @return {<ITodo>} 201 - success response - application/json
 */
export async function addTodo (req: Request, res: Response, next: NextFunction) {
  try {
    const todo = req.body as ITodo
    todo.id = uuid.v4()

    const newTodo = await todoService.createTodo(todo)

    res.status(201).json({
      todo: newTodo
    })
  } catch (error) {
    next({ estado: 500, original: error })
  }
}

/**
 * POST /v1/todo
 * @summary This create many todos
 * @return {<ITodo>} 201 - success response - application/json
 */
export async function addManyTodos (req: Request, res: Response, next: NextFunction) {
  try {
    const { lista } = req.body
    const todos = await todoService.createManyTodos(lista)

    res.status(201).json({
      message: `Todos created`
    })
  } catch (error) {
    next({ estado: 500, original: error })
  }
}

/**
 * PUT /v1/todo
 * @summary This edit an todo
 * @params id
 * @body body
 * @return {array<Todo>} 200 - success response - application/json
 */
export async function editTodo (req: Request, res: Response, next: NextFunction) {
  try {
    const { body, params } = req
    const todo = await todoService.detailTodo(params.id)

    if(todo) {
      if(body.users)
        todo.users.forEach(element => {
          body.users.push(element)
        });

      await todoService.updateTodo(params.id, body)
    } else {
      res.status(400).json({
        message: 'Todo not found'
      })
    }

    res.status(201).json({
      message: 'To do list updated'
    })

  } catch (error) {
    next({ estado: 500, original: error })
  }
}

/**
 * GET /v1/todo
 * @summary This get an todo by id
 * @params id
 * @return {array<Todo>} 200 - success response - application/json
 */
export async function getTodo (req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params
    const todo = await todoService.detailTodo(id)

    if (todo) {
      res.status(201).json({
        todo
      })
    } else {
      res.status(404).json({
        message: 'Does not found todo'
      })
    }
  } catch (error) {
    next({ estado: 500, original: error })
  }
}

/**
 * Delete Todo
 * This endpoint delete an todo by id
 * @method DELETE
 * @params id
 */
export async function deleteTodo (req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params
    const { body, params } = req

    const todo = await todoService.detailTodo(id) as ITodo

    const nuevoArr: string | any[] = []
    if(todo) {
      if(body.users) {
        for (const iterator of todo.users) {
          for (const element of body.users) {
            if (iterator._id != element._id) {
              nuevoArr.push(iterator)
            }
          }
        }
      }

      todo.users = nuevoArr
      await todoService.updateTodo(params.id, todo)

    } else {
      res.status(400).json({
        message: 'Todo not found'
      })
    }

    res.status(201).json({
      message: 'Todo has been deleted'
    })
  } catch (error) {
    next({ estado: 500, original: error })
  }
}