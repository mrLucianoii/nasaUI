/*
*   OurCosmos Applicaiton helper functions
*   By Luciano S. Aldana II
*
*/

/*
*
*   isMobileCheckPropValue() : Conditions that will display or not display TopBanner Module
*       Used in Modules: TopBanner, Header, SideBar
*       @param classString: HTML class name string to look for touchevents className
*       @param routing: to passed from the this.props object to find pathname
*
*/
export default function isMobileCheckPropValue(classString, routing){
    let $cssProperty = "0px"
    let $isMobile = document.getElementsByTagName("html")[0].className.includes( classString )

    if ( routing.locationBeforeTransitions.pathname === "/curiosity" || $isMobile )
      $cssProperty = "-222px"
    
    return $cssProperty
}

