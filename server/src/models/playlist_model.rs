use std::sync::Arc;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use tokio::sync::Mutex;

#[allow(non_snake_case)]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Playlist {
    pub id: Option<String>,
    pub name: String,
    pub songs: Vec<String>,
    pub createdAt: Option<DateTime<Utc>>,
    pub updatedAt: Option<DateTime<Utc>>,
    pub createdBy: String
}

pub fn playlist_db() -> PlaylistsDB { Arc::new(Mutex::new(vec![])) }
pub type PlaylistsDB = Arc<Mutex<Vec<Playlist>>>;

#[allow(non_snake_case)]
#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct UpdatePlaylistSchema {
    pub name: Option<String>,
    pub songs: Option<Vec<String>>,
    pub createdBy: Option<String>
}

#[derive(Serialize, Debug)]
pub struct PlaylistsResponse {
    pub status: String,
    pub data: Vec<Playlist>
}

#[derive(Serialize, Debug)]
pub struct SinglePlaylistResponse {
    pub status: String,
    pub data: Playlist
}