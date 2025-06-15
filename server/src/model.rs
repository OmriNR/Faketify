use chrono::prelude::*;
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use serde::__private::de::Content;
use tokio::sync::Mutex;

#[allow(non_snake_case)]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Song {
    pub id: Option<String>,
    pub name: String,
    pub createdBy: String,
    pub filePath: String,
    pub createdAt: Option<DateTime<Utc>>,
}

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

#[allow(non_snake_case)]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct User {
    pub id: Option<String>,
    pub name: String,
    pub password: String,
    pub ownedPlaylists: Vec<String>,
    pub followedUsers: Vec<String>,
    pub createdAt: Option<DateTime<Utc>>,
    pub updatedAt: Option<DateTime<Utc>>,
}

pub type SongsDB = Arc<Mutex<Vec<Song>>>;
pub type PlaylistsDB = Arc<Mutex<Vec<Playlist>>>;
pub type UsersDB = Arc<Mutex<Vec<User>>>;
pub fn song_db() -> SongsDB {
    Arc::new(Mutex::new(vec![]))
}
pub fn playlist_db() -> PlaylistsDB { Arc::new(Mutex::new(vec![])) }
pub fn user_db() -> UsersDB { Arc::new(Mutex::new(vec![])) }

#[derive(Debug, Deserialize, Default)]
pub struct QueryOptions {
    pub page: Option<usize>,
    pub limit: Option<usize>,
}

#[allow(non_snake_case)]
#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct UpdateSongSchema {
    pub name: Option<String>,
    pub createdBy: Option<String>,
    pub filePath: Option<String>,
}

#[allow(non_snake_case)]
#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct UpdatePlaylistSchema {
    pub name: Option<String>,
    pub songs: Option<Vec<String>>,
    pub createdBy: Option<String>
}

#[allow(non_snake_case)]
#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct UpdateUserSchema {
    pub name: Option<String>,
    pub password: Option<String>,
    pub ownedPlaylists: Option<Vec<String>>,
    pub followedUsers: Option<Vec<String>>,
}