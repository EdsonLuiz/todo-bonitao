import {getDataJs} from './getDataJs.js'

const listElement = getDataJs('todo-list')
const inputElement = getDataJs('todo-input-text')
const buttonElement = getDataJs('todo-input-button')

let todos = [
  'fazer isso',
  'fazer aquilo',
  'fazer tal coisa'
]


function renderTodoList() {
  todos.map(todo => {
    let todoElement = document.createElement('li')
    let todoContent = document.createTextNode(todo)

    todoElement.appendChild(todoContent)
    listElement.appendChild(todoElement)
  })
}

renderTodoList()
