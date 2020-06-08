import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

//Creating and exporting the store
export default createStore(rootReducer);
