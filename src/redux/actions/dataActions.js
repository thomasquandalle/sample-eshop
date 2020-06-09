import {UPDATE_DATA, UPDATE_VIEW_DATA} from "./actionTypes";
import { fetchData } from "../../api/networkFunctions";

const updateData = data => ({
	type: UPDATE_DATA,
	data
});

const updateViewData = data => ({
	type: UPDATE_VIEW_DATA,
	data
});

export function fetchAndUpdateData(filter = "", viewDataOnly = true) {
	return function(dispatch) {
		return fetchData(filter).then(response => response.json()).then(
			data => {
				if(!viewDataOnly){
					dispatch(updateData(data));
				}
				else{
					dispatch(updateViewData(data));
				}
			}
		);
	};
}
