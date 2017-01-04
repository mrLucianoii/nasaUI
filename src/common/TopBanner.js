import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import isMobileCheckPropValue from '../helpers/function'
import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
  Jumbotron,
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class TopBanner extends React.Component {
  render() {
    let { nasaPortal, dispatch, routing } = this.props
	  let { result, error } = nasaPortal
    let { apod } = result[0]
    let $top = isMobileCheckPropValue('solid history touchevents', routing)
    
   let jumboStyle = {
      position: "fixed",
      width: '100%',
      top: $top, 
      height: "222px", 
      backgroundImage:'url(' + apod.url + ')', 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      overlow: 'hidden',
      zIndex: '2',
      marginBottom: 0
   }
    return (
    <Jumbotron style={jumboStyle} className="nasaJumbo" >
      <h1 style={{
        color: '#ffffff',
        paddingLeft: 34,
        bottom: 0,
      }}>{apod.title}</h1>
     </Jumbotron>
    );
  }
}
