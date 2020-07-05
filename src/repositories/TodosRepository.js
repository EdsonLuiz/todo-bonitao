class TodosRepository {


  constructor() {
    this.todos = [{title: 'Hello', isCompleted: true}]
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
