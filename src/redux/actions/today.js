// actions
import { GET_NASAPIC } from './actionsTypes'

import axios from 'axios'

function getNasaToday() {
    return dispatch => {
        return axios.get("https://gentle-crag-31085.herokuapp.com/api/apod")
        .then( (result) => {
            dispatch({
                type: GET_NASAPIC,
                result: result.data
            })
            console.log(result)
        })
        .catch( (error) => { 
            dispatch({
                type: GET_NASAPIC,
                error: result.data.errors   
            })
            console.log(error) 
        });
    }// end dispatch
}

module.exports = {
    getNasaToday
}