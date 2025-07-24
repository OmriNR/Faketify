use axum::{
    routing::{get, post},
    Router,
    extract::Query,
};

use crate::{
    model,
};

use crate::handlers::{
    create_user_handler, get_user_handler, edit_user_handler, does_user_exist_handler,
    create_playlist_handler, get_playlist_handler, edit_playlist_handler, delete_playlist_handler,
    get_all_playlists_handler,
    create_song_handler, get_song_handler
};

pub fn create_router() -> Router {
    let songsDB = model::song_db();
    let playlistsDB = model::playlist_db();
    let usersDB = model::user_db();

    Router::new()
        .route("/api/songs", post(create_song_handler))
        .route("/api/songs/{id}", get(get_song_handler))
        .with_state(songsDB)
        
        .route("/api/playlists", post(create_playlist_handler))
        .route("/api/playlists/all", get(get_all_playlists_handler))
        .route("/api/playlists/{id}", get(get_playlist_handler).put(edit_playlist_handler).delete(delete_playlist_handler))
        .with_state(playlistsDB)
        
        .route("/api/users", post(create_user_handler)) 
        .route("/api/users/{id}", get(get_user_handler).put(edit_user_handler).post(does_user_exist_handler))
        .with_state(usersDB)
    
}