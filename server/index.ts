import { serve } from "bun";
import { songsRoutes } from "./controllers/songsRoutes";
import { usersRoutes } from "./controllers/usersRoutes";
import { playlistsRoutes } from "./controllers/playlistsRoutes";
const PORT = 3049;

serve({
    port: PORT,
    async fetch(request) {
        const { pathname } = new URL(request.url);

        if (pathname.startsWith("/api/songs")) {
            return songsRoutes(request);
        } else if (pathname.startsWith("/api/users")) {
            return usersRoutes(request);
        } else if (pathname.startsWith("/api/playlists")) {
            return playlistsRoutes(request);
        } else {
            return new Response("Not Found", { status: 404 });
        }
    }
});

console.log(`Server is running on http://localhost:${PORT}`);