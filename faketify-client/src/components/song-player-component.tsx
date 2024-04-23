import React from "react";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { IconButton } from "@mui/material";


export function SongPlayer() {
    return (
        <div className="card" style={{height: "900px"}}>
            <div className="card-header text-center">
                Song Player
            </div>
            <div className="card-body">

            </div>
            <div className="card-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">

                        </div>
                        <div className="col-5 container">
                            <div className="row">
                                <div className="col">

                                </div>
                                <div className="col d-flex align-items-center flex-row-reverse">
                                    <IconButton size="large">
                                        <SkipPreviousIcon />
                                    </IconButton>
                                    <IconButton size="large">
                                        <ShuffleIcon />
                                    </IconButton>
                                </div>
                                <div className="col-1 d-flex justify-content-center">
                                    <IconButton size="large">
                                        <PlayArrowIcon />
                                    </IconButton>
                                </div>
                                <div className="col d-flex align-items-center">
                                    <IconButton size="large">
                                        <SkipNextIcon />
                                    </IconButton>
                                    <IconButton size="large">
                                        <RestartAltIcon />
                                    </IconButton>
                                </div>
                                <div className="col">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}