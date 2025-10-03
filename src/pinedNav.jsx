import React from "react";
import './style.css'
import {Link } from 'react-router-dom'; 
import Secluded from "./img/secluded.png";
import Excellency from "./img/excellency.png";
import Influencer from "./img/influencer.png";
import Alcohol from "./img/alcohol.png";
import Exercise from "./img/exercise.png";


function pinedNav() {
    return (
        <>
            <div className="pinedtop-bg">
                <div className="pined-scroll">
                    <div className="profile-group">
                        <Link to="/pined/pinedSecluded"><div className="profile"><img src={Secluded}/>은둥형</div></Link>
                        <Link to="/pined/pinedExcellency"><div className="profile"><img src={Excellency}/>우등생형</div></Link>
                        <Link to="/pined/pinedInfluencer"><div className="profile"><img src={Influencer}/>인플루언서형</div></Link>
                        <Link to="/pined/pinedAlcohol"><div className="profile"><img src={Alcohol}/>알콜형</div></Link>
                        <Link to="/pined/pinedExercise"><div className="profile"><img src={Exercise}/>운동형</div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default pinedNav;