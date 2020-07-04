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
      <button type="button" onclick="changeState(${index})">Change</button>
      ${todo.title}
      <button type="button" onclick="deleteTodo(${index})">Deletar</button>
    </li>
    `
  ))

  listElement.innerHTML = listItems
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
  return
}


function deleteTodo(pos) {
  todos.splice(pos, 1)
  renderTodoList()
  return
}

renderTodoList(todos)
