import React from 'react'
import classNames from 'classnames'
import { IndexRoute, Route } from 'react-router'

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix'

/* Common Components */
import TopBanner from './common/TopBanner'
import Sidebar from './common/sidebar'
import Header from './common/header'
import Footer from './common/footer'

/* Pages */

import Nasa from './routes/Nasa'
import Home2 from './routes/Home2'

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
          <TopBanner />
          <Sidebar />
          <Header/>
          <div id='body' style={{
            overflowY: 'auto',
            top: '0',
            marginTop: '52px',
            paddingTop: '241px !Important',
            zIndex: '1'
          }}>
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
    <Route path='/home2' component={Home2} />
  </Route>
);

export default routes
