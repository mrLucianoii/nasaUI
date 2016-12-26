import {
  GET_GREETING,
  GET_NASAPIC,
} from '../actions/actionTypes';

function nasaPortal(state = [], action) {
  switch(action.type) {
    case GET_GREETING:
      return action.result.data.greetings;
    case GET_NASAPIC:
      return action.result;
    default:
      return state;
  }
}

module.exports = {
  nasaPortal,
};
