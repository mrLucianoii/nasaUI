import React from 'react'
import classNames from 'classnames'
import { IndexRoute, Route } from 'react-router'
import isMobileCheckPropValue from './helpers/function'
import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix'

/* Common Components */
import TopBanner from './common/TopBanner'
import Sidebar from './common/sidebar'
import Header from './common/header'
import Footer from './common/footer'

/* Pages */

import Nasa from './routes/Nasa'
import Curiosity from './routes/Curiosity'

//@withRouter
class App extends React.Component {
  render() {
    let { location } = this.props    
    let $height2 = location.pathname === "/curiosity" ? "50px" : "241px"
    let $phone = location.pathname === "/curiosity" ? " " : "phone"

    let bodyStyle = {
        overflowY: 'auto',
        top: '0',
        marginTop: '52px',
        paddingTop: $height2,
        zIndex: '1'
    }
    return (
      <MainContainer {...this.props}>
          <TopBanner />
          <Sidebar className="leave" />
          <Header/>
          <div id='body' style={bodyStyle} className={$phone} >
            <Grid>
              <Row>
                <Col xs={12}>
                  {this.props.children}
                </Col>
            </Row>
            </Grid>
          </div>
        <Footer />
      </MainContainer>
    );
  }
}

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Nasa} />
    <Route path='/curiosity' component={Curiosity} />
  </Route>
);

export default routes
