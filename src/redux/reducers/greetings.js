import {
  GET_GREETING,
  GET_NASAPIC,
  GET_IMAGE_BY_SOL
} from '../actions/actionTypes';
import actions from "../actions"

function nasaPortal(state = [], action) {
  switch(action.type) {
    case GET_GREETING:
      return action.result.data.greetings;
    case GET_NASAPIC:
      return {
        result: [
          {
            type: action.type,
            apod: action.result,
            completed: true
          },
         ...state.result,
        ]
      };
    default:
      return state;
  }
}
function curiosityStore (state = [], action){
 //console.log("inside CS");
 
  switch (action.type) {
    case GET_IMAGE_BY_SOL:
       return {
          result: [
            {
              imageList: action.result,
              receivedAt: Date.now(),    
              completed: true
            },
            ...state.result
          ]         
          }
    default:
      return state;
  }
}

module.exports = {
  nasaPortal,
  curiosityStore
};
