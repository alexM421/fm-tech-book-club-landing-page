import React from "react";


import Logo from "../assets/logo.svg";
import PatternGlow from "../assets/pattern-glow.svg"

import ReviewMembership from "./ReviewMembership";

export default function Header () {
    return(
        <div id="header-container">     
            <img className="pattern-glow" src={PatternGlow}/>
            <div id="header">
                <img id="logo" src={Logo}/>
                <div id="header-hero">
                    <div id="header-hero-txt">
                        <h1 className="text-preset-1">Join the<br></br>
                        ultimate tech<br></br>
                        book club<br></br></h1>
                        <p className="text-preset-5">Turn our reading time into learning time with fellow tech enthusiasts .Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.</p>
                        <ReviewMembership/>
                    </div>
                    <img src="/image-hero-desktop.webp"/>
                </div>
            </div>
        </div>
    )
}