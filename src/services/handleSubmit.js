import {getInputData} from './getInputData.js'
import todosRepository from '../repositories/TodosRepository.js'
import {renderTodoList} from './renderTodoList.js'
import {clearInput} from './clearInput.js'
import {validateInput} from './validateInput.js'
import {renderError, removeError} from './renderError.js'
import localStorageService from '../services/LocalStorageService.js'

export function handleSubmit() {

  const todoInputText = getInputData('todo-input-text')
  try {
    removeError()
    validateInput(todoInputText)
    todosRepository.create(todoInputText)
    localStorageService.save(todosRepository.list())
    clearInput('todo-input-text')
    renderTodoList()
    return false
  } catch (error) {
    console.log(error.message)
    renderError(error.message)
    return false
  }

}
