import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_ID,
  GET_ALL_PRODUCTS_NAME,
  POST_NEW_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  CREATE_NEW_USER,
  UPDATE_USER,
  GET_ALL_USERS,
  SEARCH_USER
} from "../actions-types/index";

const initialState = {
  products: [],
  allProducts: [],
  productsID: [],
  users:[],
  user:[]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };
    case GET_ALL_PRODUCTS_ID:
      return {
        ...state,
        productsID: action.payload,
      };
    case GET_ALL_PRODUCTS_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case POST_NEW_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
        allProducts: [...state.allProducts, action.payload],
      };
    case SET_FILTERED_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case CREATE_NEW_USER:
      return {
        ...state,
        users: action.payload,
        user: action.payload
      } 
      case UPDATE_USER:
        return{
          ...state,
          users: action.payload,
          user: action.payload
        }
      case SEARCH_USER:
        return{
          ...state,
          users: action.payload,
          user: action.payload
        }
      case GET_ALL_USERS:
        return{
          
          user: action.payload
        }
    default:
      return state;
  }
}

export default rootReducer;
