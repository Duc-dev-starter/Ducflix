import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { store } from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context/ThemeContext/";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        {/* Bọc App trong ThemeProvider */}
        <ThemeProvider>
            <App />
        </ThemeProvider>

    </Provider>
);
