use axum::{
    routing::{get, post},
    Router,
    extract::Query,
};

use crate::{
    handler::{
        create_song_handler, get_song_handler,
        health_check_handler,
    },
    model,
};

pub fn create_router() -> Router {
    let db = model::song_db();

    Router::new()
        .route("/api/healthchecker", get(health_check_handler))
        .route(
                    "/api/todos",
                    post(create_song_handler),
                )
        .route(
            "/api/todos/{id}",
            get(get_song_handler)
        )
        .with_state(db)
}