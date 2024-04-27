import React from "react";
import songLogo from "../images/song-logo.png";

export function SongPlayer() {
    return (
        <div className="mx-auto" style={{width: "600px"}}>
            <img src={songLogo} className="rounded mx-auto d-block" alt="song" style={{width: "200px", height: "200px", marginBottom: "100px"}}></img>
            <input type="range" className="form-range"></input>
        </div>
    );
}