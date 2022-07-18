import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import UserContextProvider from "./store/context/userContextProvider";
import ContextProvider from "./store/context/ContextProvider";
import RandomPokemonsContextProvider from "./store/context/randomPokemonsContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <ContextProvider>
    <UserContextProvider>
      <RandomPokemonsContextProvider>
        <App />
      </RandomPokemonsContextProvider>
    </UserContextProvider>
  </ContextProvider>
  // </React.StrictMode>
);
reportWebVitals();
