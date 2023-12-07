// Importing React and ReactDOM libraries for creating and rendering React components
import React from "react";
import ReactDOM from "react-dom";

// Importing Provider component from 'react-redux' for integrating Redux store with React
import { Provider } from "react-redux";

// Importing the main App component
import App from "./App";

// Importing global styles for the entire application
import "./styles/GlobalStyles.css";

// Importing a variable font, Quicksand, with weights 300-700
import "@fontsource-variable/quicksand";

// Importing the Redux store from the 'app' directory
import { store } from "./app/store";

// Import the reportWebVitals module from the specified path
import reportWebVitals from "./reportWebVitals";

// Rendering the main App component wrapped with Redux Provider and enclosed in StrictMode
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

  // Rendering the app in the HTML root element
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
