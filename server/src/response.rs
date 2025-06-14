use crate::model::Song;
use serde::Serialize;

#[derive(Serialize)]
pub struct GenericResponse {
    pub status: String,
    pub message: String,
}

#[derive(Serialize, Debug)]
pub struct SongData {
    pub song: Song
}

#[derive(Serialize, Debug)]
pub struct SingleSongResponse {
    pub status: String,
    pub data: SongData
}

#[derive(Serialize, Debug)]
pub struct SongListResponse {
    pub status: String,
    pub results: usize,
    pub todos: Vec<Song>
}