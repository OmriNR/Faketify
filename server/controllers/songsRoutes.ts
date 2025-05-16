import songsService from "../services/songsService";
export async function songsRoutes(request: Request)
{
    const { method } = request;
    const { pathname } = new URL(request.url);

    if (method === "GET" && pathname.startsWith("/api/songs/")) {
        const songId = pathname.split("/")[3];
        if (!songId) {
            return new Response("Song ID is required", { status: 400 });
        }

        const song = await songsService.getSongById(songId); // Assuming you have a function to get a song by ID
        if (!song) {
            return new Response("Song not found", { status: 404 });
        }

        return new Response(JSON.stringify(song), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } else if (method === "POST" && pathname === "/api/songs") {
        const data = await request.json() as { title: string; artist: string, filePath: string };
        if (!data.title || !data.artist || !data.filePath) {
            return new Response("Title and artist are required", { status: 400 });
        }

        const newSong = await songsService.createSong(data); // Assuming you have a function to create a song
        return new Response(JSON.stringify(newSong), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response("Not Found", { status: 404 });
}