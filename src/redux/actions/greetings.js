import {
  GET_GREETING,
  GET_NASAPIC,
} from './actionTypes';

import axios from 'axios';

import GraphQLSettings from '../../../graphql.json';

let GraphQLEndpoint = GraphQLSettings.development.endpoint;

if (process.env.NODE_ENV === 'production') {
  GraphQLEndpoint = GraphQLSettings.production.endpoint;
}

function getNasaTodayTest(inputMessage) {
      let query = `
    query nasaData($inputMessage: String) {
      nasaPic {
        nasa(message: $inputMessage)
      }
    }
  `;

  let variables = { inputMessage };

  return dispatch => {
    return axios.post(GraphQLEndpoint, {
      query,
      variables
    }).then((result) => {
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

function getGreeting(inputMessage) {
  let query = `
    query echoGreeting($inputMessage: String) {
      greetings {
        hello(message: $inputMessage)
      }
    }
  `;

  let variables = { inputMessage };

  return dispatch => {
    return axios.post(GraphQLEndpoint, {
      query,
      variables
    }).then((result) => {
      dispatch({
        type: GET_GREETING,
        result: result.data,
      });
    }).catch((error) => {
      dispatch({
        type: GET_GREETING,
        error,
      });
    });
  };
}

module.exports = {
  getGreeting,
  getNasaToday,
};
