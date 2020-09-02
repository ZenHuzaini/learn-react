import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// it will render the App coponent that comes from the App.js component
// we can also use this way to render app
//ReactDOM.render(<h1>Try this one</h1>, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
