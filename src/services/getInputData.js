import {getDataJs} from './getDataJs.js'

export function getInputData(dataJsInputName) {
  const inputElement = getDataJs(dataJsInputName)
  return inputElement.value
}
