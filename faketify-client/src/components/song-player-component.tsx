import React from "react";
import songLogo from "../images/song-logo.png";
import { usePlayedSong } from "../contexts/played-song-context";

export function SongPlayer() {
    const {playedSong} = usePlayedSong();

    if (playedSong.Title != undefined){
        return (
            <div className="mx-auto" style={{width: "600px"}}>
                <img src={songLogo} className="rounded mx-auto d-block" alt="song" style={{width: "200px", height: "200px"}}></img>
                <h1 className="text-center">{playedSong.Title}</h1>
                <input type="range" className="form-range"></input>
            </div>
        );
    }
    else {
        return <h1 className="text-center">Please choose song</h1>
    }
    
}