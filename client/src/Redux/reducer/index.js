import { GET_ALL_PRODUCTS } from "../actions-types/index";






const initialState = {
	products: [],
	allProducts: [],
};


function rootReducer(state= initialState, action) {
	switch(action.type){
	case GET_ALL_PRODUCTS:
		const hola = state.products
		console.log(hola, 'dame la info')
		return{
			...state,
			products: action.payload,
			allProducts: action.payload
		}
	default:
		return state;
	}
}

export default rootReducer;