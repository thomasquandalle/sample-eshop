import React from 'react';
import './App.css';
import {updateData} from "../redux/actions/dataActions";
import { connect } from "react-redux";
import NavigationContainer from "./NavigationContainer";

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			nbItems: 0
		}
	}

	componentDidMount() {
		const addData = this.props.addData;
		const setNbPage = (nbItems) => this.setState({nbItems})
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then(response => response.json())
			.then(json => {
				addData(json)
				setNbPage(json.length)
			});
	}

	render(){
		return (
			<div className="App">
				<NavigationContainer nbItems = {this.state.nbItems} />
			</div>
		);
	}
}

const mapDispatchToProps = function(dispatch){
	return ({
		addData: data => dispatch(updateData(data))
	})
};

export default connect(null, mapDispatchToProps)(App);
