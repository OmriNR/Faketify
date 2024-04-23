import {useState} from "react";
import { SongsList } from "./songs-list-component";
import { SongPlayer } from "./song-player-component";

export function GridComponent() {
    
    return(
        <>
            <div className = "container-fluid fill">
                <div className="row">
                    <div className="col-3">
                        <SongsList />
                    </div>
                    <div className="col-9">
                        <SongPlayer />
                    </div>
                </div>
            </div>
        </>
    )
}