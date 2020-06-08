import {UPDATE_DATA} from "../actions/actionTypes";

const initialState = {
	data: []
};

export default function(state = initialState, action){
	if(action.type === UPDATE_DATA){
		return({data: action.data})
	}
	return initialState;
}