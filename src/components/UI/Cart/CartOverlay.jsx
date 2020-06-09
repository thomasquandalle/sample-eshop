/*
Overlay containing the list of products currently in the cart
From this overlay, you can increase or decrease the quantity of the product
You can also delete the product from your cart
props:{
	open: (Bool) The visibility of the overlay
}
 */

import React from "react";
import PropTypes from "prop-types";
import {Overlay} from "../../genericComponents/Overlay";
import { connect } from "react-redux";
import {addProduct, deleteProduct, removeAllProduct} from "../../../redux/actions/cartActions";

const styles = {
	ul: {
		padding: "2%"
	},
	li: {
		color: "black",
		listStyle: "none",
		display: "flex",
		margin: "2px",
		minHeight: "2em",
		justifyContent: "space-between",
		alignItems: "center"
	},
	button:{
		border: 0,
		backgroundColor: "rgb(255,0,0)",
		color: "rgb(255,255,255)",
		boxShadow: "none",
		borderRadius: "5px",
		height: "1.5em"
	},
	titleP: {
		maxWidth: "60%",
		margin: 0
	},
	qtyP: {
		margin: 0
	},
	buttonContainer:{
		display: "flex",
		flexDirection: "column",
	},
	qtyButton: {
		border: 0,
		margin: 1,
		backgroundColor: "rgb(95,180,174)",
		color: "rgb(255,255,255)",
		boxShadow: "none",
		borderRadius: "10px",
	},
	h2: {
		color: "black",
		width: "100%",
		textAlign: "center"
	}
};

const CartOverlay = ({open, cart, addProduct, removeProduct, deleteProduct}) =>(
	<Overlay open = {open}>
		<ul style = {styles.ul}>
			{cart.map(product => (
				<li key = {product.id} style = {styles.li}>
					<p style = {styles.titleP}>{product.title[0].toUpperCase() + product.title.slice(1)}</p>
					<p style = {styles.qtyP}> {product.qty}</p>
					<div style = {styles.buttonContainer}>
						<button
							onClick={() => addProduct(product.id)}
							style = {styles.qtyButton}
						>+</button>
						<button
							onClick={() => removeProduct(product.id)}
							style = {styles.qtyButton}
						>-</button>
					</div>
					<button
						style = {styles.button}
						onClick={() => deleteProduct(product.id)}
					>Delete</button>
				</li>
			))}
		</ul>
		{cart.length ? null : <h2 style={styles.h2}>There&apos;s nothing in your cart</h2>}
	</Overlay>
);

CartOverlay.propTypes = {
	open: PropTypes.bool.isRequired,  //The visibility of the overlay
	cart: PropTypes.arrayOf(PropTypes.shape({ //The current cart with products information
		title: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		qty: PropTypes.number.isRequired
	})),
	addProduct: PropTypes.func.isRequired, //Function to add 1 in the cart
	removeProduct: PropTypes.func.isRequired, //Function to remove 1 from the cart
	deleteProduct: PropTypes.func.isRequired, //Function to delete the product from the cart
};

const mapStateToProps = (state) => {
	const cart = state.cart.products;
	const ids = Object.keys(cart);
	const fullProducts = state.data.data;
	const enhancedCart = ids.map(id => {
		let title =  fullProducts[id].title;
		if(title.length > 40 ){
			title = title.slice(0,37) + "...";
		}
		return({title: title, id, qty: cart[id]});
	}); //Cart with product titles
	return({cart:enhancedCart});
};

const mapDispatchToProps = dispatch => {
	return{
		deleteProduct: id => dispatch(removeAllProduct(id)),
		addProduct: id => dispatch(addProduct(id)),
		removeProduct: id => dispatch(deleteProduct(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
