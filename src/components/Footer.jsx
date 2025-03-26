import React from "react";

import ReviewMembership from "./ReviewMembership";

import Bluesky from "../assets/logo-bluesky.svg"
import Linkedin from "../assets/logo-linkedin.svg"

export default function Footer () {

    return(
        <div id="footer-container">
            <div id="footer">
                <h1 className="text-preset-2">Ready to debug your<br/>reading list?</h1>
                <ReviewMembership/>
                <hr/>
                <div id="footer-credits">
                    <p className="text-preset-7">© 2024 – Tech Book Club</p>
                    <div id="socials">
                        <img src={Bluesky}/>
                        <img src={Linkedin}/>
                    </div>
                </div>
            </div>
        </div>
    )
}