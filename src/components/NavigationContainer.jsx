/*
Component to hold the navigation button and send which product page we are on to the data container
Props:{
	nbItems: Number of items in the data collection received by the App
}
 */

import React from "react";
import {pagination} from "../constants";
import DataContainer from "./DataContainer";
import {NavigationButtons} from "./genericComponents/NavigationButtons";

export default class NavigationContainer extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			page: 1,
			maxPage: 1
		};
		this.previousPage = this.previousPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(prevProps.nbItems !== this.props.nbItems){
			this.setState({maxPage: parseInt(this.props.nbItems/pagination)+1})
		}
	}

	previousPage(){
		const currentPage = this.state.page;
		if(currentPage > 1 ){
			this.setState({page: currentPage - 1})
		}
	}

	nextPage(){
		const currentPage = this.state.page;
		if(currentPage < this.state.maxPage){
			this.setState({page: currentPage + 1})
		}
	}

	render(){
		return(
			<div style = {{
				display: "flex",
				flexDirection: "column",
				alignItems: "center"}}
			>
				<NavigationButtons
					currentPage = {this.state.page}
					maxPage = {this.state.maxPage}
					onClickNext = {() => this.nextPage()}
					onClickPrevious={() => this.previousPage()}
					/>
				<DataContainer currentPage = {this.state.page}/>
				<NavigationButtons
					currentPage = {this.state.page}
					maxPage = {this.state.maxPage}
					onClickNext = {() => this.nextPage()}
					onClickPrevious={() => this.previousPage()}
				/>

			</div>
				)
	}
}