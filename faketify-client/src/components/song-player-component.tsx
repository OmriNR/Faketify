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
                <div className="d-flex justify-content-between">
                <div>0:00</div>
                <div>{convertSecondsToMinutes(playedSong.Time)}</div>
                </div>
                <input type="range" className="form-range"></input>
            </div>
        );
    }
    else {
        return <h1 className="text-center">Please choose song</h1>
    }
    
}

function convertSecondsToMinutes (seconds: number) : string {
    const minutes = Math.floor(seconds / 60);
    const extraSeconds = seconds - minutes * 60;

    return "" + minutes + ':' + (extraSeconds < 10 ? '0' : '') + extraSeconds;
}