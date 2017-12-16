import "./css/style.scss"
import { render } from "react-dom"
import App from "./app/App"

render(
    <App message="Hello World!!"/>,
    document.getElementById("app")
)