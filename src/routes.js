import React from 'react'
import classNames from 'classnames'
import { IndexRoute, Route } from 'react-router'
import isMobileCheckPropValue from './helpers/function'
import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix'
import ReactGA from 'react-ga';

/* Common Components */
import TopBanner from './common/TopBanner'
import Sidebar from './common/sidebar'
import Header from './common/header'
import Footer from './common/footer'

/* Pages */

import Nasa from './routes/Nasa'
import Curiosity from './routes/Curiosity'

class App extends React.Component {
  render() {
    let { location } = this.props    
   // let $height2 = location.pathname === "/curiosity" ? "50px" : "241px"
    let $phone = location.pathname === "/curiosity" ? " " : "phone"

    let bodyStyle = {
        overflowY: 'auto',
        top: '0',
        marginTop: '52px',
        paddingTop: '50px',
        zIndex: '1'
    }
    window.fbAsyncInit = function() {
            FB.init({
              appId      : '1220686164678583',
              xfbml      : true,
              version    : 'v2.8'
            });
          };  
    //  console.log("Routes Props", this.props)
    return (
      <MainContainer {...this.props}>
       
        {(function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) {return}
        js = d.createElement(s); js.id = id
        js.src = "//connect.facebook.net/en_US/sdk.js"
        fjs.parentNode.insertBefore(js, fjs)
        }(document, 'script', 'facebook-jssdk'))}

          <Sidebar className="leave" />
          <Header/>
          <div id='body' style={bodyStyle} className={$phone} >
           <div
  className="fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
</div>
            <Grid>
              <Row>
                <Col xs={12}>
                  {this.props.children}
                 
                </Col>
            </Row>
            </Grid>
          </div>
        <Footer />
        { ReactGA.initialize('UA-89935371-1') }
      </MainContainer>
    );
  }
}

function fireTracking() {
    ReactGA.pageview(window.location.hash);
}

const routes = (
  <Route path='/' component={App} onUpdate={fireTracking} >
    <IndexRoute component={Nasa} />
    <Route path='/curiosity' component={Curiosity} />
  </Route>
);

export default routes
