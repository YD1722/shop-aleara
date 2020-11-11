import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

/**
 * Webpack configuration specifies that Webpack uses src/index.js as an “entry point”.
 * So that’s the first module it reads, and it follows from it to other modules to compile them into a single bundle.
 * https://stackoverflow.com/a/42440000/5308115
 *
 * The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
