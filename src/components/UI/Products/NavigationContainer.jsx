/*
Component to hold the navigation button and send which product page we are on to the data container
Props:{
	nbItems: Number of items in the data collection received by the App,
	filterData: Callback to filter the data
}
 */

import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {PAGINATION} from "../../../constants";
import DataContainer from "./DataContainer";
import NavigationButtons from "../../genericComponents/NavigationButtons";
import FilterForm from "../../genericComponents/FilterForm";
import { fetchAndUpdateData } from "../../../redux/actions/dataActions";

function NavigationContainer({nbItems, filterData}){

	//Define the states using Hooks
	const [page, setPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);


	useEffect(() => {
		setMaxPage(parseInt(nbItems/PAGINATION)+1);
	}, [nbItems]);

	function previousPage(){
		const currentPage = page;
		if(currentPage > 1 ){
			setPage(currentPage - 1);
		}
	}

	function nextPage(){
		const currentPage = page;
		if(currentPage < maxPage){
			setPage(currentPage + 1);
		}
	}

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
				currentPage = {page}
				maxPage = {maxPage}
				onClickNext = {() => nextPage()}
				onClickPrevious={() => previousPage()}
			/>
			<FilterForm
				onSubmit={filterData}
				title={"Filter by title: "}
			/>
			<DataContainer
				currentPage = {page}
			/>
			<NavigationButtons
				currentPage = {page}
				maxPage = {maxPage}
				onClickNext = {() => nextPage()}
				onClickPrevious={() => previousPage()}
			/>

		</div>
	);
}

NavigationContainer.propTypes = {
	nbItems: PropTypes.number.isRequired, //Number of items in the data collection received by the App,
	filterData: PropTypes.func.isRequired //Callback to filter the data
};

const mapStateToProps = (state) => {
	return { nbItems: state.data.viewData.length };
};

const mapDispatchToProps = function(dispatch){
	return ({
		filterData: (filter) => dispatch(fetchAndUpdateData(filter, true)),
	});
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
