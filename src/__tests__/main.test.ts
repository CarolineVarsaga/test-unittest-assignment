import { createNewTodo, toggleTodo } from "../ts/main";
import { IAddResponse } from "../ts/models/IAddResponse";
import { Todo } from "../ts/models/todo";

import * as functions from "./../ts/functions";
import * as htmlFunctions from "./../ts/htmlFunctions";

describe("main tests", () => {
    let mockedAddTodo: jest.SpyInstance<IAddResponse>;
    let mockedCreateHtml: jest.SpyInstance<void>;
    let mockedDisplayError: jest.SpyInstance<void>;
    let mockedChangeTodo: jest.SpyInstance<void>; 

    beforeEach(() => {
        mockedAddTodo = jest.spyOn(functions, "addTodo");
        mockedCreateHtml = jest.spyOn(htmlFunctions, "createHtml");
        mockedDisplayError = jest.spyOn(htmlFunctions, "displayError");
        mockedChangeTodo = jest.spyOn(functions, "changeTodo"); 
    })

    afterEach(() => {
        mockedAddTodo.mockReset(); 
        mockedCreateHtml.mockReset(); 
        mockedDisplayError.mockReset(); 
        mockedChangeTodo.mockReset(); 
    })
 
    test("it should add the todo and call createHtml", () => {
        const todoText = "Lorem"; 
        const todos: Todo[] = []; 

        mockedAddTodo.mockImplementation(() => {
            return { success: true, error: "" }; 
        })
        mockedCreateHtml.mockImplementation(() => {})

        createNewTodo(todoText, todos); 
        expect(mockedCreateHtml).toHaveBeenCalled(); 
    })

    test("it should call displayError", () => {
        const todoText = "Lorem"; 
        const todos: Todo[] = []; 

        mockedAddTodo.mockImplementation(() => {
            return { success: false, error: "" }; 
        })
        mockedDisplayError.mockImplementation(() => {})

        createNewTodo(todoText, todos); 
        expect(mockedDisplayError).toHaveBeenCalled(); 
    })

    test("it should call changeTodo and createHtml", () => {
        const todo: Todo = { text: 'Test todo', done: false }; 

        toggleTodo(todo); 

        expect(mockedChangeTodo).toHaveBeenCalled(); 
        expect(mockedCreateHtml).toHaveBeenCalled();  
    })
} )