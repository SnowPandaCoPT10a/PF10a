import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_ID,
  GET_ALL_PRODUCTS_NAME,
  POST_NEW_PRODUCTS,
  SET_FILTERED_PRODUCTS,
} from "../actions-types/index.js";
const { REACT_APP_GET_ALL_PRODUCTS } = process.env;
import axios from "axios";

export function getAllProducts(categoria) {
  return async function(dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/products/`);

      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllProductsId(id) {
  return async function(dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      return dispatch({
        type: GET_ALL_PRODUCTS_ID,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllProductsName(name) {
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/search/?name=${name}`
      );

      return dispatch({
        type: GET_ALL_PRODUCTS_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log("CAMOTE", error);
    }
  };
}

export function postProducts(payload) {
  return async function(dispatch) {
    const response = await axios.post(
      "http://localhost:3001/products/create",
      payload
    );
    return dispatch({
      type: POST_NEW_PRODUCTS,
      payload: response.data,
    });
  };
}

export function FilteredProducts(query) {
  return async function(dispatch) {
    const response = await axios.get("http://localhost:3001/filtrado", {
      params: query,
    });
    dispatch({
      type: SET_FILTERED_PRODUCTS,
      payload: response.data,
    });
  };
}
