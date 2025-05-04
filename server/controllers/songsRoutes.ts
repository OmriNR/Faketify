export async function songsRoutes(request: Request)
{
    const { method } = request;
    const { pathname } = new URL(request.url);

    if (method === "GET" && pathname.startsWith("/songs/")) {
        const songId = pathname.split("/")[2];
        return new Response(`Get Song by ID: ${songId}`, { status: 200 });
    } else if (method === "POST" && pathname === "/songs") {
        return new Response("Add New Song", { status: 201 });
    }

    return new Response("Not Found", { status: 404 });
}