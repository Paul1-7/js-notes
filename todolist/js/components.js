import { Todo } from '../classes'
import { todoList } from '../index'

const divTodoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('.new-todo')

export const createTodo = todo => {
  const htmlTodo = `<li class="${todo.completed ? 'completed' : ''}" data-id="${
    todo.id
  }">
  <div class="view">
    <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
    <label>${todo.task}</label>
    <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  </li>`

  const div = document.createElement('div')
  div.innerHTML = htmlTodo

  divTodoList.append(div.firstElementChild)

  // return div
}

txtInput.addEventListener('keyup', event => {
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const newTodo = new Todo(txtInput.value)
    todoList.newTodo(newTodo)
    createTodo(newTodo)

    txtInput.value = ''
  }
})

divTodoList.addEventListener('click', event => {
  const elementName = event.target.localName
  const todoElement = event.target.parentElement.parentElement
  const idElement = todoElement.dataset.id
  console.log(idElement)
  if (elementName.includes('input')) {
    todoList.checkCompleted(idElement)
    todoElement.classList.toggle('completed')
  }
})
