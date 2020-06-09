import React from "react";
import PropTypes from "prop-types";
import {updateData, updateViewData} from "../redux/actions/dataActions";
import { connect } from "react-redux";
import NavigationContainer from "./UI/Products/NavigationContainer";
import AppBar from "./UI/Cart/AppBar";

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			nbItems: 0
		};
	}

	componentDidMount() {
		const addData = this.props.addData;
		const setNbPage = (nbItems) => this.setState({nbItems});
		// eslint-disable-next-line no-undef
		fetch("https://jsonplaceholder.typicode.com/photos")
			.then(response => response.json())
			.then(json => {
				addData(json);
				setNbPage(json.length);
			});
	}

	filterData(filter){
		const setCurrentData = this.props.setCurrentData;
		const setNbPage = (nbItems) => this.setState({nbItems});
		// eslint-disable-next-line no-undef
		fetch("https://jsonplaceholder.typicode.com/photos?q="+filter)
			.then(response => response.json())
			.then(json => {
				setCurrentData(json);
				setNbPage(json.length);
			});
	}

	render(){
		return (
			<div style = {{display: "flex", flexDirection: "column"}}>
				<AppBar/>
				<NavigationContainer nbItems = {this.state.nbItems} filterData = {this.filterData.bind(this)}/>
			</div>
		);
	}
}

App.propTypes = {
	addData: PropTypes.func.isRequired, //Action to send the data in the store
	setCurrentData: PropTypes.func.isRequired //Action to set the visual data in the store
};

const mapDispatchToProps = function(dispatch){
	return ({
		addData: data => dispatch(updateData(data)),
		setCurrentData: data => dispatch(updateViewData(data))
	});
};

export default connect(null, mapDispatchToProps)(App);
