import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import isMobileCheckPropValue from '../helpers/function'

import { Link, withRouter } from 'react-router';

import l20n, { Entity } from '@sketchpixy/rubix/lib/L20n';

import {
  Label,
  SidebarBtn,
  Dispatcher,
  NavDropdown,
  NavDropdownHover,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  Badge,
  Button,
  Icon,
  Grid,
  Row,
  Radio,
  Col } from '@sketchpixy/rubix';

class Brand extends React.Component {
  render() { 
     let imageStyle = {
      width: "100%",
      maxWidth: "700px",
      height: 'auto'
    }
    return (
      <Navbar.Header {...this.props}>
        <Navbar.Brand tabIndex='-1' style={{postion: 'relative'}}>
          <a href='#'>
            <img src='/imgs/app/myCosmos.svg' style={imageStyle} alt='Our Cosmos Are In Us' width='auto' height='33' />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    );
  }
}

@withRouter
class HeaderNavigation extends React.Component {
  render() {
    return (
      <Nav pullRight>
        <Nav>
          <NavItem className='logout' href='#'>
            <Icon bundle='fontello' glyph='off-1' />
          </NavItem>
        </Nav>
      </Nav>
    );
  }
}

@withRouter
export default class Header extends React.Component {
  render() {
    let navStyle = {
      paddingLeft: 0,
      paddingRight: 0
    }
    let { location, router } = this.props 
    let $top = isMobileCheckPropValue('solid history touchevents', routing)

    return (

      <Grid id='navbar' style={ navStyle } >
        <Row>
          <Col xs={12}>
            <Navbar fixedTop id='rubix-nav-header' style={{top: $top}}>
              <Row>
                <Col xs={3} visible='xs'>
                  <SidebarBtn />
                </Col>
                <Col xs={6} sm={4}>
                  <Brand />
                </Col>
                <Col xs={3} sm={8} collapseRight className='text-right'>
                  <HeaderNavigation />
                </Col>
              </Row>
            </Navbar>
          </Col>
        </Row>
      </Grid>
    );
  }
}
