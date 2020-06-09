/*
This DataContainer connects the productsList to the actual data stored in the store
Props:
{
	currentPage: (Int) Page in the navigation to get the products used
	data: (Array) Array of products from the store to slice and filter (if needed)
}
 */

import { connect } from "react-redux";
import {ProductsList} from "../../genericComponents/ProductsList";
import {pagination} from "../../../constants";


const mapStateToProps = (state, ownProps) => {
	const index_begin = (ownProps.currentPage - 1) * pagination;
	const filteredProducts = state.data.viewData; //Filtered in the store directly
	const slicedProducts = filteredProducts.slice(index_begin, index_begin + pagination);
	return{
		productsList : slicedProducts
	};
};

export default connect(mapStateToProps)(ProductsList);