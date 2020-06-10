/*
	Simple overlay to put, by default, top right just below the appBar
	Props:{
		open: (Bool) Overlay visible or not
		style: (Object, optional) Optional style to customize the overlay
	}
 */

import React from "react";
import PropTypes from "prop-types";

const defaultStyles = {
	overlay: {
		position: "fixed",
		width: "20vw",
		height: "50vh",
		top: "max(calc(5vh + 32px), 50px)",
		right: 0,
		backgroundColor: "rgba(255,255, 255)",
		boxShadow: "-5px 5px rgba(0,0,0,0.1)",
		zIndex: 2,
		overflowX: "auto",
	}
};

export default function Overlay({open, children, style = null}){
	if(open){
		let styles = defaultStyles.overlay;
		if(style){
			styles = Object.assign({}, defaultStyles.overlay, style);
		}
		return(
			<div style = {styles}>
				{children}
			</div>
		);
	}
	else {
		return null;
	}
}

Overlay.propTypes = {
	open: PropTypes.bool.isRequired,
	style: PropTypes.object,
	children: PropTypes.array
};
