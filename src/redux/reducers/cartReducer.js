import {ADD_PRODUCT, DELETE_PRODUCT, REMOVE_ALL_PRODUCT} from "../actions/actionTypes";

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

	if(action.type === DELETE_PRODUCT){
		const products = state.products;
		if(products[action.productId] && products[action.productId] >= 1){ //Checks if the product is indeed in the cart, otherwise does nothing
			products[action.productId] -= 1;
			if(products[action.productId] === 0){
				delete products[action.productId]
			}
			return {products}
		}

	}
	if(action.type === REMOVE_ALL_PRODUCT){
		const products = state.products;
		delete products[action.productId];
		return {products}
	}

	return state;
}