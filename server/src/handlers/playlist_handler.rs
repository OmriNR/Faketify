use axum::{
    extract::{Path, State},
    http::StatusCode,
    response::IntoResponse,
    Json
};
use uuid::Uuid;

use crate::{
    models::{Playlist, PlaylistsDB, UpdatePlaylistSchema, SinglePlaylistResponse, PlaylistsResponse}
};


pub async fn get_playlist_handler(Path(id): Path<String>, State(db): State<PlaylistsDB>) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let id = id.to_string();
    let vec = db.lock().await;

    if let Some(playlist) = vec.iter().find(|playlist| playlist.id == Some(id.to_owned())) {
        let json_response = SinglePlaylistResponse {
            status: "success".to_string(),
            data: playlist.clone()
        };

        return  Ok((StatusCode::OK, Json(json_response)));
    }

    let error_response = serde_json::json!({
        "status": "fail",
        "message": format!("Playlist with id: '{}' not found", id)
    });
    Err((StatusCode::NOT_FOUND, Json(error_response)))
}

pub async fn get_all_playlists_handler(State(db): State<PlaylistsDB>) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let vec = db.lock().await;

    let json_response = PlaylistsResponse {
        status: "success".to_string(),
        data: vec.clone()
    };

    return Ok((StatusCode::OK, Json(json_response)));
}

pub async fn get_playlists_by_created_user_handler(Path(created_by): Path<String>, State(db): State<PlaylistsDB>) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let created_by = created_by.to_string();
    let vec = db.lock().await;

    let user_playlists: Vec<Playlist> = vec.iter().filter(|playlist| playlist.createdBy == created_by).map(|playlist| playlist.to_owned()).collect();

    if user_playlists.is_empty() {
        let error_response = serde_json::json!({
            "status": "fail",
            "message": format!("No playlists found for user: {}", created_by)
        });
        return Err((StatusCode::NOT_FOUND, Json(error_response)));
    }

    let json_response = PlaylistsResponse {
        status: "success".to_string(),
        data: user_playlists
    };
    Ok((StatusCode::OK, Json(json_response)))
}

pub async fn get_playlists_by_ids_handler(State(db): State<PlaylistsDB>, Json(ids): Json<Vec<String>>) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let vec = db.lock().await;

    let user_playlists: Vec<Playlist> = ids.iter().filter_map(|id| vec.iter().find(|playlist| playlist.id == Some(id.to_owned()))).map(|playlist| playlist.to_owned()).collect();

    if user_playlists.is_empty() {
        let error_response = serde_json::json!({
            "status": "fail",
            "message": format!("No playlists found for ids: {:?}", ids)
        });
    }

    let json_response = PlaylistsResponse {
        status: "success".to_string(),
        data: user_playlists
    };
    Ok((StatusCode::OK, Json(json_response)))
}

pub async fn create_playlist_handler(State(db): State<PlaylistsDB>, Json(mut body): Json<Playlist>) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let mut vec = db.lock().await;

    if let Some(playlist) = vec.iter().find(|playlist| playlist.name == body.name && playlist.createdBy == body.createdBy) {
        let error_response = serde_json::json!({
            "status": "fail",
            "message": format!("Playlist '{}' by {} already exists", playlist.name, playlist.createdBy),
        });
        return Err((StatusCode::CONFLICT, Json(error_response)));
    }

    let uuid_id = Uuid::new_v4();
    let datetime = chrono::Utc::now();

    body.id = Some(uuid_id.to_string());
    body.createdAt = Some(datetime);
    body.updatedAt = Some(datetime);

    let playlist = body.to_owned();

    vec.push(body);

    let json_response = SinglePlaylistResponse {
        status: "success".to_string(),
        data: playlist
    };

    Ok((StatusCode::CREATED, Json(json_response)))
}

pub async fn edit_playlist_handler(Path(id): Path<String>, State(db): State<PlaylistsDB>, Json(mut body): Json<UpdatePlaylistSchema>) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let id = id.to_string();
    let mut vec = db.lock().await;

    if let Some(playlist) = vec.iter_mut().find(|playlist| playlist.id == Some(id.clone())) {
        let datetime = chrono::Utc::now();
        let name = body.name.clone().unwrap_or_else(|| playlist.name.clone());
        let songs = body.songs.clone().unwrap_or_else(|| playlist.songs.clone());

        let payload = Playlist {
            id: playlist.id.to_owned(),
            name: if !name.is_empty() {
                name
            } else {
                playlist.name.to_owned()
            },
            songs: songs.to_owned(),
            createdAt: playlist.createdAt,
            updatedAt: Some(datetime),
            createdBy: playlist.createdBy.to_owned()
        };
        *playlist = payload;

        let json_response = SinglePlaylistResponse {
            status: "success".to_string(),
            data: playlist.clone()
        };

        Ok((StatusCode::OK, Json(json_response)))

    } else {
        let error_response = serde_json::json!({
            "status": "fail",
            "message": format!("Playlist with id: '{}' not found", id)
        });
        Err((StatusCode::NOT_FOUND, Json(error_response)))
    }
}

pub async fn delete_playlist_handler(Path(id): Path<String>, State(db): State<PlaylistsDB>) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let id = id.to_string();
    let mut vec = db.lock().await;

    if let Some(pos) = vec.iter().position(|playlist| playlist.id == Some(id.to_owned())) {
        vec.remove(pos);
        return Ok((StatusCode::NO_CONTENT, Json(serde_json::json!(""))));
    }

    let error_response = serde_json::json!({
        "status": "fail",
        "message": format!("Todo with ID: {} not found", id)
    });

    Err((StatusCode::NOT_FOUND, Json(error_response)))
}