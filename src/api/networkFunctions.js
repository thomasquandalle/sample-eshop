import { CONTENT_URL } from "../constants";

export function fetchData(filter = ""){
	let fetchURL = CONTENT_URL;
	if(filter){
		fetchURL += "?q="+filter;
	}
	return fetch(fetchURL);
}
