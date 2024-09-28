import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainPage from "./pages/main-page";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </StrictMode>,
);
