import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./theme";
import { ThemeProvider as CustomThemeProvider } from "./contexts/ThemeContext";
import { Provider } from "react-redux";

import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledThemeProvider theme={theme}>
        <CustomThemeProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </CustomThemeProvider>
      </StyledThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
