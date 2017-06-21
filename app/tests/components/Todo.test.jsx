const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jQuery");
const TestUtils = require("react-addons-test-utils");

const Todo = require("Todo");

describe("Todo", () => {
    it("should exist", () => {
        expect(Todo).toExist();
    });

    it("should call onToggle prop with id on click", () => {
        const todoData = {
            id: 199,
            text: "Write todo.test.jsx test",
            completed: true
        };
        const spy = expect.createSpy();
        const todo = TestUtils.renderIntoDocument(<Todo onToggle={spy} {...todoData} />);

        const $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(199);
    });
});