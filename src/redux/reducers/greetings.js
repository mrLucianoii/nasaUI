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
      //console.log(action);
      let tester = Object.assign({}, state, action);
    //  console.log(tester);
      return Object.assign({}, state, action);
    case SET_MARS:
        return {
              image: action.marsData.json,
              completed: true
          } 
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
