// versão single file

function getDataJs(selectorName) {
  return document.querySelector(`[data-js="${selectorName}"]`)
}


const listElement = getDataJs('todo-list')
const inputElement = getDataJs('todo-input-text')
const buttonElement = getDataJs('todo-input-button')

let todos = [
  {title: 'Fazer isso', isCompleted: false},
  {title: 'Fazer aquilo', isCompleted: false},
  {title: 'Fazer nada', isCompleted: false},
]


function clearList() {
  listElement.innerHTML = ''
  return
}


function renderTodoList() {
  clearList()
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

function handleSubmit() {
  let todoInputText = inputElement.value
  todos.push({title: todoInputText, isCompleted: false})
  inputElement.value = ''
  renderTodoList()
  return false
}

function changeState(pos) {
  todos[pos].isCompleted = !todos[pos].isCompleted
  renderTodoList()
  return
}


function deleteTodo(pos) {
  todos.splice(pos, 1)
  renderTodoList()
  return
}

renderTodoList()
