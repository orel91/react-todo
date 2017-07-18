const expect = require("expect");
const df = require("deep-freeze-strict");
// Deep freeze checks if the parameters passed to a function are updated or not.
// This ensures that the function is a pure function

const reducers = require("reducers");

describe("Reducers", () => {
    describe("searchTextReducer", () => {
        it("should set searchText", () => {
            // It's better not to use dependencies with code that needs
            // to be tested too. So we won't be calling actions in this 
            // particular case
            const action = {
                type: "SET_SEARCH_TEXT",
                searchText: "dog"
            };
            const res = reducers.searchTextReducer(df(""), df(action));
            expect(res).toEqual(action.searchText);
        });
    });

    describe("showCompletedReducer", () => {
        it("should toggle showCompleted", () => {
            const action = {
                type: "TOGGLE_SHOW_COMPLETED"
            };
            const res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });

    describe("todosReducer", () => {
        it("should add new todo", () => {
            const action = {
                type: "ADD_TODO",
                text: "Walk the cat"
            };
            const res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it("should toggle todo and update completedAt", () => {
            const todos = [{
                id: '123',
                text: "Something",
                completed: false,
                createdAt: 123,
                completedAt: undefined
            }];
            const todo = todos[0];
            const action = {
                type: "TOGGLE_TODO",
                id: todo.id
            };

            const res = reducers.todosReducer(df(todos), df(action));
            expect(res.length).toEqual(1);
            const modifiedTodo = res[0];
            expect(modifiedTodo.completed).toBe(true);
            expect(modifiedTodo.completedAt).toExist();
        });
    });
});