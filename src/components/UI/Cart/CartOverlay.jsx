/*
Overlay containing the list of products currently in the cart
From this overlay, you can increase or decrease the quantity of the product
You can also delete the product from your cart
props:{
	open: (Bool) The visibility of the overlay
}
 */

import React from "react";
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
	}
};

const CartOverlay = (props) =>(
	<Overlay open = {props.open}>
		<ul style = {styles.ul}>
		{props.cart.map(product => (
			<li key = {product.id} style = {styles.li}>
				<p style = {styles.titleP}>{product.title[0].toUpperCase() + product.title.slice(1)}</p>
				<p style = {styles.qtyP}> {product.qty}</p>
				<div style = {styles.buttonContainer}>
					<button
						onClick={() => props.addProduct(product.id)}
						style = {styles.qtyButton}
					>+</button>
					<button
						onClick={() => props.removeProduct(product.id)}
						style = {styles.qtyButton}
					>-</button>
				</div>
				<button
					style = {styles.button}
					onClick={() => props.deleteProduct(product.id)}
				>Delete</button>
			</li>
		))}
		</ul>
	</Overlay>
);

const mapStateToProps = (state) => {
	const cart = state.cart.products;
	const ids = Object.keys(cart);
	const fullProducts = state.data.data;
	const enhancedCart = ids.map(id => {
		let title =  fullProducts[id].title
		if(title.length > 40 ){
			title = title.slice(0,37) + "..."
		}
		return({title: title, id, qty: cart[id]})
	}); //Cart with product titles
	return({cart:enhancedCart})
};

const mapDispatchToProps = dispatch => {
	return{
		deleteProduct: id => dispatch(removeAllProduct(id)),
		addProduct: id => dispatch(addProduct(id)),
		removeProduct: id => dispatch(deleteProduct(id))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay)