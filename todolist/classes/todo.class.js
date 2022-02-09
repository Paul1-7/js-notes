export class Todo {
  constructor (task) {
    this.task = task
    this.id = new Date().getTime()
    this.created = new Date()
    this.completed = false
  }
}
