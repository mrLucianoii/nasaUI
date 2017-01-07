import React from 'react';

export default class Facebookmeta extends React.Component {
    render() {
        let { nasaText, imageUrl, title } = this.props
        let text = "OurCosomos: " + title
        
        return (
            <div id="Facebookmeta">
            <meta property="og:url" content="http://www.ourcosmos.us" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={ text } />
            <meta property="og:description" content={ nasaText } />
            <meta property="og:image" content={ imageUrl } />
            </div>
        )
    }
}