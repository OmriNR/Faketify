use axum::{
    extract::{Path, Query, State},
    http::StatusCode,
    response::IntoResponse,
    Json
};
use uuid::Uuid;

use crate::{
    models::{Song, SongsDB, SingleSongResponse},
};

pub async fn create_song_handler(
    State(db): State<SongsDB>,
    Json(mut body): Json<Song>,
) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let mut vec = db.lock().await;

    if let Some(song) = vec.iter().find(|song| song.name == body.name && song.createdBy == body.createdBy) {
        let error_response = serde_json::json!({
            "status": "fail",
            "message": format!("Song '{}' by {} already exists", song.name, song.createdBy),
        });
        return Err((StatusCode::CONFLICT, Json(error_response)));
    }

    let uuid_id = Uuid::new_v4();
    let datetime = chrono::Utc::now();

    body.id = Some(uuid_id.to_string());
    body.createdAt = Some(datetime);

    let song = body.to_owned();

    vec.push(body);

    let json_response = SingleSongResponse {
        status: "success".to_string(),
        data: song
    };

    Ok((StatusCode::CREATED, Json(json_response)))
}

pub async fn get_song_handler(
    Path(id): Path<String>,
    State(db): State<SongsDB>,
) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let id = id.to_string();
    let vec = db.lock().await;

    if let Some(song) = vec.iter().find(|song| song.id == Some(id.to_owned())) {
        let json_response = SingleSongResponse {
            status: "success".to_string(),
            data: song.clone()
        };

        return  Ok((StatusCode::OK, Json(json_response)));
    }

    let error_response = serde_json::json!({
        "status": "fail",
        "message": format!("Todo with id: '{}' not found", id)
    });
    Err((StatusCode::NOT_FOUND, Json(error_response)))
}