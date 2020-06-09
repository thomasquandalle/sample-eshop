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
import PropTypes from "prop-types";

const styles = {
	container: {
		margin: 4,
		width : "33%",
		display: "flex",
		justifyContent: "space-around"},
	button:{
		border: 0,
		backgroundColor: "rgb(95,180,174)",
		color: "rgb(255,255,255)",
		boxShadow: "none",
		borderRadius: "5px"
	}
};

export const NavigationButtons = ({currentPage, maxPage, onClickNext = () => {}, onClickPrevious = () => {}}) => (
	<div
		style ={styles.container}
	>
		<button style = {styles.button} onClick={onClickPrevious}>Previous page</button>
		Page {currentPage} / {maxPage}
		<button style = {styles.button} onClick={onClickNext}>Next Page</button>
	</div>
);

NavigationButtons.propTypes = {
	currentPage: PropTypes.number.isRequired, //Current page of products
	maxPage: PropTypes.number.isRequired, //Max number of pages according to pagination and number of items
	onClickNext: PropTypes.func, //Function to trigger when the button "Next Page" is clicked
	onClickPrevious: PropTypes.func //Function to trigger when the button "Previous Page" is clicked
};
