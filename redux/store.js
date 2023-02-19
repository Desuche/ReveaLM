import { createStore, combineReducers } from "redux";
import storeReducer from "./reducers/storeReducer";

const rootReducer = combineReducers({
    history: storeReducer,
});

export const store = createStore(rootReducer);