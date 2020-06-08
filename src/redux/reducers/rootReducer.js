import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import cartReducer from "./cartReducer";

export default combineReducers({data: dataReducer, cart: cartReducer })