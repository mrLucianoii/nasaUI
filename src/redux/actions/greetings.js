import {
  GET_GREETING,
  GET_NASAPIC,
  IS_TODAY,
  SET_MARS,
  SET_MARS_TEST
} from './actionTypes';

import axios from 'axios';

import GraphQLSettings from '../../../graphql.json';

let GraphQLEndpoint = GraphQLSettings.development.endpoint;

if (process.env.NODE_ENV === 'production') {
  GraphQLEndpoint = GraphQLSettings.production.endpoint;
}

function getNasaToday() {   
  return dispatch => {
    return axios.get("https://gentle-crag-31085.herokuapp.com/api/apod")
    .then((result) => {
      dispatch({
        type: GET_NASAPIC,
        result: result.data,
      });
    }).catch((error) => {
      dispatch({
        type: GET_NASAPIC,
        error,
      });
    });
  };
}

function isMars(){
    // GET MARS DATA marsData.json = "Mars Data HI"    
    let marsData = {
        json: undefined,
        receivedAt: Date.now()    
    }
    if (typeof marsData === undefined){
      axios.get("https://gentle-crag-31085.herokuapp.com/isMars")
      .then((result) => {
        marsData.json = result
      })
      .catch((error) => {
        marsData.json = error
      })
  }  
    return { type: SET_MARS, marsData }  
}
function getMarsTest(textInput){
  if (textInput === undefined)
    textInput = "default Blab"
  return { type: SET_MARS_TEST, text: textInput }
}
module.exports = {
  getNasaToday,
  isMars,
  getMarsTest
};
