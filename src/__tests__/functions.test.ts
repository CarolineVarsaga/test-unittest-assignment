import { toggleTodo } from "../ts/main";
import { Todo } from "../ts/models/todo";

describe("functions tests", () => {

    /* beforeEach(() => {  
    }) */
 
    /* afterEach(() => {
    })  */

    test("it should toggle the done property from false to true", () => { //fixa denna
        const todo: Todo = { text: 'Test todo', done: false };

        toggleTodo(todo); 

        expect(todo.done).toBe(true); 
    })

    test("it should toggle the done property from true to false", () => { //fixa denna
        const todo: Todo = { text: 'Test todo', done: true };

        toggleTodo(todo); 

        expect(todo.done).toBe(false); 
    })
})