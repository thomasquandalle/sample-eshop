/*
Component to hold the navigation button and send which product page we are on to the data container
Props:{
	nbItems: Number of items in the data collection received by the App,
	filterData: Callback to filter the data
}
 */

import React from "react";
import PropTypes from "prop-types";
import {pagination} from "../../../constants";
import DataContainer from "./DataContainer";
import {NavigationButtons} from "../../genericComponents/NavigationButtons";
import FilterForm from "../../genericComponents/FilterForm";

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

	componentDidUpdate(prevProps) {
		if(prevProps.nbItems !== this.props.nbItems){
			this.setState({maxPage: parseInt(this.props.nbItems/pagination)+1});
		}
	}

	previousPage(){
		const currentPage = this.state.page;
		if(currentPage > 1 ){
			this.setState({page: currentPage - 1});
		}
	}

	nextPage(){
		const currentPage = this.state.page;
		if(currentPage < this.state.maxPage){
			this.setState({page: currentPage + 1});
		}
	}

	render(){
		return(
			<div style = {{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundColor: "rgba(256, 256, 256, 0.87)",
				margin: 16
			}}
			>

				<NavigationButtons
					currentPage = {this.state.page}
					maxPage = {this.state.maxPage}
					onClickNext = {() => this.nextPage()}
					onClickPrevious={() => this.previousPage()}
				/>
				<FilterForm onSubmit={this.props.filterData} title={"Filter by title: "}/>
				<DataContainer currentPage = {this.state.page} changeMaxPage = {(maxPage) => this.setState({maxPage: maxPage/15})}/>
				<NavigationButtons
					currentPage = {this.state.page}
					maxPage = {this.state.maxPage}
					onClickNext = {() => this.nextPage()}
					onClickPrevious={() => this.previousPage()}
				/>

			</div>
		);
	}
}

NavigationContainer.propTypes = {
	nbItems: PropTypes.number.isRequired, //Number of items in the data collection received by the App,
	filterData: PropTypes.func.isRequired //Callback to filter the data
};
