import React from "react";

import ArrowDown from "../assets/icon-arrow-down.svg";
import Star from "../assets/icon-star.svg";

export default function ReviewMembership ( { isLight }) {

    return(
        <div className="review-membership">
            <button className="text-preset-6 membership-btn">REVIEW MEMBERSHIP OPTIONS <img src={ArrowDown}/></button>
            <div className="review-membership-under">
                <img src="/image-avatars.webp"/>
                <div className="review-membership-text">
                    <div className="stars">
                        <img src={Star}/>
                        <img src={Star}/>
                        <img src={Star}/>
                        <img src={Star}/>
                        <img src={Star}/>
                    </div>
                    <p className="text-preset-7">200+ developers joined already</p>
                </div>
            </div>
        </div>
    )
}