import React from 'react'
import { withRouter } from 'react-router'
import actions from '../redux/actions'
import { connect } from 'react-redux'


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
  Tooltip,
  Jumbotron
} from '@sketchpixy/rubix';

@connect((state)=> state)
@withRouter
export default class Nasa extends React.Component {
  static fetchData(store) {
     store.dispatch(actions.getNasaToday())
    return store.dispatch(actions.getMarsImagesBySol("1000"))
  
}
  constructor(...args) {
	  super(...args);
	  this.state = { showModal: false };

  }

  close() {
	  this.setState({ showModal: false });
  }

  open() {
	  this.setState({ showModal: true });
  }

  render() {
    console.log("Inside All Props-->Nasa: ", this.props)

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
    let jumboStyle = {
      position: "relative",
      width: '100%',
      top: "0", 
      height: "233px", 
      backgroundImage:'url(' + apod.url + ')', 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'left center',
      overlow: 'hidden',
      zIndex: '2',
      marginBottom: 0
   }
    let popover = <Popover title='popover' id='popover'>very popover. such engagement</Popover>;
  	let tooltip = <Tooltip id='tooltip'>wow.</Tooltip>;

    return (
        <div >
          <Jumbotron style={jumboStyle} className="nasaJumbo" >
            <h1 style={{
              color: '#ffffff',
              bottom: 0,
            }}>{apod.title}</h1>
          </Jumbotron>
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
      </div>

    );
  }
}
