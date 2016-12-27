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
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class Nasa extends React.Component {
  static fetchData(store) {
    return store.dispatch(actions.getNasaToday());
  }

  render() {
    let imageStyle = {
      width: "100%",
      maxWidth: "300px",
      height: 'auto',
      float: 'left',
      paddingRight: '33px'
    }
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{
            paddingBottom: '50px'
          }}>
            <Grid>
              <Row>
                <Col xs={12} style={{paddingBottom: '25px'}}>
                  <h1>Nasa Astronomy of the Day</h1>
                  <h4>{this.props.nasaPortal.title}</h4>
                  <img id="picOfDay" src={this.props.nasaPortal.url}  alt="NASA Picture of the Day" 
                    style={imageStyle}/>
                  <p>{this.props.nasaPortal.explanation}</p>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
