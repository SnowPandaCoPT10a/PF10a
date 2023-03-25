import {GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_ID, GET_ALL_PRODUCTS_NAME} from '../actions-types/index.js'
const { REACT_APP_GET_ALL_PRODUCTS } = process.env;
import axios from "axios";


// export function getAccessories() {
//   return async function (dispatch) {
//     try {
//       const response = await axios.get(REACT_APP_GET_ALL_ACCESSORIES);
//       if (response.status === 202) {
//         return dispatch({
//           type: GET_ALL_ACCESSORIES,
//           payload: response.data
//         });
//       } else {
//         console.log(`Error: received status code ${response.status}`);
//       }
//     } catch(error) {
//       console.log(error);
//     }
//   }
// }


// export function getTshirts() {
//   return async function (dispatch) {
//     try {
//       const response = await axios.get(REACT_APP_GET_ALL_TSHIRTS);
//       if (response.status === 202) {
//         return dispatch({
//           type: GET_ALL_TSHIRTS,
//           payload: response.data
//         });
//       } else {
//         console.log(`Error: received status code ${response.status}`);
//       }
//     } catch(error) {
//       console.log(error);
//     }
//   }
// }



export function getAllProducts() {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/products');
    
        return dispatch({
          type: GET_ALL_PRODUCTS,
          payload: response.data
        });
         } catch(error) {
      console.log(error);
    }
  }
}


export function getAllProductsId(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
        return dispatch({
          type: GET_ALL_PRODUCTS_ID,
          payload: response.data
        });
         } catch(error) {
      console.log(error);
    }
  }
}


export function getAllProductsName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/products?name=${name}`);
        return dispatch({
          type: GET_ALL_PRODUCTS_NAME,
          payload: response.data
        });
         } catch(error) {
      console.log(error);
    }
  }
}