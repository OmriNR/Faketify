# 1. Build stage
FROM rust:latest as builder

# Install musl-tools for static linking
RUN apt-get update && apt-get install -y musl-tools

WORKDIR /app

# Add your source code
COPY . .

# Add the musl target
RUN rustup target add x86_64-unknown-linux-musl

# Build the release binary for musl target
RUN cargo build --release --target x86_64-unknown-linux-musl

# 2. Runtime stage (very small image)
FROM debian:buster-slim

WORKDIR /app

# Copy the statically linked binary from the builder stage
COPY --from=builder /app/target/x86_64-unknown-linux-musl/release/faketify-server .

# Expose your API port (change if needed)
EXPOSE 8080

# Run the binary
CMD ["./faketify-server"]