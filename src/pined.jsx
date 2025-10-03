import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './style.css'
import PinedNav from "./pinedNav.jsx";
import PinedSecluded from "./pinedSecluded.jsx"
import PinedExcellency from "./pinedExcellency.jsx"
import PinedInfluencer from "./pinedInfluencer.jsx"
import PinedAlcohol from "./pinedAlcohol.jsx"
import PinedExercise from "./pinedExercise.jsx"

function pined() {
    return (
        <>
            <PinedNav/>
            <Routes>
                <Route path="pinedSecluded" element={<PinedSecluded />} />
                <Route path="pinedExcellency" element={<PinedExcellency />} />
                <Route path="pinedInfluencer" element={<PinedInfluencer />} />
                <Route path="pinedAlcohol" element={<PinedAlcohol />} />
                <Route path="pinedExercise" element={<PinedExercise />} />
            </Routes>
        </>
    )
}
export default pined;
