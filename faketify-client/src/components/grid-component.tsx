import {useState, createContext} from "react";
import { SongsList } from "./songs-list-component";
import { SongPlayer } from "./song-player-component";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {IconButton } from "@mui/material";
import { PlayedSongProvider } from "../contexts/played-song-context";

export function GridComponent() {

    return(
        <PlayedSongProvider>
            <div className = "card">
                <div className="card">
                    <div className="card-header text-center">Faketify</div>
                    <div className="card-body container-fluid fill">
                        <div className="row align-items-center">
                            <div className="col-3 align-items-center">
                                <SongsList />
                            </div>
                            <div className="col-9 align-items-center">
                                <SongPlayer />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer container-fluid fill">
                        <div className="row">
                            <div className="col">

                            </div>
                            <div className="col d-flex align-items-center flex-row-reverse">
                                <IconButton size="large"><SkipPreviousIcon /></IconButton>
                                <IconButton size="large"><ShuffleIcon /></IconButton>
                            </div>
                            <div className="col-1 d-flex justify-content-center" style={{width :"50px", height: "50px"}}>
                                <IconButton size="large"><PlayArrowIcon /></IconButton>
                            </div>
                            <div className="col d-flex align-items-center">
                                <IconButton size="large"><SkipNextIcon /></IconButton>
                                <IconButton size="large"><RestartAltIcon /></IconButton>
                            </div>
                            <div className="col">
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PlayedSongProvider>
    )
}