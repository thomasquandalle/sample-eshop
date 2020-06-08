/*
Component to create a text form
 */

import React from "react";


export default class FilterForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render(){
		return(<form onSubmit={(event) => {
			event.preventDefault();
			this.props.onSubmit(this.state.value)
		}}>
			<label>
				{this.props.title}
				<input type="text" value={this.state.value} style = {{margin:2}} onChange={this.handleChange} />        </label>
			<input type="submit" value="Submit" />
		</form>)
	}

}
