import {getDataJs} from './getDataJs.js'

export function renderError(errorMessage) {
  removeError()
  let errorMessageElement = getDataJs('todo-input-error-message')
  let errorText = document.createTextNode(errorMessage)

  errorMessageElement.appendChild(errorText)
}

export function removeError() {
  let errorMessageElement = getDataJs('todo-input-error-message')
  errorMessageElement.innerHTML = ""
}
