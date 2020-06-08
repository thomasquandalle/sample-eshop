import { ADD_PRODUCT, DELETE_PRODUCT} from "./actionTypes";

export const addProduct = productId => ({
	type: ADD_PRODUCT,
	productId
});

export const deleteProduct = productId => ({
	type: DELETE_PRODUCT,
	productId
});