import { GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_ID } from "../actions-types/index";






const initialState = {
	products: [],
	allProducts: [],
	productsID: []
};


function rootReducer(state= initialState, action) {
	switch(action.type){
	case GET_ALL_PRODUCTS:
		return{
			...state,
			products: action.payload,
			allProducts: action.payload
		}
	case GET_ALL_PRODUCTS_ID:
		return{
			...state,
			productsID: action.payload,
		}
	default:
		return state;
	}
}

export default rootReducer;