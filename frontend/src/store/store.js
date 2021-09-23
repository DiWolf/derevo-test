import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "../reducer/rootReducer";
import thunk from "redux-thunk";
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : (f) => f
  )
);
