import {ADD_PRODUCT} from "../actions/actionTypes";

const initialState = {
	products: {}
};

export default function(state = initialState, action){
	if(action.type === ADD_PRODUCT){
		const products = state.products;
		if(!products[action.productId]){
			products[action.productId]  = 0
		}
		products[action.productId]++;
		return {products}
	}

	return initialState;
}