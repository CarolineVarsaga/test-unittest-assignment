import { IAddResponse } from "./models/IAddResponse";
import { Todo } from "./models/todo";

//addTodo = check! 
export function addTodo(todoText: string, todos: Todo[]): IAddResponse {
  if (todoText.length > 2) {
    let newTodo = new Todo(todoText, false);
    todos.push(newTodo);
    return { success: true, error: "" };
  } else {
    return { success: false, error: "Du måste ange minst tre bokstäver" };
  }
}

//changeTodo = check!
export function changeTodo(todo: Todo) {
  todo.done = !todo.done;
}

//removeAllTodos = check! 
export function removeAllTodos(todos: Todo[]) {
  todos.splice(0, todos.length);
}
