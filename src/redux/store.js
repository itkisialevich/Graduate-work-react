import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { generalState } from "./reducers/generalState";

export const store = createStore(
  combineReducers({ generalState }),
  composeWithDevTools()
);
