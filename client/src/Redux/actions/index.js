import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_ID,
  GET_ALL_PRODUCTS_NAME,
  POST_NEW_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  CREATE_NEW_USER,
  UPDATE_USER,
  SEARCH_USER,
  GET_ALL_USERS,
  SET_CURRENT_PAGE,
  SET_BANNED_PRODUCT,
  SET_FEATURED_PRODUCT,
} from "../actions-types/index.js";
const { REACT_APP_GET_ALL_PRODUCTS } = process.env;
import axios from "axios";

export function getAllProducts(categoria) {
  return async function(dispatch) {
    try {

      const response = await axios.get(`https://pf10a-production.up.railway.app/products/`);


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

      const response = await axios.get(`https://pf10a-production.up.railway.app/products/${id}`);
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
        `https://pf10a-production.up.railway.app/search/?name=${name}`
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
      "https://pf10a-production.up.railway.app/products/create",
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
    const response = await axios.get("https://pf10a-production.up.railway.app/filtrado", {
      params: query,
    });
    dispatch({
      type: SET_FILTERED_PRODUCTS,
      payload: response.data,
    });
  };
}
export function createNewUser(given_name ,family_name,email,picture) {
  return async function(dispatch) {
    try {
      const response = await axios.post("https://pf10a-production.up.railway.app/users/create/", {given_name, family_name, email, picture });
      dispatch({
        type: CREATE_NEW_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function updateUser(email, first_name, last_name, nationality, date_birth, mobile) {
  return async function(dispatch) {
    try {
      const response = await axios.put(`https://pf10a-production.up.railway.app/users/modify/${email.email}`, first_name, last_name, nationality, date_birth, mobile);
      dispatch({
        type: UPDATE_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function searchUser(email) {
  return async function(dispatch) {
    try {
      const response = await axios.put(`https://pf10a-production.up.railway.app/users/modify/${email.email}`);
      dispatch({
        type: SEARCH_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getAllUsers(){
  return async function(dispatch) {
    try{
      const response = await axios.get(`https://pf10a-production.up.railway.app/users`)
    dispatch({
      type: GET_ALL_USERS,
      payload: response.data
    })
    }catch(error){
      console.log(error);
    }
}
}
export function setCurrentPage(payload){
  return {
    type: SET_CURRENT_PAGE,
    payload
  }
}

export function setBannedProduct(id){

 
  return async function(dispatch){
    try {
      const response = await axios.put(`https://pf10a-production.up.railway.app/products/disable/${id}`)
      dispatch({
        type: SET_BANNED_PRODUCT,
        payload: response.data
      })
    } catch (err) {
      console.log(err);
      
    }
  }
}

export function setFeaturedProduct(id){
  return async function(dispatch){
    try {
      const response = await axios.put(`https://pf10a-production.up.railway.app/products/featured/${id}`)
      dispatch({
        type: SET_FEATURED_PRODUCT,
        payload: response.data
      })
    } catch (err) {
      console.log(err);
      
    }
  }
}