import React from 'react'
import { withRouter } from 'react-router'
import actions from '../redux/actions'
import { connect } from 'react-redux'

import {
 Button, Form, Checkbox, ControlLabel,
 FormControl, FormGroup
} from '@sketchpixy/rubix'

@connect((state)=> state)
@withRouter
export default class SideControler extends React.Component {
    constructor(...args) {
	    super(...args)
        this.state = { value: '' }
        console.log("inside Super: ", this)
    }
    handleChange(e) {
        let { dispatch } = this.props
        let $target = e.target.value
        this.setState({ value: $target })

        console.log("inside handleChange with input value of: ", $target)

        return dispatch(actions.getMarsImagesBySol($target))

    } 
    render(){
        return (
            <Form>
                <FormGroup controlId="formControlsText">
                    <ControlLabel>(feature in development)</ControlLabel>
                     <FormControl type="text" value={this.state.value} onChange={::this.handleChange}/>
                     <ul>
                        <li>Enter what Sol you'd like to see (Sol is a Mars Day)</li>
                        <li>Will query all of Curiosity's cameras for that Sol (day)</li>
                        <li>More search filters to come</li>
                     </ul>
	            </FormGroup>
            </Form>
        );
    }
}