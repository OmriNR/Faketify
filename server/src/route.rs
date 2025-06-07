use axum::{
    routing::{get, post},
    Router,
    extract::Query,
};

use crate::{
    handler::{
        create_todo_handler, delete_todo_handler, edit_todo_handler, get_todo_handler,
        health_check_handler,
    },
    model,
};

pub fn create_router() -> Router {
    let db = model::todo_db();

    Router::new()
        .route("/api/healthchecker", get(health_check_handler))
        .route(
                    "/api/todos",
                    post(create_todo_handler),
                )
        .route(
            "/api/todos/:id",
            get(get_todo_handler)
                .patch(edit_todo_handler)
                .delete(delete_todo_handler),
        )
        .with_state(db)
}