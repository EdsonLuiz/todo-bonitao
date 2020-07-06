import todosRepository from '../repositories/TodosRepository.js'
import {renderTodoList} from './renderTodoList.js'
import localStorageService from '../services/LocalStorageService.js'

export function deleteTodo(pos) {
  todosRepository.delete(pos)
  localStorageService.save(todosRepository.list())
  renderTodoList()
  return
}
