import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* App component is nested inside the Provider to grant access to the store to the required component. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);