use serde::{Deserialize, Serialize};
use std::sync::Arc;
use chrono::{DateTime, Utc};
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

pub type SongsDB = Arc<Mutex<Vec<Song>>>;
pub fn song_db() -> SongsDB {
    Arc::new(Mutex::new(vec![]))
}

#[allow(non_snake_case)]
#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct UpdateSongSchema {
    pub name: Option<String>,
    pub createdBy: Option<String>,
    pub filePath: Option<String>,
}

#[derive(Serialize, Debug)]
pub struct SingleSongResponse {
    pub status: String,
    pub data: Song
}