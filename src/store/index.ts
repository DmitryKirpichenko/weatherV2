import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { weatherReducer } from "./redusers/weatherReducer";

const rootReducer = combineReducers({
    weather: weatherReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>;