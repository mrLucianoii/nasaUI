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
  Button,
  Modal,
  LoremIpsum,
  OverlayTrigger,
  Popover,
  Tooltip
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class Nasa extends React.Component {
  
  constructor(props) {
	  super(props);
	  this.state = { showModal: false };

  }

  close() {
	  this.setState({ showModal: false });
  }

  open() {
	  this.setState({ showModal: true });
  }
  static fetchData(store) {
    return store.dispatch(actions.getNasaToday())
  }
  render() {
    let { nasaPortal, dispatch } = this.props;
	  let { result, error } = nasaPortal
    let { apod } = result[0]

    let imageStyle = {
      width: "100%",
      maxWidth: "300px",
      height: 'auto',
      float: 'left',
      paddingRight: '33px'
    }
    let imageFull = {
      position: "relative",
      width: '100%'
    }
    let popover = <Popover title='popover' id='popover'>very popover. such engagement</Popover>;
  	let tooltip = <Tooltip id='tooltip'>wow.</Tooltip>;

    return (
      <PanelContainer>
          { /*console.log("Inside All Props-->todo: ", this.props)*/ }
          { /*console.log("Inside nasaPortal-->result: ", result)*/ }
          { /*console.log("Inside nasaPortal.prop: ", apod.url)*/ }

        <Panel>
          <PanelBody style={{
            paddingBottom: '50px'
          }}>
            <Grid>
              <Row>
                <Col xs={12} style={{paddingBottom: '25px'}}>
                  <h1>Nasa Astronomy of the Day</h1>
                  <h4>{apod.title}</h4>
                  <img id="picOfDay" src={apod.url}  alt="NASA Picture of the Day" style={imageStyle}/>
                  <Button onClick={::this.open}>Enlarge Image</Button>
                  <p>{apod.explanation}</p>
            		           
                <Modal className="nasa" show={this.state.showModal} onHide={::this.close}>
                  <Modal.Header closeButton>
                      <Modal.Title>{apod.title}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <img id="picOfDay" src={apod.url}  alt="NASA Picture of the Day" style={imageFull}/>

                      </Modal.Body>
                      <Modal.Footer>
                      <Button onClick={::this.close}>Close</Button>
                      </Modal.Footer>
                  </Modal>

                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
