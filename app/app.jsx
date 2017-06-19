const React = require("react");
const ReactDOM = require("react-dom");
const {Route, Router, IndexRoute, hashHistory} = require("react-router");

const TodoApp = require("TodoApp");

// Load foundation
// require("style!css!foundation-sites/dist/foundation.min.css");
//style! => Load the style in the browser by injecting it in a <style> tag
//css! => Tell webpack this is a stylesheet

// App css
require("style!css!sass!applicationStyles");
//sass! => Loads the sass loader

$(document).foundation();

ReactDOM.render(
    <TodoApp />,
    document.getElementById("app")
);