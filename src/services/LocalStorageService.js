class LocalStorageService {

  constructor() {}

  save(dataToBeSaved) {
    localStorage.setItem('@todoproject:todo_list', JSON.stringify(dataToBeSaved))
  }

  get() {
    const unparsedTodos = localStorage.getItem('@todoproject:todo_list')
    if(!unparsedTodos){
      return []
    } else {
      const parsedTodos = JSON.parse(unparsedTodos)
      return parsedTodos
    }
  }
}

const singletonInstanceOfLocalStorageService = new LocalStorageService()
Object.freeze(singletonInstanceOfLocalStorageService)

export default singletonInstanceOfLocalStorageService
