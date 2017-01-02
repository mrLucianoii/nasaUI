import {
  GET_GREETING,
  GET_NASAPIC,
  SET_MARS,
  SET_MARS_TEST
} from '../actions/actionTypes';

function nasaPortal(state = [], action) {
  switch(action.type) {
    case GET_GREETING:
      return action.result.data.greetings;
    case GET_NASAPIC:
      //console.log(action);
      let tester = Object.assign({}, state.result, action.result);
     console.log(tester);
      return {
        result: [
          action.result,
          ...state.result,

        ]
      };
    case SET_MARS:
        return {
              image: action.marsData.json,
              completed: true
          } ;
    case SET_MARS_TEST: 
      return Object.assign({}, state, action);
    default:
      return state;
  }
}
function nasaApp (state = {}, action){
  return {
    nas
  }
}

module.exports = {
  nasaPortal,
};
