use crate::model::Song;
use crate::model::Playlist;
use crate::model::User;
use serde::Serialize;

#[derive(Serialize)]
pub struct GenericResponse {
    pub status: String,
    pub message: String,
}

#[derive(Serialize, Debug)]
pub struct SingleSongResponse {
    pub status: String,
    pub data: Song
}

#[derive(Serialize, Debug)]
pub struct SinglePlaylistResponse {
    pub status: String,
    pub data: Playlist
}

#[derive(Serialize, Debug)]
pub struct UserResponse {
    pub status: String,
    pub data: User
}

#[derive(Serialize, Debug)]
pub struct PlaylistsResponse {
    pub status: String,
    pub data: Vec<Playlist>
}