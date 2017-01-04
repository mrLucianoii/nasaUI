/*
*   OurCosmos Applicaiton helper functions
*   By Luciano S. Aldana II
*
*/

/*
*
*   isMobileCheckPropValue() : Conditions that will display or not display TopBanner Module
*       Used in Modules: TopBanner, Header, SideBar
*       ternary functionality: default delivers css property value for Modules not TopBanner
*       @param moduleName: Module Name
*       @param classString: HTML class name string to look for touchevents className
*       @param routing: to passed from the this.props object to find pathname
*       
*/
export default function isMobileCheckPropValue( moduleName7, classString, routes){
    let _moduleName = " fucker "
    let $hideBanner = false
    let $isMobile = document.getElementsByTagName("html")[0].classList.contains( classString )
   
    if ( routes.path === "/curiosity" || $isMobile ){
        $hideBanner = true
        console.log("Inside If Statement: ", moduleName7, " : " , $hideBanner)

        return ( _moduleName === "TopBanner" ? "-222px" : "0")

    }else {
        return _moduleName === "TopBanner" ? "0" : "222px"
    }
    //Failed Logic, but I'm saving this 
}

