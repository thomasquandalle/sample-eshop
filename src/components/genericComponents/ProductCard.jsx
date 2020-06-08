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
import {addProduct, deleteProduct} from "../../redux/actions/cartActions";

const ProductCard = ({product, addProduct, deleteProduct, qty}) => {
	return(
		<div style = {{margin: 4, maxWidth: 350}}>
			<div>
				<img
					src = { product.url }
					alt = {"Product " + product.id}
					style = {{
						height: "100%",
						width: "100%"
					}}/>
			</div>
			<p style = {{textAlign: "justify"}}>{product.title}</p>
			<div
				style = {{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-around",
					flexWrap: "wrap"
				}}
			>
				<p> Current qty: {qty}</p>
				{/*Add a button when the product is in the cart to remove one*/}
				{qty ?
					<button
						onClick = {() => deleteProduct(product.id)}
					>-</button>
					: ""}
				<button
					onClick={() => addProduct(product.id)}
					style = {{height: "50%"}}
				>
					{/*Changes the text depending on the product being in the cart or not*/}
					{qty ? "+" : "Add product to Cart"}
				</button>
			</div>
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
		addProduct: id => dispatch(addProduct(id)), //To complete with the right action
		deleteProduct: id => dispatch(deleteProduct(id))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
