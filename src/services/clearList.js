import {getDataJs} from './getDataJs.js'

export function clearList() {
  const listElement = getDataJs('todo-list')
  listElement.innerHTML = ''
  return
}
