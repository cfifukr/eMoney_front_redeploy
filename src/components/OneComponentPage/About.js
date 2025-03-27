import React from "react";
import "./About.css"
import FooterComp from "../FooterComp";
import { Helmet } from 'react-helmet';


function About(){

    return <>
        <Helmet>
             <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="about-page">
            <h1 className="reddit-black-font">
                What do u want? Its all.<span className="reddit-light-font" style={{fontSize:"small"}}>Go away</span>
            </h1>
            <p className="extra-samll">
                some very confidential information in here. My password from everything is "NotYourBusiness"
                </p>

        </div>
        <FooterComp/>
    </>
}

export default About;