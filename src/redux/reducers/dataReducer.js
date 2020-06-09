import {UPDATE_DATA, UPDATE_VIEW_DATA} from "../actions/actionTypes";

const initialState = {
	data: [],
	viewData: []
};

export default function(state = initialState, action) {

	if (action.type === UPDATE_DATA) {
		return ({
			data: action.data,
			viewData: action.data
		});
	}
	if (action.type === UPDATE_VIEW_DATA) {
		return Object.assign({}, state, {viewData: action.data});
	}

	return state;
}
