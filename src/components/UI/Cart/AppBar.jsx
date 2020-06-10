import React, { useState } from "react";
import CartOverlay from "./CartOverlay";


const appBarStyle = {
	containingDiv: {
		position: "sticky",
		height: "5vh",
		minHeight: 50,
		top: 0,
		padding: "1vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "rgb(100, 201, 195)",
		color: "rgb(255,255,255)"
	},
	button:{
		border: 0,
		backgroundColor: "rgb(95,180,174)",
		color: "rgb(255,255,255)",
		height: "100%",
		boxShadow: "none",
		borderRadius: "0px"
	},
	h2: {
		fontSize: "100%",
		margin:0
	}
};

export default function AppBar(){

	const [cartOpen, toggleCart] = useState(false);

	return (<div style = {appBarStyle.containingDiv}>
		<h2 style = {appBarStyle.h2}>Sample Eshop</h2>
		<button
			style = {appBarStyle.button}
			onClick = {() => toggleCart(!cartOpen)}
		><h2 style={appBarStyle.h2}>See my Cart</h2></button>
		<CartOverlay open = {cartOpen}/>
	</div>);
}
