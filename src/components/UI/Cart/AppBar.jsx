import React from "react";

const appBarStyle = {
	containingDiv: {
		position: "sticky",
		minHeight: "50px",
		top: 0,
		padding: 16,
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
		height: "50%",
		boxShadow: "none",
		borderRadius: "0px"
	}
};

export const AppBar = () => (
	<div style = {appBarStyle.containingDiv}>
		<h2>Sample Eshop</h2>
		<button style = {appBarStyle.button}><h2>See my Cart</h2></button>
	</div>);