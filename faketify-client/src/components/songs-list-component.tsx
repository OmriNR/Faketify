
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@mui/material";
import { GetSongs } from "../data/SongsService";
import { usePlayedSong } from '../contexts/played-song-context';

export function SongsList() {

    const {setPlayedSong} = usePlayedSong();
    let songs = GetSongs();

    const ListOfSongs = songs.map(song => {
        return <button type="button" className="list-group-item list-group-item-action" onClick={() => setPlayedSong(song)}>{song.Title}</button>
    });

    return (
        <div style={{height: "800px"}}>
            <div className="list-group overflow-auto shadow" style={{height: "750px"}}>   
                {ListOfSongs}
            </div>
            <Button variant="contained" sx={{ m : 2}} startIcon={<AddCircleOutlineIcon />}>ADD</Button>
        </div>
    )
}