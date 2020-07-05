import {renderTodoList} from './src/services/renderTodoList.js'
import {handleSubmit} from './src/services/handleSubmit.js'
import {changeState} from './src/services/changeState.js'
import {deleteTodo} from './src/services/deleteTodo.js'

window.renderTodoList = renderTodoList()
window.handleSubmit = handleSubmit
window.changeState = changeState
window.deleteTodo = deleteTodo
