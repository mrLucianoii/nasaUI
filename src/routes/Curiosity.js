import React from 'react';
import { connect } from 'react-redux';
import Tile from '../components/Tile'

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
export default class Curiosity extends React.Component {
  static fetchData(store) {   
    // Required Dispatch because TopBanner is top: -200px
     store.dispatch(actions.getNasaToday())
    return store.dispatch(actions.getMarsImagesBySol())
  
}
  render() {
    let { curiosityStore , dispatch } = this.props
   // curiosityStore.dispatch(actions.getMarsImagesBySol())
    console.log("Inside Curiosity obj.props: ", this.props)
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
   let h1Style = {
      position: "absolute",
      color: '#ffffff',
      paddingLeft: 34,
      bottom: 0
   }
    return (
      <div>
        <Jumbotron style={jumboStyle} className="nasaJumbo" >
        <h1 style={h1Style}>Curiosity</h1>
        </Jumbotron>

        <Row>
          <Col xs={6} md={4}>
            <Tile />
          </Col>
        </Row>

      </div>
    );
  }
}
