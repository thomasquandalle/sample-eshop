import React from 'react';
import './App.css';
import {updateData} from "../redux/actions/dataActions";
import { connect } from "react-redux";
import {ProductsList} from "./genericComponents/ProductsList";

const sampleProductLists =   [{
	"albumId": 1,
	"id": 1,
	"title": "accusamus beatae ad facilis cum similique qui sunt",
	"url": "https://via.placeholder.com/600/92c952",
	"thumbnailUrl": "https://via.placeholder.com/150/92c952"
},
	{
		"albumId": 1,
		"id": 1,
		"title": "accusamus beatae ad facilis cum similique qui sunt",
		"url": "https://via.placeholder.com/600/92c952",
		"thumbnailUrl": "https://via.placeholder.com/150/92c952"
	},
	{
		"albumId": 1,
		"id": 1,
		"title": "accusamus beatae ad facilis cum similique qui sunt",
		"url": "https://via.placeholder.com/600/92c952",
		"thumbnailUrl": "https://via.placeholder.com/150/92c952"
	},
	{
		"albumId": 1,
		"id": 1,
		"title": "accusamus beatae ad facilis cum similique qui sunt",
		"url": "https://via.placeholder.com/600/92c952",
		"thumbnailUrl": "https://via.placeholder.com/150/92c952"
	},
	{
		"albumId": 1,
		"id": 1,
		"title": "accusamus beatae ad facilis cum similique qui sunt",
		"url": "https://via.placeholder.com/600/92c952",
		"thumbnailUrl": "https://via.placeholder.com/150/92c952"
	},
	{
		"albumId": 1,
		"id": 1,
		"title": "accusamus beatae ad facilis cum similique qui sunt",
		"url": "https://via.placeholder.com/600/92c952",
		"thumbnailUrl": "https://via.placeholder.com/150/92c952"
	},
	{
		"albumId": 1,
		"id": 1,
		"title": "accusamus beatae ad facilis cum similique qui sunt",
		"url": "https://via.placeholder.com/600/92c952",
		"thumbnailUrl": "https://via.placeholder.com/150/92c952"
	}];

class App extends React.Component {

	componentDidMount() {
		const addData = this.props.addData;
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then(response => response.json())
			.then(json => addData(json));
	}

	render(){
		return (
			<div className="App">
				<ProductsList productsList = {sampleProductLists}/>
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
