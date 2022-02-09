export class TodoList {
  constructor () {
    this.todos = []
  }

  newTodo (todo) {
    this.todos.push(todo)
  }

  deleteTodo (id) {}

  checkCompleted (id) {
    for (const todo of this.todos) {
      console.log(id, todo.id)
    }
  }

  deleteCompleted () {}
}
