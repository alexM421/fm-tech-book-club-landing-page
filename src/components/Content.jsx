import React from "react";

import PatternArrow from "../assets/pattern-arrow.svg"
import Star from "../assets/icon-star.svg"

export default function Content () {

    return(
        <div id="content-container">
            <div id="content">

                <div id="first-slide">
                    <img src="/image-read-together-desktop.webp"/>
                    <div className="slide-text">
                        <h1 className="text-preset-2">Read together,<br/>grow together</h1>
                        <div className="list">
                            <div className="list-element">
                                <img src="/icon-check.svg"/>
                                <p className="text-preset-5">Monthly curated tech reads selected by industry experts</p>
                            </div>
                            <div className="list-element">
                                <img src="/icon-check.svg"/>
                                <p className="text-preset-5">Virtual and in-person meetups for deep-dive discussions</p>
                            </div>
                            <div className="list-element">
                                <img src="/icon-check.svg"/>
                                <p className="text-preset-5">Early access to new tech book releases</p>
                            </div>
                            <div className="list-element">
                                <img src="/icon-check.svg"/>
                                <p className="text-preset-5">Author Q&A sessions with tech thought leaders</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="second-slide">
                    <div className="slide-text">
                        <h1 className="text-preset-2">Not your average book <span>club</span></h1>
                        <p className="text-preset-5">Connect with a community that speaks your language - from <b className="text-preset-5-semibold">Python</b> to <b className="text-preset-5-semibold">TypeScript</b> and everything in between. Our discussions blend technical depth with practical applications.</p>
                    </div>
                    <img src="image-not-average-desktop.webp"/>
                </div>

                <div id="third-slide">
                        <h1 className="text-preset-2">Your tech<br/>reading journey</h1>
                        <div id="membership-tier">
                            <div className="step">
                                <p className="step-number text-preset-6">1</p>
                                <p className="step-description text-preset-6">
                                Choose your membership tier
                                </p>
                                <img src={PatternArrow}/>
                            </div>
                            <div className="step">
                                <p className="step-number text-preset-6">2</p>
                                <p className="step-description text-preset-6">
                                Get your monthly book selection
                                </p>
                                <img src={PatternArrow}/>
                            </div>
                            <div className="step">
                                <p className="step-number text-preset-6">3</p>
                                <p className="step-description text-preset-6">
                                Join our discussion forums
                                </p>
                                <img src={PatternArrow}/>
                            </div>
                            <div className="step">
                                <p className="step-number text-preset-6">4</p>
                                <p className="step-description text-preset-6">
                                Attend exclusive meetups
                                </p>
                            </div>
                        </div>
                </div>

                <div id="fourth-slide">
                    <h1 className="text-preset-2">Membership options</h1>
                    <div id="membership-options">
                        <div className="membership">
                            <h2 className="text-preset-4">Starter</h2>
                            <p className="text-preset-3">$19<span className="text-preset-5">/month</span></p>
                            <hr></hr>
                            <div className="list-element">
                                <img src="/icon-check.svg"/>
                                <p className="text-preset-5">1 book/month</p>
                            </div>
                            <div className="list-element">
                                <img src="/icon-check.svg"/>
                                <p className="text-preset-5">Online forums</p>
                            </div>
                            <button className="text-preset-6 membership-btn">SUBSCRIBE NOW</button>
                        </div>
                        <div className="membership pro">
                            <h2 className="text-preset-4">Pro</h2>
                            <p className="text-preset-3">$29<span className="text-preset-5">/month</span></p>
                            <hr></hr>
                            <div className="list-element">
                                <img src="/icon-check.svg"/>
                                <p className="text-preset-5">2 book/month</p>
                            </div>
                            <div className="list-element">
                                <img src="/icon-check.svg"/>
                                <p className="text-preset-5">Virtual meetups</p>
                            </div>
                            <button className="text-preset-6 membership-btn">SUBSCRIBE NOW</button>
                        </div>
                        <div className="membership">
                            <h2 className="text-preset-4">Enterprise</h2>
                            <p className="text-preset-3">Custom</p>
                            <hr></hr>
                            <div className="list-element">
                                <img src="/icon-check.svg"/>
                                <p className="text-preset-5">Team access</p>
                            </div>
                            <div className="list-element">
                                <img src="/icon-check.svg"/>
                                <p className="text-preset-5">Private sessions</p>
                            </div>
                            <button className="text-preset-6 membership-btn">TALK TO US</button>
                        </div>
                    </div>
                </div>

                <div id="fifth-slide">
                    <div className="stars">
                        <img src={Star}/>
                        <img src={Star}/>
                        <img src={Star}/>
                        <img src={Star}/>
                        <img src={Star}/>
                    </div>
                    <h1 className="text-preset-3">"This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"</h1>
                    <p className="tet-preset-5">Sarah Chen, Software Architect</p>
                </div>
            </div>
        </div>
    )
}