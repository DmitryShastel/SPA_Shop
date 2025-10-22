import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import "./global.scss"

const root = document.getElementById('root')

const container = createRoot(root)

container.render(<App/>)
