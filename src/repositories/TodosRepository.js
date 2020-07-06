import localStorageService from '../services/LocalStorageService.js'

class TodosRepository {


  constructor() {
    this.todos = localStorageService.get()
  }

  list() {
    return this.todos
  }

  create(title) {
    const todo = {title, isCompleted: false}
    this.todos.push(todo)
  }

  delete(pos) {
  this.todos.splice(pos, 1)
  }


}

const singletonInstanceOfTodosRepository = new TodosRepository()
Object.freeze(singletonInstanceOfTodosRepository)

export default singletonInstanceOfTodosRepository
