/*
Component to create a text form
 */

import React, { useState } from "react";
import PropTypes from "prop-types";

export default function FilterForm({title, onSubmit}){
	const [value, setValue] = useState("");

	return(
		<form onSubmit={(event) => {
			event.preventDefault();
			onSubmit(value);
		}}>
			<label>
				{title}
				<input
					type="text"
					value={value}
					style = {{margin:2}}
					onChange={(event) => setValue(event.target.value)}
				/>
			</label>
			<input type="submit" value="Submit" />
		</form>);
}

FilterForm.propTypes = {
	title: PropTypes.string, //Title of the form
	onSubmit: PropTypes.func.isRequired //Submit function of the form
};
