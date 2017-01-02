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
  Jumbotron,
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class TopBanner extends React.Component {
  static fetchData(store) {
    return store.dispatch(actions.getNasaToday())  
  }
  render() {
    let { nasaPortal, dispatch } = this.props
	  let { result, error } = nasaPortal

    return (
    <Jumbotron style={{
      position: "fixed",
      width: '100%',
      top: 0, 
      height: "222px", 
      backgroundImage:'url(' + result[0].url + ')', 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      overlow: 'hidden',
      zIndex: '2',
      marginBottom: '0'
  }} className="nasaJumbo" >
      <h1 style={{
        color: '#ffffff',
        paddingLeft: 34,
        bottom: 0,
      }}>{result[0].title}</h1>
     </Jumbotron>
    );
  }
}
