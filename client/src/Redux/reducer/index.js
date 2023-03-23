import {GET_ALL_ACCESSORIES, GET_ALL_TSHIRTS} from "../actions-types/index";






const initialState = {
	accessories: [],
	allAccessories:[],
	tshirts: [],
	allTshirts: [],
};


function rootReducer(state= initialState, action) {
	switch(action.payload){
	case GET_ALL_ACCESSORIES:
		return{
			...state,
			accessories: action.payload,
			allAccessories: action.payload
		}
	case GET_ALL_TSHIRTS:
		return{
			...state,
			tshirts: action.payload,
			allTshirts: action.payload
		}
	default:
		return state;
	}
}

export default rootReducer;