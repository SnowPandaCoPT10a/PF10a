import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_ID,
  GET_ALL_PRODUCTS_NAME,
  POST_NEW_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  CREATE_NEW_USER,
  UPDATE_USER,
  GET_ALL_USERS,
  SEARCH_USER,
  SET_CURRENT_PAGE,
  SET_BANNED_PRODUCT,
  SET_FEATURED_PRODUCT,
  SET_PRIVILEGE_USER,
  SET_STATUS_USER,
  UPDATE_ADDRESS,
  GET_ALL_BILLS,
  GET_ALL_REVIEWS,
  UPDATE_STOCK,
  SET_ACTIVE_BILLS,
  PUT_HIDDEN_REVIEWS
} from "../actions-types/index";

const initialState = {
  products: [],
  allProducts: [],
  productsID: [],
  users:[],
  user:[],
  currentPage: 1,
  allBills: [],
  allReviews: [],
  reviewButton: 0,
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
      /*if (action.payload.length === 0) {
        alert("No se encontraron productos con ese nombre");
      return { ...state}
        }*/
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
      };
    case POST_NEW_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
        allProducts: [...state.allProducts, action.payload],
      };
    case SET_ACTIVE_BILLS:
      return{
        ...state,
        reviewButton: action.payload
      }
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
          ...state,
          users: action.payload,
          user: action.payload,
        }
        case SET_CURRENT_PAGE:
        return{
          ...state,
          currentPage: action.payload
        }
      case SET_BANNED_PRODUCT:
          return{
            ...state,
            products: action.payload,
            allProducts: action.payload,
          }
      case SET_FEATURED_PRODUCT:
        return{
          ...state,
          products: action.payload,
            allProducts: action.payload,
        }
      case SET_PRIVILEGE_USER:
        return{
          ...state,
          users: action.payload,
          user: action.payload,
        }
      case SET_STATUS_USER:
        return{
          ...state,
          users: action.payload,
          user: action.payload,
        }
        case UPDATE_ADDRESS:
          return{
            ...state,
            users: action.payload,
            user: action.payload
          }
        case GET_ALL_BILLS:
          return{
            ...state,
            allBills:action.payload,
          }
        case GET_ALL_REVIEWS: 
        return{
          ...state,
          allReviews: action.payload
        }
        case UPDATE_STOCK:
          return {
            ...state,
            products: action.payload
          }

          case PUT_HIDDEN_REVIEWS:
            return{
              ...state,
              allReviews: action.payload
            }
    default:
      return state;
  }
}

export default rootReducer;
