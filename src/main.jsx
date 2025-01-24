// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// // import { Provider } from "react-dom";
// // import store from "./store/store.js";

// createRoot(document.getElementById("root")).render(
//   // <Provider store={store}>
//   //   <App />
//   // </Provider>

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Global styles
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
