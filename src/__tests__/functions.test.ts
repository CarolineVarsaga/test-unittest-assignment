import { toggleTodo } from "../ts/main";
import { Todo } from "../ts/models/todo";
import { removeAllTodos, addTodo } from "../ts/functions";

describe("functions tests", () => {

    beforeEach(() => {  
        document.body.innerHTML =`        
            <ul id="todos"></ul>        
        `;
    }) 

    test("it should toggle the done property from false to true", () => { 
        const todo: Todo = { text: 'Test todo', done: false };

        toggleTodo(todo); 

        expect(todo.done).toBe(true); 
    })

    test("it should toggle the done property from true to false", () => { 
        const todo: Todo = { text: 'Test todo', done: true };

        toggleTodo(todo); 

        expect(todo.done).toBe(false); 
    })

    test("it should remove all todos from the list", () => {
        const todos: Todo[] = [];

        removeAllTodos(todos); 

        expect(todos.length).toBe(0); 
    })

    test("it should add a new todo if the text length is greater than 2", () => {
        const todos: Todo[] = [];
        const todoText = "Test text"; 

        const result = addTodo(todoText, todos); 

        expect(result.success).toBe(true); 
        expect(result.error).toBe(""); 
        expect(todos.length).toBe(1); 
        expect(todos[0].text).toBe(todoText); 
        expect(todos[0].done).toBe(false); 
    })

    test('should not add a new todo if the text length is 2 or less', () => {
        const todos: Todo[] = [];
        const todoText = 'No';
    
        const result = addTodo(todoText, todos);
    
        expect(result.success).toBe(false);
        expect(result.error).toBe("Du måste ange minst tre bokstäver");
        expect(todos.length).toBe(0);
      });
})