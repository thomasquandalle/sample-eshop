import React from "react";
import PropTypes from "prop-types";
import { fetchAndUpdateData} from "../redux/actions/dataActions";
import { connect } from "react-redux";
import NavigationContainer from "./UI/Products/NavigationContainer";
import AppBar from "./UI/Cart/AppBar";

class App extends React.Component {

	componentDidMount() {
		this.props.updateData("", false);
	}

	render(){
		return (
			<div style = {{display: "flex", flexDirection: "column"}}>
				<AppBar/>
				<NavigationContainer/>
			</div>
		);
	}
}

App.propTypes = {
	updateData: PropTypes.func.isRequired, //Action to fetch and update the data
};

const mapDispatchToProps = function(dispatch){
	return ({
		updateData: () => dispatch(fetchAndUpdateData("", false)),
	});
};

export default connect(null, mapDispatchToProps)(App);
