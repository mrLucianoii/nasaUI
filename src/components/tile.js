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
  PanelFooter,
  LoremIpsum
} from '@sketchpixy/rubix';

@connect((state) => state)
export default class Tile extends React.Component {
  static fetchData(store) {
    return store.dispatch(actions.getNasaToday())  
  }
  render() {
      return (
        <PanelContainer>
		<Panel>
		  <PanelBody>
			<Grid>
			  <Row>
				<Col xs={12}>
				  <p>
					<LoremIpsum query='5s' />
				  </p>
				</Col>
			  </Row>
			</Grid>
		  </PanelBody>
		  <PanelFooter className='bg-red'>
			<Grid>
			  <Row>
				<Col xs={12} className='fg-white'>
				  <h4>Panel Body + Footer without Panel Header</h4>
				  <h6>Mini Heading</h6>
				</Col>
			  </Row>
			</Grid>
		  </PanelFooter>
		</Panel>
	  </PanelContainer>
      );
  }
}
