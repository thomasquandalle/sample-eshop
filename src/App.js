import React from 'react';
import logo from './logo.svg';
import './App.css';
import {updateData} from "./redux/actions/dataActions";
import { connect } from "react-redux";

class App extends React.Component {

	componentDidMount() {
		const addData = this.props.addData;
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then(response => response.json())
			.then(json => {console.log(json); addData(json)});
	}

	render(){
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
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
