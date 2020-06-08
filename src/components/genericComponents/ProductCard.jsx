/*
Product Card used to show photo, description and add button for a product
Required props:
product:{
	title: (String) Description of the product
	url: (String) Url of the product's image
	id: (int) Unique id of the product
}

The productCard is connected to the store to dispatch the action to add a product to a cart
 */

import React from "react";
import { connect } from "react-redux";
import {addProduct} from "../../redux/actions/cartActions";

const ProductCard = ({product, addProduct, qty}) => {
	return(
		<div>
			<img src = { product.url } alt = {"Product " + product.id} />
			<p>{product.title}</p>
			<p>Current qty: {qty}</p>
			<button onClick={() => addProduct(product.id)}> Add product to Cart </button>
		</div>
	)
};

const mapStateToProps = (state, ownProps) => {
	const products = state.cart.products;
	const productId = ownProps.product.id;
	let qty = products[productId];
	if(qty === undefined){
		qty = 0
	}
	return {qty}
};

const mapDispatchToProps = (dispatch) => {
	return{
		addProduct: id => dispatch(addProduct(id)) //To complete with the right action
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
