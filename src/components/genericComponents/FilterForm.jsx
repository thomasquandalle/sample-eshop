/*
 Component make a text form. Not completely generic because the title is set
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
				Filter by title:
				<input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
			<input type="submit" value="Submit" />
		</form>)
	}

}
