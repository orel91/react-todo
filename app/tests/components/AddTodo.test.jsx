const React = require("react");
const ReactDOM = require("react-dom");
const expect = require("expect");
const $ = require("jQuery");
const TestUtils = require("react-addons-test-utils");

const AddTodo = require("AddTodo");

describe("AddTodo", () => {
    it("should exist", () => {
        expect(AddTodo).toExist();
    });

    it("should call onAddTodo if text entered", () => {
        const spy = expect.createSpy();
        const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
        const $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = "Sleep";
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toHaveBeenCalledWith("Sleep");
    });

    it("should not call onAddTodo if no text entered", () => {
        const spy = expect.createSpy();
        const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
        const $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = "";
        TestUtils.Simulate.submit($el.find("form")[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});