import {
  GET_GREETING,
  GET_NASAPIC,
  SET_MARS
} from '../actions/actionTypes';

function nasaPortal(state = [], action) {
  switch(action.type) {
    case GET_GREETING:
      return action.result.data.greetings;
    case GET_NASAPIC:
      return action.result;
    case SET_MARS:
        return {
              image: "comming soon",
              completed: true
          } 
    default:
      return state;
  }
}


module.exports = {
  nasaPortal,
};
