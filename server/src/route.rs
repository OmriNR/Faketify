use axum::{
    routing::{get, post},
    Router,
    extract::Query,
};

use crate::{
    handler::{
        create_song_handler, get_song_handler,
        get_playlist_handler, delete_playlist_handler, create_playlist_handler, edit_playlist_handler,
        health_check_handler,
    },
    model,
};

pub fn create_router() -> Router {
    let songsDB = model::song_db();
    let playlistsDB = model::playlist_db();

    Router::new()
        .route("/api/healthchecker", get(health_check_handler))
        .route("/api/songs", post(create_song_handler))
        .route("/api/songs/{id}", get(get_song_handler))
        .with_state(songsDB)
        
        .route("/api/playlists", post(create_playlist_handler))
        .route("/api/playlists/{id}", get(get_playlist_handler).put(edit_playlist_handler).delete(delete_playlist_handler))
        .with_state(playlistsDB)
}