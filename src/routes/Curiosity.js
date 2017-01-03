import React from 'react';
import { connect } from 'react-redux';

import actions from '../redux/actions';

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
  Jumbotron
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class Home extends React.Component {
  static fetchData(store) {
    return store.dispatch(actions.getNasaToday())
  }
  render() {
    let { nasaPortal, dispatch } = this.props;
	  let { result, error } = nasaPortal
    let { apod } = result[0]
    let jumboStyle = {
      position: "relative",
      width: '100%',
      top: "0", 
      height: "333px", 
      backgroundImage:'url(/imgs/app/curiosity/curiositypano.jpg)', 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'left center',
      overlow: 'hidden',
      zIndex: '2',
      marginBottom: 0
   }
   // console.log("Inside Curiosity: ", this.props)
    return (
      <Jumbotron style={jumboStyle} className="nasaJumbo" >
      <h1 style={{
        position: "absolute",
        color: '#ffffff',
        paddingLeft: 34,
        bottom: 0,
      }}>Curiosity</h1>
     </Jumbotron>
    );
  }
}
