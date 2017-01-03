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
  render() {
		//console.log("Inside Tile: ", this.props)
		let { camera, url, eDate, sol } = this.props

		let moduleStyle = {
 				backgroundImage:'url('+ url +')', 
    	  backgroundRepeat: 'no-repeat',
      	backgroundSize: 'cover',
      	backgroundPosition: 'center center',
				height: '243px',
			}
      return (
				<PanelContainer id="rover">
					<Panel>
						<PanelBody style={ moduleStyle }>
						<Grid>
							<Row>
							<Col xs={12}>
													
							</Col>
							</Row>
						</Grid>
						</PanelBody>
						<PanelFooter className='bg-red'>
						<Grid>
							<Row>
							<Col xs={12} className='fg-white'>
								<h4>SOL: {sol} | Camera: {camera} </h4>
								<h6>Earth Date: {eDate}</h6>
							</Col>
							</Row>
						</Grid>
						</PanelFooter>
					</Panel>
	  </PanelContainer>
      );
  }
}
