/*
This component is for Navigating Buttons: current page, next page or previous page
Props:{
	currentPage: (Int) Current page of products
	maxPage: (Int) Max number of pages according to pagination and number of items
	onClickNext: (Function) Function to trigger when the button "Next Page" is clicked
	onClickPrevious: (Function) Function to trigger when the button "Previous Page" is clicked
}
 */

import React from "react";

export const NavigationButtons = ({currentPage, maxPage, onClickNext, onClickPrevious}) => (
	<div
		style ={{
			margin: 4,
			width : "33%",
			display: "flex",
			justifyContent: "space-around"}}
	>
		<button onClick={onClickPrevious}>Previous page</button>
		Page {currentPage} / {maxPage}
		<button onClick={onClickNext}>Next Page</button>
	</div>
);