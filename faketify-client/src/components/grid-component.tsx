import {useState} from "react";
import { SongsList } from "./songs-list-component";

export function GridComponent() {
    
    return(
        <>
            <div className = "container-fluid fill" style={{height: "800px"}}>
                <div className="row">
                    <div className="col-3">
                        <SongsList />
                    </div>
                    <div className="col-9">Song Player</div>
                </div>
            </div>
        </>
    )
}