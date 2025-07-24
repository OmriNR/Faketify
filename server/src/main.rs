mod model;
mod response;
mod route;
mod handlers;

use axum::http::{
    header::{ACCEPT,AUTHORIZATION,CONTENT_TYPE},
    HeaderValue, Method,
};


use route::create_router;
use tower_http::cors::CorsLayer;



#[tokio::main]
async fn main() {
    let cors = CorsLayer::new()
        .allow_origin("http://localhost:4200".parse::<HeaderValue>().unwrap())
        .allow_methods([Method::GET, Method::POST, Method::PUT, Method::DELETE])
        .allow_headers(vec![ACCEPT, AUTHORIZATION, CONTENT_TYPE])
        .allow_credentials(true);
    
    let app = create_router().layer(cors);
    
    println!("Server started on http://localhost:8080");
    let listener = tokio::net::TcpListener::bind("0.0.0.0:8080").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
