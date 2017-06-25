const expect = require("expect");

const TodoApi = require("TodoApi");

describe("TodoApi", () => {
    beforeEach(() => {
        localStorage.removeItem("todos");
    });

    it("should exist", () => {
        expect(TodoApi).toExist();
    });
    describe("setTodos", () => {
        it("should set valid todos array", () => {
            const todos = [{
                id: 23,
                text: "test all files",
                completed: false
            }];
            TodoApi.setTodos(todos);
            var actualTodos = JSON.parse(localStorage.getItem("todos"));

            expect(actualTodos).toEqual(todos);
        });

        it("should not set invalid todos array", () => {
            const badTodos = {a: "b"};
            TodoApi.setTodos(badTodos);
            expect(localStorage.getItem("todos")).toBe(null);
        });
    });
    describe("getTodos", () => {
        it("should return empty array for bad localStorage data", () => {
            const actualTodos = TodoApi.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it("should return todos if valid array in local storage", () => {
            const todos = [{
                id: 23,
                text: "test all files",
                completed: false
            }];
            localStorage.setItem("todos", JSON.stringify(todos));

            const actualTodos = TodoApi.getTodos();
            expect(actualTodos).toEqual(todos);
        })
    });

    describe("filterTodos", () => {
        const todos = [{
            id: 1,
            text: "Some text here",
            completed: true
        },{
            id: 2,
            text: "Other text here",
            completed: false
        },{
            id: 3,
            text: "Some text here",
            completed: true
        }];

        it("should return all items if showCompleted is true", () => {
            const filteredTodos = TodoApi.filterTodos(todos, true, "");
            expect(filteredTodos.length).toBe(3);
        });

        it("should return only not completed items if showCompleted is false", () => {
            const filteredTodos = TodoApi.filterTodos(todos, false, "");
            expect(filteredTodos.length).toBe(1);
        });

        it("should sort by completed status", () => {
            const filteredTodos = TodoApi.filterTodos(todos, true, "");
            expect(filteredTodos[0].completed).toBe(false);
        });

        it("should filter todos by searchText", () => {
            const filteredTodos = TodoApi.filterTodos(todos, true, "some");
            expect(filteredTodos.length).toBe(2);
        });

        it("should return all todos if searchText is empty", () => {
            const filteredTodos = TodoApi.filterTodos(todos, true, "");
            expect(filteredTodos.length).toBe(3);
        });
    });
});