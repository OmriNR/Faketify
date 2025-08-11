use std::sync::Arc;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use tokio::sync::Mutex;

#[allow(non_snake_case)]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct User {
    pub id: Option<String>,
    pub name: String,
    pub email: String,
    pub password: String,
    pub followedUsers: Vec<String>,
    pub createdAt: Option<DateTime<Utc>>,
    pub updatedAt: Option<DateTime<Utc>>,
}

pub type UsersDB = Arc<Mutex<Vec<User>>>;
pub fn user_db() -> UsersDB { Arc::new(Mutex::new(vec![])) }

#[allow(non_snake_case)]
#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct UpdateUserSchema {
    pub name: Option<String>,
    pub followedUsers: Option<Vec<String>>,
    pub isUserArtist: Option<bool>
}

#[derive(Serialize, Debug)]
pub struct UserResponse {
    pub status: String,
    pub data: User
}

#[derive(Serialize, Debug)]
pub struct UsersResponse {
    pub status: String,
    pub data: Vec<User>
}