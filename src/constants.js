import PropTypes from "prop-types";

export const PAGINATION = 15;
export const PRODUCT_SHAPE = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};

export const CONTENT_URL = "https://jsonplaceholder.typicode.com/photos";
