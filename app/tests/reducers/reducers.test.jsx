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
});