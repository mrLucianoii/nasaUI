import {
  GET_GREETING,
  GET_NASAPIC,
  IS_TODAY,
  GET_IMAGE_BY_SOL
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
  }
}

function getMarsImagesBySol(){
  return dispatch => {
    return axios.get("https://gentle-crag-31085.herokuapp.com/marsDay/900")
    .then((result) => {
      dispatch({type: GET_IMAGE_BY_SOL, result: result.data});
    }).catch((error) => {
      dispatch({type: GET_IMAGE_BY_SOL, error });
    });
  }
}

module.exports = {
  getNasaToday,
  getMarsImagesBySol
};
