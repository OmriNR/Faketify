export async function usersRoutes(request: Request): Promise<Response> {
    const { method } = request;
    const { pathname } = new URL(request.url);

    if (method === "GET" && pathname.startsWith("/users/")) {
        const userId = pathname.split("/")[2];
        return new Response(`Get Playlists of user by ID: ${userId}`, { status: 200 });
    } else if (method === "POST" && pathname === "/users") {
        return new Response("Create User", { status: 201 });
    } else if (method === "PUT" && pathname.startsWith("/users/")) {
        const userId = pathname.split("/")[2];
        return new Response(`Update User by ID: ${userId}`, { status: 200 });
    }

    return new Response("Not Found", { status: 404 });
}