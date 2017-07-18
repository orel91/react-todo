const expect = require("expect");

const actions = require("actions");

describe("Actions", () => {
    it("should generate search text action", () => {
        const action = {
            type: "SET_SEARCH_TEXT",
            searchText: "Some search text"
        };

        const result = actions.setSearchText(action.searchText);
        expect(result).toEqual(action);
    });

    it("should generate add todo action", () => {
        const action = {
            type: "ADD_TODO",
            text: "Thing to do"
        };

        const result = actions.addTodo(action.text);
        expect(result).toEqual(action);
    });

    it("should generate toggle show completed action", () => {
        const action = {
            type: "TOGGLE_SHOW_COMPLETED"
        };

        const result = actions.toggleShowCompleted();
        expect(result).toEqual(action);
    });

    it("should generate toggle todo action", () => {
        const action = {
            type: "TOGGLE_TODO",
            id: 1
        };

        const result = actions.toggleTodo(action.id);
        expect(result).toEqual(action);
    });
});