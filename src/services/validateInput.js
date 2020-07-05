export function validateInput(inputData) {
  if(!inputData.trim()) {
    throw new Error('Toda tarefa precisa de um titulo.')
  }

  return true
}
