import {ADD_PRODUCT, DELETE_PRODUCT, REMOVE_ALL_PRODUCT} from "./actionTypes";

export const addProduct = productId => ({
	type: ADD_PRODUCT,
	productId
});

export const deleteProduct = productId => ({
	type: DELETE_PRODUCT,
	productId
});

export const removeAllProduct = productId => ({
	type: REMOVE_ALL_PRODUCT,
	productId
});