use axum::{
    extract::{Path, State},
    http::StatusCode,
    response::IntoResponse,
    Json
};
use uuid::Uuid;

use crate::{
    models::{User, UsersDB, UserResponse, UsersResponse, UpdateUserSchema}
};

pub async fn create_user_handler(State(db): State<UsersDB>, Json(mut body): Json<User>) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let mut vec = db.lock().await;

    if let Some(user) = vec.iter().find(|user| user.name == body.name) {
        let error_response = serde_json::json!({
            "status": "fail",
            "message": format!("User '{}' already exists", user.name),
        });
        return Err((StatusCode::CONFLICT, Json(error_response)));
    }

    let uuid_id = Uuid::new_v4();
    let datetime = chrono::Utc::now();

    body.id = Some(uuid_id.to_string());
    body.createdAt = Some(datetime);
    body.updatedAt = Some(datetime);

    let user = body.to_owned();

    vec.push(body);

    let json_response = UserResponse {
        status: "success".to_string(),
        data: user
    };

    Ok((StatusCode::CREATED, Json(json_response)))
}

pub async fn get_users_handler(State(db): State<UsersDB>) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let vec = db.lock().await;
    
    let json_response = UsersResponse {
        status: "success".to_string(),
        data: vec.clone()
    };
    Ok((StatusCode::OK, Json(json_response)))
}

pub async fn get_user_handler(Path(id): Path<String>, State(db): State<UsersDB>) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let id = id.to_string();
    let vec = db.lock().await;

    if let Some(user) = vec.iter().find(|user| user.id == Some(id.to_owned())) {
        let json_response = UserResponse {
            status: "success".to_string(),
            data: user.clone()
        };

        return  Ok((StatusCode::OK, Json(json_response)));
    }

    let error_response = serde_json::json!({
        "status": "fail",
        "message": format!("User with id: '{}' not found", id)
    });
    Err((StatusCode::NOT_FOUND, Json(error_response)))
}

pub async fn edit_user_handler(Path(id): Path<String>, State(db): State<UsersDB>, Json(mut body): Json<UpdateUserSchema>) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let id = id.to_string();
    let mut vec = db.lock().await;

    if let Some(user) = vec.iter_mut().find(|user| user.id == Some(id.clone())) {
        let datetime = chrono::Utc::now();

        let followedUsers = body.followedUsers.clone().unwrap_or_else(|| user.followedUsers.clone());
        let ownedPlaylists = body.ownedPlaylists.clone().unwrap_or_else(|| user.ownedPlaylists.clone());

        let payload = User {
            id: user.id.to_owned(),
            name: user.name.clone(),
            password: user.password.clone(),
            email: user.email.clone(),
            followedUsers: followedUsers.to_owned(),
            ownedPlaylists: ownedPlaylists.to_owned(),
            createdAt: user.createdAt,
            updatedAt: Some(datetime),
        };
        *user = payload;

        let json_response = UserResponse {
            status: "success".to_string(),
            data: user.clone()
        };

        Ok((StatusCode::OK, Json(json_response)))

    } else {
        let error_response = serde_json::json!({
            "status": "fail",
            "message": format!("User with id: '{}' not found", id)
        });
        Err((StatusCode::NOT_FOUND, Json(error_response)))
    }
}

pub async fn does_user_exist_handler(State(db): State<UsersDB>, Json(mut body): Json<User>) -> Result<impl IntoResponse, (StatusCode, Json<serde_json::Value>)> {
    let password = body.password.to_owned();
    let email = body.email.to_owned();
    let vec = db.lock().await;

    if let Some(user) = vec.iter().find(|user| user.password == password && user.email == email) {
        let json_response = UserResponse {
            status: "success".to_string(),
            data: user.clone()
        };

        return  Ok((StatusCode::OK, Json(json_response)));
    }

    let error_response = serde_json::json!({
        "status": "fail",
        "message": "User not found"
    });
    Err((StatusCode::NOT_FOUND, Json(error_response)))
}