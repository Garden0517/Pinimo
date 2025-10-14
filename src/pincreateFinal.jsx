import React from "react";
import {Link } from 'react-router-dom';

import Arrow from "./img/arrowIcon.png"

function PincreateFinal () {

    return (
        <>
        <div style={{height: "130px", position: "fixed", backgroundColor:"#1F1F1F", zIndex:"1000"}}>
                    <div className="create-top">
                        <div className="title-box">
                            <div><Link to='/pincreateText'><img src={Arrow}/></Link></div>
                            <div style={{fontSize: "24px", color:"#fff", width: "42px", marginLeft: "136px"}}>제작</div>
                            <Link to='/pinmap'><div className="x-button">x</div></Link>
                        </div>
                    </div>
                    <div className="under-box">
                        <div className="under-bar"></div>
                        <div className="under-bar"></div>
                        <div className="under-bar"></div>
                    </div>
                </div>
        </>
    )
}

export default PincreateFinal