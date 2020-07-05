import todosRepository from '../repositories/TodosRepository.js'
import {renderTodoList} from './renderTodoList.js'

export function changeState(pos) {
  const todos = todosRepository.list()
  todos[pos].isCompleted = !todos[pos].isCompleted
  renderTodoList()
  return
}
