import {GET_ALL_ACCESSORIES, GET_ALL_TSHIRTS} from '../actions-types/index.js'
const { REACT_APP_GET_ALL_ACCESSORIES, REACT_APP_GET_ALL_TSHIRTS } = process.env;


export function getAccessories() {
  return async function (dispatch) {
    try {
      const response = await axios.get(REACT_APP_GET_ALL_ACCESSORIES);
      if (response.status === 202) {
        return dispatch({
          type: GET_ALL_ACCESSORIES,
          payload: response.data
        });
      } else {
        console.log(`Error: received status code ${response.status}`);
      }
    } catch(error) {
      console.log(error);
    }
  }
}


export function getTshirts() {
  return async function (dispatch) {
    try {
      const response = await axios.get(REACT_APP_GET_ALL_TSHIRTS);
      if (response.status === 202) {
        return dispatch({
          type: GET_ALL_TSHIRTS,
          payload: response.data
        });
      } else {
        console.log(`Error: received status code ${response.status}`);
      }
    } catch(error) {
      console.log(error);
    }
  }
}