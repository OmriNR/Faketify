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

pub type DB = Arc<Mutex<Vec<Song>>>;

pub fn song_db() -> DB {
    Arc::new(Mutex::new(vec![]))
}

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