import React from "react"
import ReactDOM from "react-dom/client"
import "tw-elements"
import reducer, { initialState } from "../src/context-api/Reducer"
import { StateProvider } from "../src/context-api/StateProvider"
import App from "./App"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()