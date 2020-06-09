import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

//Creating and exporting the store
export default createStore(rootReducer, applyMiddleware(thunk));
