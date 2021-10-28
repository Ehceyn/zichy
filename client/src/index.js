import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StateProvider } from "../src/StateProvider";
import reducer, { initialState } from "./Reducer";
import App from "./Components/App";

ReactDOM.render(
  <React.Fragment>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
