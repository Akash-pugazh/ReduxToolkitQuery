import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./App/store";
import "./index.css";
import App from "./App/App";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
