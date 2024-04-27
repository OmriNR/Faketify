import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@mui/material";

export function SongsList() {
    return (
        <div style={{height: "800px"}}>
            <div className="list-group overflow-auto shadow" style={{height: "750px"}}>
                <button type="button" className="list-group-item list-group-item-action">Song 1</button>
                <button type="button" className="list-group-item list-group-item-action">Song 2</button>
                <button type="button" className="list-group-item list-group-item-action">Song 3</button>
                <button type="button" className="list-group-item list-group-item-action">Song 4</button>
                <button type="button" className="list-group-item list-group-item-action">Song 1</button>
                <button type="button" className="list-group-item list-group-item-action">Song 2</button>
                <button type="button" className="list-group-item list-group-item-action">Song 3</button>
                <button type="button" className="list-group-item list-group-item-action">Song 4</button>
                <button type="button" className="list-group-item list-group-item-action">Song 1</button>
                <button type="button" className="list-group-item list-group-item-action">Song 2</button>
                <button type="button" className="list-group-item list-group-item-action">Song 3</button>
                <button type="button" className="list-group-item list-group-item-action">Song 4</button>
                <button type="button" className="list-group-item list-group-item-action">Song 1</button>
                <button type="button" className="list-group-item list-group-item-action">Song 2</button>
                <button type="button" className="list-group-item list-group-item-action">Song 3</button>
                <button type="button" className="list-group-item list-group-item-action">Song 4</button>
                <button type="button" className="list-group-item list-group-item-action">Song 1</button>
                <button type="button" className="list-group-item list-group-item-action">Song 2</button>
                <button type="button" className="list-group-item list-group-item-action">Song 3</button>
                <button type="button" className="list-group-item list-group-item-action">Song 4</button>
                <button type="button" className="list-group-item list-group-item-action">Song 1</button>
                <button type="button" className="list-group-item list-group-item-action">Song 2</button>
                <button type="button" className="list-group-item list-group-item-action">Song 3</button>
                <button type="button" className="list-group-item list-group-item-action">Song 4</button>
                <button type="button" className="list-group-item list-group-item-action">Song 1</button>
                <button type="button" className="list-group-item list-group-item-action">Song 2</button>
                <button type="button" className="list-group-item list-group-item-action">Song 3</button>
                <button type="button" className="list-group-item list-group-item-action">Song 4</button>
                <button type="button" className="list-group-item list-group-item-action">Song 1</button>
                <button type="button" className="list-group-item list-group-item-action">Song 2</button>
                <button type="button" className="list-group-item list-group-item-action">Song 3</button>
                <button type="button" className="list-group-item list-group-item-action">Song 4</button>
            </div>
            <Button variant="contained" sx={{ m : 2}} startIcon={<AddCircleOutlineIcon />}>ADD</Button>
        </div>
    )
}