import { serve } from "bun";

const PORT = 3049;

serve({
    port: PORT,
    async fetch(request) {
        const { method } = request;
        const { pathname } = new URL(request.url);

        //Get Song by ID
        if (method === 'GET' && pathname.startsWith('/songs/')) {
            const songId = pathname.split('/')[2];
            return new Response(`Get Song by ID: ${songId}`, { status: 200 });
        }
        //Add New Song
        else if (method === 'POST' && pathname === '/songs') {
            return new Response('Add New Song', { status: 201 });
        }
        //Get Playlist by ID
        else if (method === 'GET' && pathname.startsWith('/playlists/')) {
            const playlistId = pathname.split('/')[2];
            return new Response(`Get Playlist by ID: ${playlistId}`, { status: 200 });
        }
        //Get Playlists of user by userId
        else if (method === 'GET' && pathname.startsWith('/users/')) {
            const userId = pathname.split('/')[2];
            return new Response(`Get Playlists of user by ID: ${userId}`, { status: 200 });
        }
        //Update Playlist by ID
        else if (method === 'PUT' && pathname.startsWith('/playlists/')) {
            const playlistId = pathname.split('/')[2];
            return new Response(`Update Playlist by ID: ${playlistId}`, { status: 200 });
        }
        //Create Playlist
        else if (method === 'POST' && pathname === '/playlists') {
            return new Response('Create Playlist', { status: 201 });
        }
        //Delete Playlist by ID
        else if (method === 'DELETE' && pathname.startsWith('/playlists/')) {
            const playlistId = pathname.split('/')[2];
            return new Response(`Delete Playlist by ID: ${playlistId}`, { status: 200 });
        }
        //Update User by ID
        else if (method === 'PUT' && pathname.startsWith('/users/')) {
            const userId = pathname.split('/')[2];
            return new Response(`Update User by ID: ${userId}`, { status: 200 });
        }
        //Create User
        else if (method === 'POST' && pathname === '/users') {
            return new Response('Create User', { status: 201 });
        }
        return new Response('Not Found', {status: 404});
    }
});

console.log(`Server is running at http://localhost:${PORT}`);