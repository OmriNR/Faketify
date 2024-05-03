
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@mui/material";
import { GetSongs } from "../data/SongsService";
import { usePlayedSong } from '../contexts/played-song-context';
import { useState } from 'react';
import Modal, { toggleModal } from './modal-component';


export function SongsList() {
    const {setPlayedSong} = usePlayedSong();
    let songs = GetSongs();

    const ListOfSongs = songs.map(song => {
        return <div className="list-group-item list-group-item-action d-flex justify-content-between" onClick={() => setPlayedSong(song)}>
            <div>{song.Title}</div>
            <div>{song.Time}</div>
        </div>
    });

    return (
        <>
            <div style={{height: "800px"}}>
                <div className="list-group overflow-auto shadow" style={{height: "750px"}}>   
                    {ListOfSongs}
                </div>
                <Button variant="contained" sx={{ m : 2}} startIcon={<AddCircleOutlineIcon />} onClick={() => toggleModal('song-insert-model')}>ADD</Button>
            </div>

            <Modal label='song-insert-model'>
                <h1>Song Insert Modal</h1>
            </Modal>
        </>
    )
}