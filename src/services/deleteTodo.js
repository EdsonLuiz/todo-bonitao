import todosRepository from '../repositories/TodosRepository.js'
import {renderTodoList} from './renderTodoList.js'

export function deleteTodo(pos) {
  const todos = todosRepository.list()
  todos.splice(pos, 1)
  renderTodoList()
  return
}
