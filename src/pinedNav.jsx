import React from "react";
import './style.css'
import { NavLink } from 'react-router-dom'; 
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
                        <NavLink to="/pined/pinedSecluded" className={({ isActive }) => isActive ? "profile active" : "profile"}>
                            <div className="profile"><img src={Secluded}/>은둥형</div></NavLink>
                        <NavLink to="/pined/pinedExcellency" className={({ isActive }) => isActive ? "profile active" : "profile"}>
                            <div className="profile"><img src={Excellency}/>우등생형</div></NavLink>
                        <NavLink to="/pined/pinedInfluencer" className={({ isActive }) => isActive ? "profile active" : "profile"}>
                            <div className="profile"><img src={Influencer}/>인플루언서형</div></NavLink>
                        <NavLink to="/pined/pinedAlcohol" className={({ isActive }) => isActive ? "profile active" : "profile"}>
                            <div className="profile"><img src={Alcohol}/>알콜형</div></NavLink>
                        <NavLink to="/pined/pinedExercise" className={({ isActive }) => isActive ? "profile active" : "profile"}>
                            <div className="profile"><img src={Exercise}/>운동형</div></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default pinedNav;