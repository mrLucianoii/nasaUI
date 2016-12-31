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
    store.dispatch(actions.getNasaToday())
    return store;
   
  }
  render() {
    return (
    <Jumbotron style={{
      top: 0, 
      height: 222, 
      backgroundImage:'url(' + this.props.nasaPortal.result.url + ')', 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      overlow: 'hidden',
      marginBottom: 0,
      zIndex: '2'
  }} >
      <h1 style={{
        color: '#ffffff',
        paddingLeft: 34,
        bottom: 0,
      }}>{this.props.nasaPortal.title}</h1>
     </Jumbotron>
    );
  }
}
