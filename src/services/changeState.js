import todosRepository from '../repositories/TodosRepository.js'
import {renderTodoList} from './renderTodoList.js'
import localStorageService from '../services/LocalStorageService.js'

export function changeState(pos) {
  const todos = todosRepository.list()
  todos[pos].isCompleted = !todos[pos].isCompleted
  localStorageService.save(todos)
  renderTodoList()
  return
}
