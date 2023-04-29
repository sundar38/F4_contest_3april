import {createStore, applyMiddleware} from "redux"
import rootreducer from "./reducers"
import thunk from "redux-thunk" //thunk will access api

const store = createStore(rootreducer, applyMiddleware(thunk))
console.log("Initial state is", store.getState());

export default store