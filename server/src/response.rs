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
pub struct SongData {
    pub song: Song
}

#[derive(Serialize, Debug)]
pub struct SingleSongResponse {
    pub status: String,
    pub data: SongData
}
#[derive(Serialize, Debug)]
pub struct PlaylistData {
    pub playlist: Playlist
}

#[derive(Serialize, Debug)]
pub struct SinglePlaylistResponse {
    pub status: String,
    pub data: PlaylistData
}

#[derive(Serialize, Debug)]
pub struct UserData {
    pub user: User
}

#[derive(Serialize, Debug)]
pub struct UserResponse {
    pub status: String,
    pub data: UserData
}