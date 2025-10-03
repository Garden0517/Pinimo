import React from "react";
import BgIcon from "./img/bgIcon.png";
import EditIcon from "./img/editIcon.png";

function pinggle() {
    return (
        <>
            <div className="pinggle-bg">
                <div className="top-bg">
                    <div className="icongroup">
                        <div className="bgicon"><img src={BgIcon} /></div>
                        <div className="editicon"><img src={EditIcon} /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default pinggle;