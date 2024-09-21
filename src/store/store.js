import { applyMiddleware, createStore } from "redux";
import { setUser } from "./reducer";
import { thunk } from "redux-thunk";

const store = createStore(setUser, applyMiddleware(thunk));

export default store;
