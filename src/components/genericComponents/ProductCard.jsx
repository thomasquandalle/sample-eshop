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
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addProduct, deleteProduct} from "../../redux/actions/cartActions";
import { PRODUCT_SHAPE } from "../../constants";

const styles = {
	container: {
		margin: 4,
		maxWidth: 350,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
	title: {
		textAlign: "justify"
	},
	quantity: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		flexWrap: "wrap"
	},
	button:{
		border: 0,
		backgroundColor: "rgb(95,180,174)",
		color: "rgb(255,255,255)",
		height: "50%",
		minWidth: 30,
		boxShadow: "none",
		borderRadius: "10px",
	}
};

function ProductCard({product, addProduct, deleteProduct, qty}){
	return(
		<div style = {styles.container}>
			<div>
				<div>
					<img
						src = { product.url }
						alt = {"Product " + product.id}
						style = {{
							height: "100%",
							width: "100%"
						}}/>
				</div>
				<p style = {styles.title}>{product.title[0].toUpperCase() + product.title.slice(1)}</p>
			</div>
			{!qty ? //Changes the UI if the product is in the cart
				(<div style = {styles.quantity}	>
					<p> This item isn&apos;t in your cart</p>
					<button
						onClick={() => addProduct(product.id)}
						style = {styles.button}
					>
						Add product to Cart
					</button>
				</div>)
				:
				(
					<div style = {styles.quantity}	>
						<p> Currently in cart: </p>
						<button
							style = {styles.button}
							onClick = {() => deleteProduct(product.id)}
						>-</button>
						{qty}
						<button
							onClick={() => addProduct(product.id)}
							style = {styles.button}
						>
						+
						</button>
					</div>)
			}
		</div>
	);
}

ProductCard.propTypes = {
	product: PropTypes.shape(PRODUCT_SHAPE),
	addProduct: PropTypes.func.isRequired,
	deleteProduct: PropTypes.func.isRequired,
	qty: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
	const products = state.cart.products;
	const productId = ownProps.product.id;
	let qty = products[productId];
	if(qty === undefined){
		qty = 0;
	}
	return {qty};
};

const mapDispatchToProps = (dispatch) => {
	return{
		addProduct: id => dispatch(addProduct(id)),
		deleteProduct: id => dispatch(deleteProduct(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
