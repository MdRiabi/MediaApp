
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(

    // the browser router will control the hole application routes
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
