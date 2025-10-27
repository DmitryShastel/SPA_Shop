import {createRoot} from "react-dom/client";
import {App} from "./common/components/app/App";
import "./global.scss"
import {store} from "./service/store";
import { Provider } from 'react-redux'

const container = document.getElementById('root')

if (container) {
    const root = createRoot(container)

    root.render(
        <Provider store={store}>
            <App />
        </Provider>,
    )
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
    )
}

console.log('Store state:', store.getState())
console.log('Store:', store)
