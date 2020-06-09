import {UPDATE_DATA, UPDATE_VIEW_DATA} from "./actionTypes";

export const updateData = data => ({
	type: UPDATE_DATA,
	data
});

export const updateViewData = data => ({
	type: UPDATE_VIEW_DATA,
	data
});