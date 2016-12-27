import {
  GET_GREETING,
  GET_NASAPIC,
  IS_TODAY,
  IS_MARS,
} from './actionTypes';

import axios from 'axios';

import GraphQLSettings from '../../../graphql.json';

let GraphQLEndpoint = GraphQLSettings.development.endpoint;

if (process.env.NODE_ENV === 'production') {
  GraphQLEndpoint = GraphQLSettings.production.endpoint;
}

function isMars(marsData){
  
  return {
    type: IS_MARS,
    json: marsData,
    receivedAt: Date.now()
  }
}

function getNasaToday() {   
  return dispatch => {
    return axios.get("https://gentle-crag-31085.herokuapp.com/api/apod")
    .then((result) => {
      console.log(result.data)
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


module.exports = {
  getNasaToday,
};
