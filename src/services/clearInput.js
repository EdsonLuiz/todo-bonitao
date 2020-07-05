import {getDataJs} from './getDataJs.js'

export function clearInput(dataJsInputName) {
  const inputElement = getDataJs(dataJsInputName)
  inputElement.value = ''
}
