import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"

import App from "@/App"
import store from "@/store"

import "normalize.css"
import "@/assets/css/index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
