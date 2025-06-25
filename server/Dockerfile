# Use the official Rust image as the base image
FROM rust:latest as builder

# Create a new directory for the application
WORKDIR /usr/src/app

# Update rust and cargo to the latest version
RUN rustup update

# Copy the Cargo.toml and Cargo.lock files
COPY Cargo.toml Cargo.lock ./

# Copy the source code
COPY src ./src

# Build the application in release mode
RUN cargo build --release

# Create a new stage with a minimal image
FROM debian:bullseye-slim

# Install necessary SSL certificates
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy the built binary from the builder stage
COPY --from=builder /usr/src/app/target/release/server /usr/local/bin/app

# Expose the port your application runs on (typically 3000 for Axum)
EXPOSE 3000

# Run the application
CMD ["app"]
