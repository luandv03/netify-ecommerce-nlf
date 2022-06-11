import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducers from "./components/redux";
import { legacy_createStore as createStore } from "redux";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";

const store = createStore(rootReducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles>
          <App />
        </GlobalStyles>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
