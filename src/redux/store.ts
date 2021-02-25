import {combineReducers, createStore} from "redux";
import productsReducer from "./productsReducer";

let rootReducer = combineReducers({
    products: productsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);
export default store;

// @ts-ignore
window.store = store