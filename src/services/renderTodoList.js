import {clearList} from './clearList.js'
import {getDataJs} from './getDataJs.js'
import todosRepository from '../repositories/TodosRepository.js'

export function renderTodoList() {
  clearList()

  const listElement = getDataJs('todo-list')
  const todos = todosRepository.list()

  const listItems = todos.map((todo, index) => (
    `
    <li>
      <button class="btn btn-checked" type="button" onclick="changeState(${index})">
        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class=${todo.isCompleted ? "svg-check" : "svg-uncheck"} fill-rule="evenodd" clip-rule="evenodd" d="M6 10L4 12L10 18L20 8L18 6L10 14L6 10Z" fill="#29CB00"/>
        </svg>
      </button>
      <span>${todo.title}</span>
      <button class="btn btn-delete" type="button" onclick="deleteTodo(${index})">
        <img src="./assets/delete.svg" alt="delete">
      </button>
    </li>
    `
  ))

  listElement.innerHTML = listItems.join("")
  return
}
