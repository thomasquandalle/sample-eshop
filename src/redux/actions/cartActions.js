import { ADD_PRODUCT} from "./actionTypes";

export const addProduct = productId => ({
	type: ADD_PRODUCT,
	productId
});