import { Todo, TodoList } from './classes' // by default find the file index.js
import { createTodo } from './js/components'
import './styles.css'

export const todoList = new TodoList()
//const task = new Todo('Aprender js')

// todoList.newTodo(task)
// createTodo(task)

console.log(todoList)
