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
    // getNasaToday Required Dispatch because TopBanner is top: -200px
     store.dispatch(actions.getNasaToday())
    return store.dispatch(actions.getMarsImagesBySol("1000"))
  
}
  render() {
    let { curiosityStore , dispatch } = this.props
    let imageList = curiosityStore.result[0].imageList.photos
    
    if ( imageList.length > 53 )
      imageList = imageList.splice(0, 53)

    // Future: Write an algorithm that splices large list and lazyloads

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
          <Col md={12} style={{textAlign: "center"}}>
          { typeof imageList.map === 'function' && imageList.map( (imageList) => {
            
              return <Tile 
                key={imageList.id} 
                url={imageList.img_src}
                eDate={imageList.earth_date}
                sol={imageList.sol}
                camera={imageList.camera.full_name}
                />;
            })}
          </Col>
        </Row>
      </div>
    );
  }
}
