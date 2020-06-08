/*
Products List is taking in a list of products and display in a responsive manner the ProductsCards
The list is already filtered sliced to show only the products wanted
 */

import React from "react";
import ProductCard from "./ProductCard";

const divStyle = {
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-around",
	alignContent: "left"
};

export const ProductsList = ({productsList}) => {
	return(
		<div style={divStyle}>
			{productsList.map(product => {
				return(<ProductCard key = {product.id} product={product}/>)
			})}
			{productsList.length ? null : <h2>Woops, nothing matches your search</h2>}
		</div>
	)
};
