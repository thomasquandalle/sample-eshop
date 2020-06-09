import PropTypes from "prop-types";

export const pagination = 15;
export const productShape = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
