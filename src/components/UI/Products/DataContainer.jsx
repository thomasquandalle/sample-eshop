/*
This DataContainer connects the productsList to the actual data stored in the store
Props:
{
	currentPage: (Int) Page in the navigation to get the products used
	viewData: (Array) Array of products from the store to slice, already filtered
}
 */

import { connect } from "react-redux";
import ProductsList from "../../genericComponents/ProductsList";
import {PAGINATION} from "../../../constants";


const mapStateToProps = (state, ownProps) => {
	const index_begin = (ownProps.currentPage - 1) * PAGINATION;
	const filteredProducts = state.data.viewData; //Filtered in the store directly
	const slicedProducts = filteredProducts.slice(index_begin, index_begin + PAGINATION);
	return{
		productsList : slicedProducts
	};
};

export default connect(mapStateToProps)(ProductsList);
