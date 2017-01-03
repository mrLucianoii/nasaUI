import React from 'react'
import { connect } from 'react-redux';
import actions from '../redux/actions';

import {
 Button, Form, Checkbox, ControlLabel,
 FormControl, FormGroup
} from '@sketchpixy/rubix'

@connect((state) => state)
export default class SideControler extends React.Component {
    constructor(...args) {
	    super(...args)
        this.state = { value: '' }
    }
    handleChange(e, store) {
        console.log("Prop inside SControler: ", this.props)
        this.setState({ value: e.target.value })

        console.log("Prop inside SControler: ", this.state.value)

       // let { curiosityStore, dispatch } = this.props

      //  store.dispatch(action.getMarsImagesBySol("67"))
    } 
    render(){

        return (
            <Form>
                <FormGroup controlId="formControlsText">
                    <ControlLabel>Enter a Sol (feature comming soon)</ControlLabel>
	                 <FormControl 
                     type="text" 
                     value={this.state.value}
                     //onChange={::this.handleChange}
                     />
	            </FormGroup>
            </Form>
        );
    }
}