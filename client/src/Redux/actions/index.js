import {GET_ALL_ACCESSORIES, GET_ALL_TSHIRTS} from '../actions-types/index.js'



export function getAccessories() {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/accessories');
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
      const response = await axios.get('http://localhost:3001/tshirts');
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