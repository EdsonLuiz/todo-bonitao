export const getDataJs = (selectorName) => {
  return document.querySelector(`[data-js="${selectorName}"]`)
}
