/*
Component to create a text form
 */

import React from "react";
import PropTypes from "prop-types";

export default class FilterForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {value: ""};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render(){
		return(<form onSubmit={(event) => {
			event.preventDefault();
			this.props.onSubmit(this.state.value);
		}}>
			<label>
				{this.props.title}
				<input type="text" value={this.state.value} style = {{margin:2}} onChange={this.handleChange} />        </label>
			<input type="submit" value="Submit" />
		</form>);
	}

}

FilterForm.propTypes = {
	title: PropTypes.string, //Title of the form
	onSubmit: PropTypes.func.isRequired //Submit function of the form
};
