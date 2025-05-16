export async function playlistsRoutes(request: Request): Promise<Response> {
    const { method } = request;
    const { pathname } = new URL(request.url);

    if (method === "GET" && pathname.startsWith("/api/playlists/")) {
        const playlistId = pathname.split("/")[3];
        return new Response(`Get Playlist by ID: ${playlistId}`, { status: 200 });
    } else if (method === "POST" && pathname === "/playlists") {
        return new Response("Create Playlist", { status: 201 });
    } else if (method === "PUT" && pathname.startsWith("/api/playlists/")) {
        const playlistId = pathname.split("/")[3];
        return new Response(`Update Playlist by ID: ${playlistId}`, { status: 200 });
    } else if (method === "DELETE" && pathname.startsWith("/api/playlists/")) {
        const playlistId = pathname.split("/")[2];
        return new Response(`Delete Playlist by ID: ${playlistId}`, { status: 200 });
    }

    return new Response("Not Found", { status: 404 });
}