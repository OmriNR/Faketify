use axum::{
    routing::{get, post},
    Router,
    extract::Query,
};

use crate::{
    models::{song_db, playlist_db, user_db}
};

use crate::handlers::{create_user_handler, get_user_handler, edit_user_handler, does_user_exist_handler, create_playlist_handler, get_playlist_handler, edit_playlist_handler, delete_playlist_handler, get_playlists_by_created_user_handler, get_playlists_by_ids_handler, get_all_playlists_handler, create_song_handler, get_song_handler, get_users_handler};

pub fn create_router() -> Router {
    let songsDB = song_db();
    let playlistsDB = playlist_db();
    let usersDB = user_db();

    Router::new()
        .route("/api/songs", post(create_song_handler))
        .route("/api/songs/{id}", get(get_song_handler))
        .with_state(songsDB)
        
        .route("/api/playlists", post(create_playlist_handler))
        .route("/api/playlists/all", get(get_all_playlists_handler))
        .route("/api/playlists/{id}", get(get_playlist_handler).put(edit_playlist_handler).delete(delete_playlist_handler))
        .route("/api/playlists/by_user/{id}", get(get_playlists_by_created_user_handler))
        .route("/api/playlists/by_ids", post(get_playlists_by_ids_handler))
        .with_state(playlistsDB)
        
        .route("/api/users", post(create_user_handler)) 
        .route("/api/users/{id}", get(get_user_handler).put(edit_user_handler).post(does_user_exist_handler))
        .route("/api/users/all", get(get_users_handler))
        .with_state(usersDB)
    
}